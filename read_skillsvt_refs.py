import os

ref_dir = r'D:\skillsvt\skillsvt_cycle4_expert\references'
for f in os.listdir(ref_dir):
    fp = os.path.join(ref_dir, f)
    with open(fp, 'r', encoding='utf-8') as rf:
        content = rf.read()
    print(f"=== {f} ({len(content)} chars) ===")
    print(content[:400] + "...\n")
