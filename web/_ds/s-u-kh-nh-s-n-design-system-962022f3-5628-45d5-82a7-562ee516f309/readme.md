# Sầu Khánh Sơn — Design System

A Gen-Z direct-to-consumer brand selling **flash-frozen, hand-graded durian from
Khánh Sơn (Khánh Hoà, Vietnam)**. A family durian orchard, taken to market by the
founders' Gen Z child: parents grow and grade, the founder tears the fruit down to
audited segments, blast-freezes it, and vacuum-bags it so the customer never has to
crack a spiky shell again.

The whole identity is built to make frozen fruit look *appetising on a dark screen*:
**Deep Forest ground + Sầu Vàng Cơm gold + Xanh Vỏ Vườn green + Tuyết Cấp Đông frost**,
glassmorphism surfaces, gold-glow CTAs, and cold-vapour accents. The design concept
named in the source is literally "Hyper-Realistic 3D Food Presentation".

## Products / surfaces represented
| Surface | Status |
| --- | --- |
| **Marketing landing page** (single-page, order-form conversion) | Fully specified → recreated in `ui_kits/landing/` |
| **Mascot "Sầu Cool Gen Z"** (app icon, hero banner, stickers, packaging) | Specified as a 3D Pixar-style render. **No artwork supplied** — not recreated. |
| App, dashboard, docs, decks | Do not exist in the source. Nothing invented. |

## Sources given
Attached local codebase folder: `sầu riêng/` (read-only mount, 3 markdown files — no
code, no images, no fonts, no logo):

1. `sầu riêng/Product Landing Page.md` — the landing page's section structure and
   all customer-facing Vietnamese copy (hero, story, pain points, USPs, product
   catalog, warranty, order form, FAQ).
2. `sầu riêng/gemini-code-1788854224541.md` — the design specification: colour table
   with hex codes, type scale table, section-by-section visual breakdown, motion and
   interaction notes (12-col grid, 1200px container, glassmorphism, `blur(12px)`
   overlay, hover 1.03, `transition: all 0.3s ease`).
3. `sầu riêng/gemini-code-1788854760773.md` — mascot design specification (colours,
   materials, pose, plus a Midjourney/Leonardo prompt for generating the render).

No Figma file, GitHub repository, slide deck, font binary or image asset was provided.
Every hex value, size, radius and duration in `tokens/` is copied verbatim from
source 2 (or source 3 where they overlap); nothing was rounded to a 4/8px grid.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Root entry — `@import` list only. Consumers link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `effects.css`, `motion.css`, `animations.css` |
| `components/core/` | Button, Badge, GlassCard, SectionHeading, Highlight, Icon |
| `components/forms/` | Input, OptionGroup, OrderForm |
| `components/feedback/` | Accordion, Modal |
| `components/marketing/` | ProductCard, ProcessStep, PainPointCard, USPItem, WarrantyNotice |
| `ui_kits/landing/` | Click-through landing page recreation (see its own README.md) |
| `guidelines/` | Foundation specimen cards (Colors / Type / Spacing / Brand) |
| `assets/` | **Empty — no logo or imagery exists in the source.** See "Logo" below. |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills wrapper so this folder works in Claude Code |

### Components
Button · Badge · GlassCard · SectionHeading · Highlight · Icon · Input · OptionGroup ·
OrderForm · Accordion · Modal · ProductCard · ProcessStep · PainPointCard · USPItem ·
WarrantyNotice

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage).
Every family here traces to a UI element named in the source docs — the source names no
Tabs, Toast, Avatar, Tooltip or Table, so none exist.

**Intentional additions**
- **Icon** — the source describes 3D-rendered icon artwork but ships no icon assets. `Icon` is a thin Lucide wrapper so glyphs are consistent and tintable. Flagged substitution.
- **Highlight** — the spec instructs "highlight keywords in `#F39C12`" but names no component; this makes that rule reusable.
- **SectionHeading** — the eyebrow/title/lead pattern repeats in all 8 sections.

---

## CONTENT FUNDAMENTALS

