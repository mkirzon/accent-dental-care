import json

with open('baseline_scrape/site-content.json', 'r') as f:
    data = json.load(f)

print(f'Total pages crawled: {len(data)}')
print()

urls = [page['url'] for page in data]

categories = {}
for url in urls:
    path = url.split('accentdentalcaresd.com')[1] or '/'
    if path == '/' or path == '' or path.endswith('.aspx'):
        cat = 'home/legacy'
    elif '/our-practice' in path:
        cat = 'our-practice'
    elif '/patient-information' in path:
        cat = 'patient-information'
    elif '/reviews' in path:
        cat = 'reviews'
    elif '/procedures' in path:
        cat = 'procedures'
    elif '/covid' in path:
        cat = 'covid'
    elif '/appointment' in path:
        cat = 'appointment'
    elif '/contact' in path:
        cat = 'contact'
    else:
        cat = 'other'
    categories.setdefault(cat, []).append(path)

for cat, paths in sorted(categories.items(), key=lambda x: -len(x[1])):
    print(f'{cat}: {len(paths)} pages')
    if len(paths) <= 25:
        for p in paths:
            print(f'  {p}')
    else:
        for p in paths[:15]:
            print(f'  {p}')
        print(f'  ... and {len(paths)-15} more')
    print()

# Now let's look at the key content pages
print("=" * 80)
print("KEY PAGE CONTENT ANALYSIS")
print("=" * 80)

for page in data[:10]:
    print(f"\nURL: {page['url']}")
    print(f"Title: {page['title']}")
    print(f"Excerpt: {page.get('excerpt', 'N/A')[:150]}")
    headings = [h['text'].strip() for h in page.get('headings', []) if h['text'].strip()]
    if headings:
        print(f"Headings: {headings[:8]}")
    text_len = len(page.get('text', ''))
    print(f"Text length: {text_len} chars")
    print("-" * 40)