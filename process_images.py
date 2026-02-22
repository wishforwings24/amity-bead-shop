import re
import os
import shutil
import glob
from collections import Counter

try:
    from PIL import Image
    import colorsys
except ImportError:
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image
    import colorsys

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def get_category_from_image(img_path):
    try:
        img = Image.open(img_path).resize((50, 50)).convert('RGB')
        pixels = list(img.getdata())
        
        # Calculate average HSV
        h_sum, s_sum, v_sum = 0, 0, 0
        for r, g, b in pixels:
            h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
            h_sum += h
            s_sum += s
            v_sum += v
        n = len(pixels)
        avg_s = s_sum / n
        avg_v = v_sum / n
        
        if avg_s > 0.6 and avg_v > 0.5:
            return "vibrant"
        elif avg_s < 0.3 and avg_v > 0.7:
            return "pastel"
        elif avg_v < 0.5 or (avg_s < 0.4 and avg_v < 0.8):
            return "classic"
        else:
            return "limited"
    except Exception as e:
        return "classic"

# Read script.js
with open('script.js', 'r') as f:
    js_content = f.read()

# Extract existing products
product_pattern = re.compile(r'(\d+):\s*{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*desc:\s*"([^"]+)"\s*}')
existing_products = []
lines = js_content.split('\n')
for line in lines:
    match = product_pattern.search(line)
    if match:
        idx, name, cat, desc = match.groups()
        existing_products.append({
            'id': int(idx),
            'name': name,
            'category': cat,
            'desc': desc
        })

existing_products.sort(key=lambda x: x['id'])

images_dir = 'assets/images'
new_js_products = []

# Rename existing images
for p in existing_products:
    old_path = os.path.join(images_dir, f"product-{p['id']}.jpg")
    slug = slugify(p['name'])
    new_path = os.path.join(images_dir, f"{slug}.jpg")
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
    p['filename'] = f"{slug}.jpg"
    new_js_products.append(p)

    # replace in js_content occurrences of product-X.jpg but wait, we will rewrite the render logic

# Process new images
all_jpgs = glob.glob(os.path.join(images_dir, '*.jpg'))
known_filenames = set([p['filename'] for p in new_js_products])
known_filenames.add('logo.jpg')

next_id = max([p['id'] for p in new_js_products]) + 1

for jpg in all_jpgs:
    fname = os.path.basename(jpg)
    if fname not in known_filenames:
        # this is a new image
        # Rename it to a slugified version
        # Extract name without extension
        name_no_ext = os.path.splitext(fname)[0]
        slug = slugify(name_no_ext)
        new_fname = f"{slug}.jpg"
        new_path = os.path.join(images_dir, new_fname)
        
        # Handle duplicates
        counter = 1
        while os.path.exists(new_path) and new_path != jpg:
            new_fname = f"{slug}-{counter}.jpg"
            new_path = os.path.join(images_dir, new_fname)
            counter += 1
            
        os.rename(jpg, new_path)
        
        # Categorize
        category = get_category_from_image(new_path)
        
        # Add to products
        new_js_products.append({
            'id': next_id,
            'name': name_no_ext,
            'category': category,
            'desc': "A beautiful handcrafted bead bracelet to add to your collection.",
            'filename': new_fname
        })
        next_id += 1

# Generate new script.js product string
products_obj_str = "    const productNames = {\n"
for p in new_js_products:
    products_obj_str += f'        {p["id"]}: {{ name: "{p["name"]}", category: "{p["category"]}", desc: "{p["desc"]}", filename: "{p["filename"]}" }},\n'
products_obj_str = products_obj_str.rstrip(',\n') + "\n    };\n"

# We must replace the productNames object in script.js and also update totalProducts
# Reconstruct script.js
new_js = re.sub(r'const totalProducts = \d+;', f'const totalProducts = {len(new_js_products)};', js_content)

# Regex to replace productNames object
new_js = re.sub(r'const productNames = \{.*?\n    \};', products_obj_str, new_js, flags=re.DOTALL)

# Update render logic to use filename
new_js = new_js.replace("assets/images/product-${p.id}.jpg", "assets/images/${p.filename}")
new_js = new_js.replace("assets/images/product-${id}.jpg", "assets/images/${productNames[id].filename}")
new_js = new_js.replace("assets/images/product-${item.id}.jpg", "assets/images/${productNames[item.id] ? productNames[item.id].filename : 'product-' + item.id + '.jpg'}")


with open('script.js', 'w') as f:
    f.write(new_js)

print(f"Processed {len(existing_products)} existing products and {len(new_js_products) - len(existing_products)} new products.")