**Language is Vietnamese, always.** No English body copy. English appears only as
borrowed Gen Z / merchandising words inside Vietnamese sentences: *Gen Z, chill, trend,
audit, Best Seller, King of Durian, combo, Duo Gen Z, check-in, team*.

**Person: "tớ" → "bạn".** The brand speaks as the founder in first person singular
informal — *tớ* (not *chúng tôi*, not *shop* except in the CTA "SHOP GIAO NGAY"), and
addresses the reader as *bạn*. Family is present: *cha mẹ tớ*. Examples:
> "Tớ và cha mẹ tự tay chọn từng múi."
> "Bạn chỉ cần QUAY VIDEO KHI BÓC HÀNG, gửi ngay cho tớ."

**Register: loud, slangy, food-lustful.** Superlatives stacked without apology —
*ngon quên lối về*, *đỉnh khao khát*, *xịn xò*, *béo ngậy*, *chuẩn xịn*, *cực chill*,
*chiu chiu*, *bao tiện*, *sỉn cùng cha mẹ*. Onomatopoeia and invented emphasis are
in-brand; corporate hedging is not. Sentence-final particles do the warmth:
*nha*, *nhaa*, *luôn*, *nè*.

**Casing.**
- CTAs and modal titles: **ALL CAPS**, imperative, verb-first — "ĐẶT MUA LẠNH TẬN TAY", "BẤM GỬI ĐƠN — SHOP GIAO NGAY", "XÁC NHẬN ĐƠN HÀNG GIAO LẠNH TẬN TAY".
- Hero headline: ALL CAPS, with a dash-joined second clause.
- Section titles: sentence case, often a question or a quote in curly quotes — "Bạn có đang ngán ngẩm vì những pha "check-in" Sầu Riêng bất lực?"
- Product sub-names: ALL CAPS gold epithets — "NỮ HOÀNG DẺO SWEET", "KING OF DURIAN — BÉO ĐỈNH CAO".
- Inside body copy, 1–3 words go ALL CAPS for shouting: "LOẠI NGAY!", "BÉO NGẬY & CHIU CHIU".

**Punctuation.** Exclamation marks are the default terminal for any benefit claim.
Em-dash and en-dash used freely to bolt clauses together. Scare-quotes around slang
the founder is winking at: *"audit"*, *"sỉn"*, *"cứu rỗi"*, *"đẻ" ra*.

**Structure of a claim.** Always *bold noun phrase* + colon + the evidence.
> "❄️ **Cấp đông chuẩn đỉnh:** Tách múi tươi nóng từ vườn, ướp lạnh ngay lập tức."

**Product spec labels are fixed and reused verbatim:** Cơm sầu · Hương vị · Điểm cộng ·
Gu hợp nhất. Pack sizes are only ever *Túi 500g* and *Túi 1kg*, and the 1kg option
always carries a flag (*Khuyên dùng* for Thái, *Best Seller* for Musang King).

**FAQ voice:** answers open by knocking the fear down — "Không nha!", "Bên tớ đóng
thùng xốp giữ nhiệt + đá khô chuyên dụng."

**Emoji: yes — but only in authoring/source docs, not in the rendered UI.** The source
markdown is dense with 🥑❄️🔍🛍️⛰️🛡️📸🚀. In the shipped interface those roles are
carried by `Icon` (Lucide) instead, because emoji render inconsistently against the
dark glass and break the type scale. Keep emoji in briefs, spreadsheets and social
captions; keep them out of components. The one exception the source itself makes is
none — no emoji appears inside a button or field label.

**Numbers.** "100%" is used as a trust word (100% múi được audit, hoàn tiền 100%,
uy tín chuẩn 100%). No prices anywhere in the source — do not invent them.

---

## VISUAL FOUNDATIONS

**Ground.** Always dark. `#0E1A14` (Deep Forest) is the page ground; long sections use
the vertical gradient `#0E1A14 → #050B08` (`--bg-page-gradient`), and alternate
sections sit flat on `#050B08`. There is no light theme, and no third background
colour. Maximum two background values per page.

