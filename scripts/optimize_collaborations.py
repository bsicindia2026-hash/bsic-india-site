import os
from PIL import Image

src_root = '/Users/rajkishores/Workspace/Saran/Super Builder Pics (1)'
dst_root = '/Users/rajkishores/Workspace/Saran/public/collaborations'
os.makedirs(dst_root, exist_ok=True)

# Mapping of source folder to clean slug
folder_mapping = {
    'SDS IIT Roorkee': 'iit_roorkee',
    'Hack2Future IIIT Dharwad': 'iiit_dharwad',
    'SRM Delhi': 'srm_delhi',
    'REVA': 'reva_university',
    'BMSIT': 'bmsit_bangalore',
    'BIT': 'bit_bangalore',
    'DSATM': 'dsatm_bangalore',
    'Tech Flix-DSU': 'dsu_techflix',
    'NMIT': 'nmit_bangalore',
    'Rathinam College Coimbatore': 'rathinam_coimbatore',
    'SMVEC': 'smvec_puducherry',
    'UEM Kolkatta': 'uem_kolkata',
    'TON Hacker House': 'ton_hackerhouse',
    'Saran DP': 'saran'
}

max_dim = 1200
quality = 82

summary = {}

for folder, slug in folder_mapping.items():
    src_dir = os.path.join(src_root, folder)
    if not os.path.exists(src_dir):
        print(f"Skipping missing {folder}")
        continue
    
    files = [f for f in sorted(os.listdir(src_dir)) if not f.startswith('.') and not f.lower().endswith('.arw')]
    summary[slug] = []
    
    idx = 1
    for fname in files:
        src_file = os.path.join(src_dir, fname)
        dst_name = f"{slug}_{idx}.jpg"
        dst_file = os.path.join(dst_root, dst_name)
        
        try:
            with Image.open(src_file) as img:
                if img.mode in ('RGBA', 'P', 'LA'):
                    img = img.convert('RGB')
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                w, h = img.size
                if max(w, h) > max_dim:
                    scale = max_dim / float(max(w, h))
                    new_w = int(w * scale)
                    new_h = int(h * scale)
                    img = img.resize((new_w, new_h), Image.LANCZOS)
                
                img.save(dst_file, 'JPEG', quality=quality, optimize=True)
                sz_kb = os.path.getsize(dst_file) / 1024
                print(f"Saved {dst_name}: {img.size[0]}x{img.size[1]} ({sz_kb:.1f} KB) from {fname}")
                summary[slug].append({
                    'file': f"/collaborations/{dst_name}",
                    'orig': fname,
                    'width': img.size[0],
                    'height': img.size[1],
                    'size_kb': round(sz_kb, 1)
                })
                idx += 1
        except Exception as e:
            print(f"Failed {src_file}: {e}")

print(f"\nSuccessfully processed {sum(len(v) for v in summary.values())} images across {len(summary)} institutions.")
