import sys
with open('new.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

head_replacement = """<script src="script.js"></script>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="style.css"/>\n"""

new_lines = lines[:7] + [head_replacement] + lines[171:679] + lines[741:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
