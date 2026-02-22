import re
import os

to_remove_names = [
    "Pearl",
    "Trippy Fish",
    "Crystal",
    "Blossom Space",
    "Rainbow Apple",
    "Rainbow",
    "Cosmic",
    "Smiley Face"
]

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '', s.lower())

to_remove_slugs = set(slugify(name) for name in to_remove_names)
# Also add specific manual mappings to be safe
to_remove_slugs.add('smiley')
to_remove_slugs.add('pearlx5')
to_remove_slugs.add('cosmicx2')


with open('script.js', 'r') as f:
    js_content = f.read()

# We need to extract all products, filter them, and rewrite the productNames object and totalProducts.
product_pattern = re.compile(r'\s*(\d+):\s*{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*desc:\s*"([^"]+)",\s*filename:\s*"([^"]+)"\s*},?')
lines = js_content.split('\n')

new_js_products = []
images_to_delete = []

# Instead of parsing line by line, let's extract the whole object block
match = re.search(r'    const productNames = \{\n(.*?)\n    \};', js_content, flags=re.DOTALL)
if match:
    block = match.group(1)
    product_lines = block.split('},\n')
    for p_line in product_lines:
        if not p_line.strip(): continue
        p_line = p_line.strip() + ('}' if not p_line.endswith('}') else '')
        
        m = re.search(r'(\d+):\s*{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*desc:\s*"(.*?)",\s*filename:\s*"([^"]+)"\s*}', p_line)
        if m:
            pid, name, cat, desc, fname = m.groups()
            slug = slugify(name)
            if slug in to_remove_slugs or slugify(fname.replace('.jpg', '')) in to_remove_slugs:
                images_to_delete.append(fname)
            else:
                new_js_products.append({
                    'name': name,
                    'category': cat,
                    'desc': desc,
                    'filename': fname
                })
else:
    print("Could not find productNames block")

print(f"Keeping {len(new_js_products)} products. Removing {len(images_to_delete)} products.")

# Generate new script.js product string
products_obj_str = "    const productNames = {\n"
for i, p in enumerate(new_js_products, 1):
    desc_safe = p["desc"].replace('"', '\\"')
    products_obj_str += f'        {i}: {{ name: "{p["name"]}", category: "{p["category"]}", desc: "{desc_safe}", filename: "{p["filename"]}" }},\n'
products_obj_str = products_obj_str.rstrip(',\n') + "\n    };\n"

new_js = re.sub(r'const totalProducts = \d+;', f'const totalProducts = {len(new_js_products)};', js_content)
new_js = re.sub(r'const productNames = \{.*?\n    \};', products_obj_str, new_js, flags=re.DOTALL)

with open('script.js', 'w') as f:
    f.write(new_js)

images_dir = 'assets/images'
for fname in images_to_delete:
    fpath = os.path.join(images_dir, fname)
    if os.path.exists(fpath):
        os.remove(fpath)
        print(f"Removed {fname}")
    else:
        print(f"Could not find file to remove: {fpath}")

