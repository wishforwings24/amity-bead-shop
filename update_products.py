import re
import os
import glob
from collections import defaultdict
import colorsys
try:
    from PIL import Image
except ImportError:
    pass

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '', s.lower())

def get_category_from_image(img_path):
    try:
        img = Image.open(img_path).resize((50, 50)).convert('RGB')
        pixels = list(img.getdata())
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

# Extract old products purely for their descriptions
product_pattern = re.compile(r'(\d+):\s*{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*desc:\s*"([^"]+)",\s*filename:\s*"([^"]+)"\s*}')
old_descriptions = {}
lines = js_content.split('\n')
for line in lines:
    match = product_pattern.search(line)
    if match:
        idx, name, cat, desc, fname = match.groups()
        old_descriptions[slugify(name)] = desc
        old_descriptions[slugify(fname.replace('.jpg', ''))] = desc

images_dir = 'assets/images'
all_jpgs = glob.glob(os.path.join(images_dir, '*.jpg'))

# Filter out logo
all_jpgs = [j for j in all_jpgs if os.path.basename(j) != 'logo.jpg']

# Group by slugified name
grouped = defaultdict(list)
for jpg in all_jpgs:
    fname = os.path.basename(jpg)
    name_no_ext = os.path.splitext(fname)[0]
    slug = slugify(name_no_ext)
    
    # manual duplicate mapping if needed
    if slug == 'smiley': slug = 'smileyface'
    if slug == 'pearlx5': slug = 'pearl'
    if slug == 'cosmicx2': slug = 'cosmic'
    if slug == 'greenpearlx2': slug = 'greenpearl'
    if slug == 'labrownbux2': slug = 'labrownbu'
    if slug == 'layellowbux2': slug = 'layellowbu'
    
    grouped[slug].append(jpg)

final_images = []
for slug, paths in grouped.items():
    if len(paths) > 1:
        # Sort so that names with spaces/caps (shorter length without spaces vs with spaces)
        # Actually, prioritize ones with spaces or uppercase
        # We can just sort by how many non-lowercase-alphanumeric chars they have
        paths.sort(key=lambda p: len(re.findall(r'[^a-z0-9]', os.path.basename(p))), reverse=True)
        
        keep = paths[0]
        final_images.append(keep)
        for remove_path in paths[1:]:
            print(f"Removing duplicate: {remove_path}")
            os.remove(remove_path)
    else:
        final_images.append(paths[0])

# Now create the new JS products array
new_js_products = []
next_id = 1
for jpg in sorted(final_images):
    fname = os.path.basename(jpg)
    name_no_ext = os.path.splitext(fname)[0]
    slug = slugify(name_no_ext)
    desc = old_descriptions.get(slug, "A beautiful handcrafted bead bracelet to add to your collection.")
    cat = get_category_from_image(jpg)
    
    new_js_products.append({
        'id': next_id,
        'name': name_no_ext,
        'category': cat,
        'desc': desc,
        'filename': fname
    })
    next_id += 1

# Generate new script.js product string
products_obj_str = "    const productNames = {\n"
for p in new_js_products:
    desc_safe = p["desc"].replace('"', '\\"')
    products_obj_str += f'        {p["id"]}: {{ name: "{p["name"]}", category: "{p["category"]}", desc: "{desc_safe}", filename: "{p["filename"]}" }},\n'
products_obj_str = products_obj_str.rstrip(',\n') + "\n    };\n"

new_js = re.sub(r'const totalProducts = \d+;', f'const totalProducts = {len(new_js_products)};', js_content)
new_js = re.sub(r'const productNames = \{.*?\n    \};', products_obj_str, new_js, flags=re.DOTALL)

with open('script.js', 'w') as f:
    f.write(new_js)

print(f"Updated script.js with {len(new_js_products)} products.")
