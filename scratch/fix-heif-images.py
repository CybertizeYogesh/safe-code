import os
import re

project_root = r"c:\Users\Yogesh Poonia\Desktop\temp\safe-codee"

source_extensions = ['.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.md']
exclude_dirs = ['node_modules', '.next', '.git', 'dist', 'build', '.vercel']

# Step 1: Update code references
total_updates = 0
for root, dirs, files in os.walk(project_root):
    # Exclude directories
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if any(file.endswith(ext) for ext in source_extensions):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has references
                new_content = content.replace('about-2-right.jpg', 'about-2-right.webp')
                if new_content != content:
                    updates = content.count('about-2-right.jpg')
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {updates} reference(s) in {os.path.relpath(file_path, project_root)}")
                    total_updates += updates
            except Exception as e:
                print(f"Error reading/writing {file_path}: {e}")

print(f"Total reference updates: {total_updates}")

# Step 2: Delete original files
paths_to_delete = [
    os.path.join(project_root, "public", "assets", "img", "about", "about-2-right.jpg"),
    os.path.join(project_root, "public", "images", "about", "about-2-right.jpg")
]

for path in paths_to_delete:
    if os.path.exists(path):
        try:
            os.remove(path)
            print(f"Deleted original: {os.path.relpath(path, project_root)}")
        except Exception as e:
            print(f"Error deleting {path}: {e}")
    else:
        print(f"File not found to delete: {os.path.relpath(path, project_root)}")