**Colour vibe.** Warm gold against cool deep green, with an ice-white third note.
Gold (`#F39C12`) means *flesh, flavour, buy now*. Green (`#27AE60`) means *orchard,
provenance, quality passed*. Frost (`#F0F8FF`) means *cold chain*. Grey (`#1C1C1C`)
is reserved for the customer's pain — it is the only desaturated surface and it is
meant to look worse than everything around it. `#E5534B` exists only as an error state
(added; the source names no error colour).

**Type.** Display/CTA in **Be Vietnam Pro** (Black 900 / Bold 700 / SemiBold 600);
body in **Plus Jakarta Sans** (Regular 400 / Medium 500). Hero 48/1.2 Black, section
36/1.3 Bold, card heading 22/1.4 SemiBold, body 16/1.6 Regular, CTA 18/1.0 Bold —
each with the mobile size from the spec table (32 / 26 / 18 / 14 / 16). Display type
carries `-0.02em` tracking; eyebrows and badges carry `+0.08em` and uppercase.
Keyword highlighting in gold `--durian-gold` is the only inline text accent.

**Spacing & layout.** 12-column grid, 1200px max container, 24px gutter, 16px mobile
padding. Sections breathe at 96px vertical (48px mobile). The 4px-based scale runs
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. The header is the only fixed element —
sticky, translucent `rgba(14,26,20,.78)` with a 14px backdrop blur and a white/10
bottom hairline. Nothing else pins.

**Backgrounds & imagery.** No photography or illustration was supplied. Where imagery
belongs, the system draws a **gold radial well** —
`radial-gradient(120% 100% at 50% 0%, rgba(243,156,18,.30), rgba(14,26,20,.9))` — and
states what should go there. When real photography arrives it should be *warm, glossy,
macro, high-key on the fruit against the dark ground*, with visible frost/vapour; the
spec's words are "hyper-detailed, highly appetising, octane render". No grain, no
duotone, no black-and-white. Full-bleed imagery is only for the hero canvas; every
other image is contained inside a card's image well with a **protection gradient**
(`--protection-gradient`: transparent → `#050B08`) under any overlaid text or badge.

**Transparency & blur.** Two uses, and only two. (1) *Glass surfaces*: `rgba(20,35,27,.65)`
+ `blur(14px)` + a 1px `rgba(255,255,255,.10)` hairline — every content block. (2)
*Overlay scrim*: black 62% + `blur(12px)` behind the modal. Never blur text, never
stack glass on glass (inner blocks use the solid `#16271E` raised surface instead).

**Cards.** Glass fill, 1px hairline, 24px radius, `0 18px 48px rgba(0,0,0,.45)` drop
shadow plus a `inset 0 1px 0 rgba(255,255,255,.10)` top-light. The hairline colour is
the semantic switch: white/10 neutral, `#27AE60` for solution/benefit content, gold 55%
for premium/combo. Coloured edges may add the matching outer glow. Pain cards break
every one of these rules on purpose: flat `#1C1C1C`, 6px radius, no shadow, no glow.

**Corner radii.** 6px pain cards → 10px inputs → 16px notices, FAQ rows and icon
tiles → 24px cards and the modal → 32px hero panel → pill (999px) for every button,
badge and selector. Buttons are *never* square-cornered.

**Shadow system.** Outer: `--shadow-card`, `--shadow-card-hover`, `--shadow-modal`.
Inner: `--shadow-inset-top` (the 1px white top-light that sells the glass) and
`--shadow-press` (`inset 0 3px 8px rgba(0,0,0,.45)`, applied while a button is held).
Glows are shadows too: `--glow-gold`, `--glow-gold-strong`, `--glow-green`,
`--glow-frost` — each a 1px coloured ring plus a wide coloured bloom.

**Animation.** Baseline is the spec's `all 0.3s ease` → `--dur-base` 300ms with
`cubic-bezier(.4,0,.2,1)`. Entrances rise 16px and fade with the softer
`cubic-bezier(.16,1,.3,1)`. There is one bounce curve available
(`--ease-bounce`) and it is not used by any component — reserve it for the mascot.
Loops: `sks-float` (7s, hero canvas), `sks-pulse` (2.4s gold glow, one CTA per page),
`sks-vapor` (cold-steam accents). Everything respects `prefers-reduced-motion`.

