"""grid — regenerate the homepage proofgrid: the 3 most recent cases per category.

    python3 grid.py            # rewrite the marked block in index.html
    python3 grid.py --dry      # report only

Damiano, 2026-08-03: "build an automatism [so] that those cases there are simply
the most recent ones for that category."

The grid is 3 cards x 4 categories (Imagine / Design / Evaluate / Learn). The
category is `record.approach` in the ledger — it already used exactly those four
words — and the page each entry owns is `ids.site_page.coplanai`, harvested from
the live site on 2026-08-03. So the selection is a query, not a hand-list.

TWO THINGS KEEP THIS SAFE:

1. **It owns only what is between the markers.** `index.html` is hand-written
   marketing; a generator has no business rewriting it. The block was marked
   once, by hand, with <!--POS:cards--> … <!--/POS:cards-->, and everything
   outside is never touched. If the markers are missing it refuses.

2. **A card is only emitted for an entry that has BOTH a category and a page.**
   No category means it cannot be placed in a section; no page means the card
   would link nowhere. Neither is guessed, and both shortfalls are reported.

The card markup is lifted from a real card in the page rather than reinvented,
same principle as the case-page builder: reuse the design, do not reimplement it.
"""
from __future__ import annotations

import html as H
import json
import re
import sys
from collections import defaultdict
from pathlib import Path

HERE = Path(__file__).resolve().parent
POS = Path("/Users/uai/SPIN Unit Dropbox/Damiano Cerrone/Claude code/Portfolio OS")
SITE = "coplanai"
DRY = "--dry" in sys.argv
PER_CATEGORY = 3

# category -> the sticker colour the hand-written cards already use
COLOUR = {"imagine": "terra", "design": "sky", "evaluate": "green", "learn": "gold"}
ORDER = ("imagine", "design", "evaluate", "learn")
OPEN, CLOSE = "<!--POS:cards-->", "<!--/POS:cards-->"


def val(v):
    return v[0] if isinstance(v, list) and v else v


def orgs():
    import yaml
    d = yaml.safe_load((POS / "organisations.yml").read_text()) or {}
    return {k: (v.get("name") if isinstance(v, dict) else v) or k for k, v in d.items()}


def pool():
    led = json.loads((POS / "ledger.json").read_text())["entries"]
    out, no_cat, no_page = [], [], []
    for e in led:
        if SITE not in (e.get("eligible_for") or []):
            continue
        cat = val((e.get("record") or {}).get("approach"))
        page = ((e.get("ids") or {}).get("site_page") or {}).get(SITE)
        if not page:
            no_page.append(e["slug"]); continue
        if not cat:
            no_cat.append(e["slug"]); continue
        out.append((str(cat).lower(), e, page))
    return out, no_cat, no_page


def existing_cards(html: str) -> dict:
    """href -> the card that is already on the page. Reused so a regenerated
    grid keeps its cover images and hand-written blurbs; only WHICH cards
    appear, and in what order, is computed."""
    return {m.group(1): m.group(0)
            for m in re.finditer(r'<a class="card rise" href="([^"]+)"[\s\S]*?</a>', html)}


def restyle(card: str, cat: str) -> str:
    """Keep the card, correct its sticker to the ledger's category."""
    label = cat.capitalize()
    return re.sub(r'class="sticker \w+"([^>]*)>[^<]*<',
                  lambda m: f'class="sticker {COLOUR[cat]}"{m.group(1)}>{label}<',
                  card, count=1)


def hero_for(page: str) -> str | None:
    """The card image comes from the target PAGE's own hero, path-corrected from
    page-relative (../../wp-content/…) to root-relative. Cloning the sample card
    without this gave nine different projects the same photograph."""
    f = HERE / page / "index.html"
    if not f.exists():
        return None
    h = f.read_text()
    m = re.search(r'class="case-hero-img"[^>]*src="([^"]+)"', h)
    if not m:
        m = re.search(r'src="([^"]*wp-content/uploads[^"]+)"', h)
    if not m:
        return None
    src = re.sub(r"^(\.\./)+", "", m.group(1))          # -> root-relative
    if "coplan-ai-logo" in src:                          # the theme placeholder
        return None
    return src


