"""grid — regenerate the homepage "four tasks" block: tabs, taglines, cards.

    python3 grid.py            # rewrite the marked block in index.html
    python3 grid.py --dry      # report only

Damiano, 2026-08-03: "build an automatism [so] that those cases there are simply
the most recent ones for that category."

The block is one tab and one panel per TASK — Imagine · Test · Shape · Improve,
in the order a place travels them — each panel holding the 3 most recent cases
carrying that task. The task is `record.approach` in the Portfolio OS ledger (the
field key is still `approach`; its vocabulary became the engagement framework on
2026-08-25) and the page each entry owns is `ids.site_page.coplanai`. So the
selection is a query, not a hand-list.

TASKS, NOT MANDATES. On this site `mandate` means what an engagement PRODUCES —
"the output is always a mandate" is the homepage's own line, three paragraphs
above this block. The four cells are what it ASKS PEOPLE TO DO.

WHY THIS NOW OWNS THE TABS AND THE PANELS, not just the cards. Until 2026-08-25
the markers sat INSIDE the first panel's .proofgrid, wrapping all twelve cards,
because they were placed before the panels existed. Any run would have collapsed
all four categories back into the Evaluate panel and left the other three empty —
which is the exact bug the 2026-08-04 audit had repaired by hand. A generator
whose output shape disagrees with the page's shape is a loaded gun; the fix is to
let it own the whole shape.

THREE THINGS KEEP THIS SAFE:

1. **It owns only what is between the markers.** `index.html` is hand-written
   marketing; a generator has no business rewriting it. The block is marked with
   <!--POS:cards--> … <!--/POS:cards-->, and everything outside is never touched.
   If the markers are missing it refuses.

2. **A card is only emitted for an entry that has BOTH a task and a page.**
   No task means it cannot be placed in a panel; no page means the card would
   link nowhere. Neither is guessed, and both shortfalls are reported.

3. **A cloned card's blurb only ever quotes the target PAGE, never the ledger.**
   `record.brief` is internal editorial prose — contract values, cost centres,
   admin-filename citations — and it leaked straight onto the live homepage
   until 2026-08-26 (the GIZ card read "EUR 14,850 lump sum, cost centre
   G-018124…" to every visitor). `public_blurb_for()` reads only what the case
   page already shows in public; a thin stub with nothing written yet gets NO
   blurb rather than an invented or borrowed one — see its docstring for the
   companion bug this also closed (a stale sample's text surviving onto an
   unrelated card when there was nothing to substitute).

The card markup is lifted from a real card in the page rather than reinvented,
same principle as the case-page builder: reuse the design, do not reimplement it.
The tab and panel chrome is written here, because it is four lines of it and it
has to be able to state a task the page does not yet contain.
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

# mandate -> the sticker colour. Chosen for CONTINUITY with what each band
# inherited when the four categories were re-cut on 2026-08-25: Imagine kept its
# own word and its terra, Shape took Design's sky because it inherits most of it,
# Test took Learn's gold, Improve took Evaluate's green. Nobody has to relearn a
# colour to read the same case.
COLOUR = {"imagine": "terra", "test": "gold", "shape": "sky", "improve": "green"}
# reading order is the order a place travels: vision, options, design, review.
ORDER = ("imagine", "test", "shape", "improve")
# the panel tagline: the mandate's own question, then what it asks of a client.
# Straight from "The Mandate Matrix" §1 — not marketing written around it.
TAGLINE = {
    "imagine": ("What could it be?",
                "Nothing is decided. People bring the future they want, and it becomes the brief."),
    "test":    ("What if?",
                "A scenario goes to people before anything is decided, and we learn what they could live with."),
    "shape":   ("How should we design it?",
                "What will be built is decided; how it takes shape is open, and what people propose feeds the design."),
    "improve": ("How could it be better?",
                "The design exists. People react to the actual drawings, while there is still time to revise."),
}
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


def _case_body_html(page: str) -> str | None:
    """The target page's OWN `case-body` element, matched brace-for-brace so a
    nested <div> inside a real write-up cannot truncate the scan early."""
    f = HERE / page / "index.html"
    if not f.exists():
        return None
    h = f.read_text()
    m = re.search(r'<div class="case-body[^"]*">', h)
    if not m:
        return None
    i = m.end()
    depth = 1
    for mm in re.finditer(r"<div\b|</div>", h[i:]):
        depth += 1 if mm.group(0) == "<div" else -1
        if depth == 0:
            return h[i:i + mm.start()]
    return None


def public_blurb_for(page: str) -> str:
    """A card blurb sourced ONLY from what the target page already shows the
    public — never from `record.brief`.

    `record.brief` is internal editorial and audit prose: contract values, cost
    centres, admin-filename citations, org-tagging notes to a colleague. It is
    not written for a visitor and it is not supposed to reach one. It did:
    before this function existed, make_card() quoted `record.brief` straight
    onto the live homepage, and the GIZ card read "EUR 14,850 lump sum, cost
    centre G-018124, contract period 01.04.2026–31.03.2027…" to everyone who
    loaded coplanai.com (caught 2026-08-26). The fix is to only ever quote text
    that is already public — i.e. already rendered on the page the card links
    to — so a leak here is structurally impossible rather than merely avoided.

    A thin stub page (no `web draft.md` written yet) has nothing in its
    `case-body` beyond the eyebrow line, so this returns "" for one — and an
    empty return must make the CALLER remove the blurb paragraph outright,
    never leave a stale one showing. That silent carry-over is the other half
    of the same 2026-08-26 bug: Milan's cloned card, with no `record.brief` to
    substitute, kept the sample card's ATHENS text instead of showing nothing.
    """
    body = _case_body_html(page)
    if not body:
        return ""
    # the first REAL paragraph only — not the eyebrow, and not a heading like
    # "The challenge" run on into the sentence after it (GIZ's card read "The
    # challenge Connective Cities brings together…" before this excluded <h2>)
    m = re.search(r'<p class="wp-block-paragraph[^"]*">(.*?)</p>', body, re.S)
    if not m:
        return ""
    text = re.sub(r"<[^>]+>", " ", m.group(1))
    text = H.unescape(text)
    text = " ".join(text.split())
    if len(text) < 40:                    # eyebrow-only stub — nothing real to quote
        return ""
    first = re.split(r"(?<=[.!?])\s+", text)[0]
    return first[:180]


def make_card(sample: str, e: dict, page: str, cat: str, names: dict) -> str:
    """A card for an entry that has no card yet — cloned from a real one."""
    title = (e.get("names") or {}).get("case") or e.get("title") or e["slug"]
    rec = e.get("record") or {}
    client = val(rec.get("client")) or val(rec.get("organisation")) or ""
    client = names.get(client, str(client).replace("-", " ").title()) if client else ""
    blurb = public_blurb_for(page)          # NEVER rec.get("brief") — see its docstring
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
    # NO SILENT CARRY-OVER. Either write real text or remove the paragraph
    # outright — leaving the substitution unattempted is what let Milan's card
    # show Athens' blurb (the sample's own text) under Milan's name and photo.
    if blurb:
        c = re.sub(r'(margin:2px 0 0">)[^<]*(<)',
                   lambda m: m.group(1) + H.escape(blurb) + m.group(2), c, count=1)
    else:
        c = re.sub(r'<p[^>]*margin:2px 0 0"[^>]*>[^<]*</p>', "", c, count=1)
    return c


def tab(cat: str, first: bool) -> str:
    """One pill in the tab row. `data-f` is the mandate key and is what the
    page's own click handler matches on, so it must equal the panel's."""
    c = COLOUR[cat]
    return (f'<button class="ff-tab" data-f="{cat}"' + (' data-on="1"' if first else '')
            + f' style="--fc:var(--{c})"><span class="d" style="background:var(--{c})">'
            + f'</span>{cat.capitalize()}</button>')


def panel(cat: str, cards_html: str, first: bool) -> str:
    """One panel: the mandate's question in its own colour, the sentence that
    locates a client under it, then the three most recent cases.

    A TASK WITH NO PUBLISHED CASE SAYS SO. Improve is the real instance — the
    portfolio's only Improve engagement has no ledger record and no publishable
    page — and an empty panel under a live tab reads as a bug.
    Saying "none published yet" is both true and the more useful thing for a
    client to know: it is where the practice is thin."""
    c = COLOUR[cat]
    q, line = TAGLINE[cat]
    body = cards_html or (
        '<p style="grid-column:1/-1;color:var(--muted);font-family:var(--serif);'
        'font-style:italic;margin:6px 0 2px">No case published under this task '
        'yet &mdash; ask us about the work that is not on the site.</p>')
    return (f'<div class="ff-panel" data-f="{cat}"' + (' data-on="1"' if first else '') + '>'
            + f'<div class="ff-tagline" style="--fc:var(--{c})"><b>{H.escape(cat.capitalize())} &middot; '
            + f'{H.escape(q)}</b> {H.escape(line)}</div>'
            + f'<div class="proofgrid">{body}</div></div>')


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
    # THE SAMPLE MUST HAVE THE FULL REFERENCE MARKUP — image slot, sticker,
    # title, client line, AND a blurb paragraph — because make_card() clones
    # its structure verbatim and only ever fills or strips what is already
    # there. `next(iter(cards.values()))` picked whichever card is FIRST in
    # the file, which after 2026-08-26's fix can be one of the entries that
    # legitimately has no blurb (a thin stub) — and cloning FROM a blurb-less
    # sample means the substitution regex has nothing to match, so every
    # clone made from it goes blank regardless of what public_blurb_for()
    # found, even for an entry (like GIZ) that has real, safe text to show.
    sample = next((c for c in cards.values() if 'margin:2px 0 0"' in c),
                  next(iter(cards.values())))
    tabs, panels, chosen, cloned = [], [], [], []
    for n, cat in enumerate(ORDER):
        picks = sorted(by.get(cat, []), key=lambda x: -(x[0].get("year") or 0))[:PER_CATEGORY]
        out = []
        for e, page in picks:
            have = cards.get(page) or cards.get(page + "/")
            if have:
                out.append(restyle(have, cat))
            else:
                out.append(make_card(sample, e, page, cat, names))
                cloned.append(page)
            chosen.append((cat, e.get("year"), page))
        tabs.append(tab(cat, first=(n == 0)))
        panels.append(panel(cat, "".join(out), first=(n == 0)))

    block = (OPEN
             + '<div class="ff-tabs" role="tablist">' + "".join(tabs)
             + '<a class="ff-tab ff-tab-all" href="use-cases/">See all use cases '
               '<span aria-hidden="true">&rarr;</span></a></div>'
             + "".join(panels)
             + CLOSE)
    new = re.sub(re.escape(OPEN) + r"[\s\S]*?" + re.escape(CLOSE), lambda _: block, html, count=1)

    print(f"cards: {len(chosen)}   (new cards cloned: {len(cloned)})")
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