**Hover states.** Cards scale to **1.03** (the spec's number) and brighten their
hairline to white/18. Buttons lift `-2px` and swap to the strong glow — they do not
change hue. The green secondary button fills to `rgba(39,174,96,.12)` and brightens
its label 25%. Nav links and quiet text hover to gold. Nothing uses opacity fade as
its hover state.

**Press states.** `scale(.985)` + `translateY(1px)` + the inset press shadow — the
spec's "hiệu ứng lún 3D". No colour change on press; the geometry does the work.

**Focus.** Gold: 1px `#F39C12` border + a 3px `rgba(243,156,18,.18)` ring on inputs.

**Borders.** One weight for structure (1px white/10), 1.5px for interactive outlines
(secondary button, selected size pill) so selection reads at a glance.

**Selected state.** Gold tint fill `rgba(243,156,18,.16)` + 1.5px gold border + gold
glow + gold label. Only one selection pattern exists.

---

## ICONOGRAPHY

**The source ships no icons.** It describes bespoke *3D rendered* icons throughout —
a 3D durian tree, a frozen-vortex, a vacuum bag, a gold shield with an embossed durian
seed, 3D snowflakes — and uses emoji as placeholders in the markdown (🥑 ❄️ 🔍 🛍️ ⛰️
🛡️ 📸 🚀 🔪 🚚 🤬). There is no icon font, no SVG sprite, no PNG set, and no
Unicode-as-icon convention in the codebase, because there is no codebase.

**Substitution (flagged):** **Lucide** (`lucide-static@0.446.0`, 2px stroke, rounded
caps, 24px box) is loaded **from CDN** and wrapped by `components/core/Icon.jsx`,
which paints the SVG as a CSS mask so any brand colour tints it. Lucide was chosen for
its even 2px stroke and rounded terminals, which sit closest to the soft-cornered
Pixar-ish geometry the spec asks for. It is a stand-in, not the brand's icon language.

**House glyph mapping** (source emoji → Lucide name):
❄️ `snowflake` · 🔍 `search-check` · 🛍️ `shopping-bag` · ⛰️ `mountain` ·
🛡️ `shield-check` · ✅ `check` · 📸 `video` · 🚚 `truck` · 🔪 `hand` ·
🤬 `dices` (khui sầu như đánh bạc) · 🔥 `flame` · 🌳 `trees` · 🚀 `party-popper`.

**Rules.** Icons are always monochrome and always take a brand token as their colour
(frost for cold claims, green for provenance, gold for flavour/premium, and
`rgba(224,224,224,.55)` grey for pain points). 20–22px inline, 26–28px in tiles,
30–44px for hero/shield moments. Icons never sit alone as the only label on a control;
they pair with text. **No emoji in the rendered UI** (see CONTENT FUNDAMENTALS).

**When real artwork arrives:** drop the 3D renders into `assets/icons/` and change the
single `CDN` constant at the top of `Icon.jsx`. Nothing else references icon paths.

---

## Logo

**No logo or brand mark exists in the supplied sources, and none was created.**
Wherever a mark belongs, render the name in type: **SẦU KHÁNH SƠN** in Be Vietnam Pro
Black, gold on Deep Forest, with **CẤP ĐÔNG · GEN Z** beneath in green at 0.22em
tracking. `components/../ui_kits/landing/screen-chrome.jsx` exports `Wordmark` for this,
and `guidelines/logo-absence.card.html` documents it. `assets/` is intentionally empty.

## Known substitutions — please replace
1. **Fonts** — no binaries supplied. Be Vietnam Pro + Plus Jakarta Sans are pulled from
   Google Fonts via `@import` in `tokens/fonts.css`. (The spec offered Lexend or Be
   Vietnam Pro, and Inter or Plus Jakarta Sans; Be Vietnam Pro was chosen for Vietnamese
   diacritic coverage, Plus Jakarta Sans over Inter for warmth.) Swap in licensed
   `@font-face` + local files when available.
2. **Icons** — Lucide from CDN, per ICONOGRAPHY above.
3. **Imagery, 3D renders, mascot** — absent. Every image slot renders an explicit note
   rather than invented art.
4. **Prices, phone number, social handles** — absent from the source; not invented.