def make_card(sample: str, e: dict, page: str, cat: str, names: dict) -> str:
    """A card for an entry that has no card yet — cloned from a real one."""
    title = (e.get("names") or {}).get("case") or e.get("title") or e["slug"]
    rec = e.get("record") or {}
    client = val(rec.get("client")) or val(rec.get("organisation")) or ""
    client = names.get(client, str(client).replace("-", " ").title()) if client else ""
    brief = " ".join(str(rec.get("brief") or "").split())
    brief = brief.split(". ")[0][:150] if brief else ""
    c = sample
    c = re.sub(r'href="[^"]*"', f'href="{page}"', c, count=1)
    hero = hero_for(page)
    if hero:
        c = re.sub(r'(<img[^>]*\ssrc=")[^"]*(")', lambda m: m.group(1) + hero + m.group(2), c, count=1)
    else:
        # No image is better than the WRONG image — but the STICKER lives inside
        # the picture frame, so removing the frame silently removed the category
        # label from nine of twelve cards. Drop only the <img>; the frame keeps
        # its background and its sticker, and the card still reads as a card.
        c = re.sub(r'<img[^>]*>', "", c, count=1)
    c = restyle(c, cat)
    c = re.sub(r'(<strong[^>]*>)[^<]*(<)', lambda m: m.group(1) + H.escape(title) + m.group(2), c, count=1)
    c = re.sub(r'(class="mono-n"[^>]*>)[^<]*(<)',
               lambda m: m.group(1) + str(e.get("year") or "") + m.group(2), c, count=1)
    c = re.sub(r'(text-transform:uppercase">)[^<]*(<)',
               lambda m: m.group(1) + H.escape(client) + m.group(2), c, count=1)
    if brief:
        c = re.sub(r'(margin:2px 0 0">)[^<]*(<)',
                   lambda m: m.group(1) + H.escape(brief) + m.group(2), c, count=1)
    return c


def main() -> int:
    idx = HERE / "index.html"
    html = idx.read_text()
    if OPEN not in html or CLOSE not in html:
        print(f"markers {OPEN} / {CLOSE} not found in index.html — refusing to guess "
              f"which part of a hand-written page to rewrite")
        return 1

    rows, no_cat, no_page = pool()
    by = defaultdict(list)
    for cat, e, page in rows:
        by[cat].append((e, page))

    cards = existing_cards(html)
    names = orgs()
    sample = next(iter(cards.values()))
    out, chosen, cloned = [], [], []
    for cat in ORDER:
        picks = sorted(by.get(cat, []), key=lambda x: -(x[0].get("year") or 0))[:PER_CATEGORY]
        for e, page in picks:
            have = cards.get(page) or cards.get(page + "/")
            if have:
                out.append(restyle(have, cat))
            else:
                out.append(make_card(sample, e, page, cat, names))
                cloned.append(page)
            chosen.append((cat, e.get("year"), page))

    block = OPEN + "".join(out) + CLOSE
    new = re.sub(re.escape(OPEN) + r"[\s\S]*?" + re.escape(CLOSE), lambda _: block, html, count=1)

    print(f"cards: {len(out)}   (new cards cloned: {len(cloned)})")
    for cat in ORDER:
        picks = [c for c in chosen if c[0] == cat]
        print(f"  {cat:9} {len(by.get(cat, [])):>2} available -> " +
              ", ".join(f"{p.split('/')[-1]} ({y})" for _, y, p in picks))
    print(f"\nnot placeable: {len(no_cat)} without a category, {len(no_page)} without a page")
    if no_cat:
        print("  no category:", ", ".join(no_cat[:8]) + (" …" if len(no_cat) > 8 else ""))

    if DRY:
        print("\nDRY RUN — index.html untouched")
        return 0
    idx.write_text(new)
    print("\nindex.html grid rewritten (only between the markers)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
