# Welcome guide

Public route: https://annotatepdf.org/welcome/ (`/welcome` redirects to `/welcome/`). The home page keeps its original `Hi world!` message.

## Purpose

Help a newly installed Annotate PDF user pin the extension, open the editor, and choose a local PDF. English copy and two responsive browser illustrations. Controls inside the illustrations are not interactive; each illustration has an accessible description. The page itself cannot pin or launch an extension.

## Implementation

- Static HTML and CSS; no JavaScript, build dependency, analytics, external font service or extension messaging.
- Montserrat 400/500/600, copied from the approved product assets. Fonts use `font-display: swap` and are hosted locally.
- The extension icon is an unchanged copy of the approved 128 px document-with-marker PNG.
- Product tokens: workspace `#F1F4F8`, panel `#FAFBFC`, white `#FFFFFF`, primary text `#292A2E`, secondary text `#6B6E76`, coral `#B84230`, selected background `#ECEBF0`. Radius: 8/16 px. The browser menu uses browser-style sans serif text.
- Source brand authority: the extension project's `design/tokens.css`, `DESIGN.md` and `src/assets/icons/README.md`.
- Lucide line-icon subset; font and icon licenses are included in `welcome/assets/`.
- Mobile layouts down to 320 px; CSS entrance animation respects `prefers-reduced-motion`. The guide is marked `noindex,follow` because it is post-install onboarding.

## Extension integration

The extension opens this public URL only for `chrome.runtime.onInstalled` with reason `install`. Updates do not open the page. This hook is maintained in the separate local extension source, not in this website repository; no extra permissions or stored state are required.

## Verification (13 October 2026)

Playwright / Chrome for Testing 151 in isolated profiles: widths 1440, 1024, 390 and 320; all assets loaded, fonts and product colors matched, icon bytes matched, no horizontal overflow or page errors, and reduced motion disabled animation. A real unpacked extension install/replacement test passed, preserving saved language and tool preferences across a test-only version update. No published extension version was available for a store-upgrade test.

Three cold localhost measurements: DOMContentLoaded 26.0-27.2 ms, load 28.0-43.3 ms, no observed long tasks. Approximate JS heap 1.31 MB. These are local samples, not total browser memory or production-network guarantees.

Publishing remains `git push origin main`; GitHub Pages serves the root with `.nojekyll`.

## Local copy revision — 13 October 2026

The owner approved revised wording after the spec-to-patch review: **Welcome to Annotate PDF**, **Get ready to annotate your first PDF.**, and **You’re ready to make your first annotation.** Step 1 opens the Extensions menu, step 2 pins Annotate PDF, and step 3 opens the editor and selects a document with Open PDF. The two illustrations, brand assets and product palette are unchanged.

The page-only Playwright check passed at 1440/1024/390/320 px; desktop and mobile screenshots were reviewed. The updated heading assertion failed before the correction and passed afterward. This revision was initially prepared locally; the owner subsequently authorized its publication on 13 October 2026.

## Browser puzzle correction — 13 October 2026

All three puzzle icons now use a hand-authored outline matching the owner's Chrome reference: top/right protrusions, a left socket, flat bottom and rounded 2-unit stroke. The glyph is neutral #292A2E; the teaching ring and badge remain coral. This is a browser illustration asset, not a replacement for the extension icon or the product's Lucide set.

The stroke regression failed before the fix and passed afterward. Isolated Playwright checks passed at 1440/1024/390/320 px; desktop and mobile silhouettes were visually reviewed. This correction was initially prepared locally; the owner subsequently authorized its publication on 13 October 2026.

## Publication authorization — 13 October 2026

The owner explicitly authorized GitHub access and publication for Anpdf-site, including the revised text and puzzle icons. The local-only restriction in the extension project remains applicable to the extension; its source is not published by this website workflow.

## Compact first viewport — 13 October 2026

Approved layout: only **Welcome to Annotate PDF** and **Follow these three steps to get started.** in the header, followed immediately by numbered instructions 1–2 and the first illustration. Before the second illustration there is only instruction 3. Removed the large header icon, eyebrow, section labels and both section headings; retained the two illustrations, brand palette, font, extension icons and closing line. Section accessible names remain present.

The desktop layout uses a 24 px top inset, 24 px header gap, 20 px instruction-to-image gaps and a 20 px section gap. Mobile spacing preserves legibility. In isolated Chrome, the first illustration ends at y=634.2 and the second begins at y=703.8: 64.2 px of the second illustration are visible at 1366×768 and 196.2 px at 1440×900. The viewport checks failed on the previous layout and pass on this revision. Also checked 1024×900, 390×844 and 320×740 for clipping, loaded assets, neutral puzzle glyphs, coral highlights and reduced motion. Desktop/mobile screenshots were visually reviewed.

Three cold localhost samples: DOMContentLoaded 24.5–27.0 ms, load 25.7–43.1 ms, no observed long tasks, approximate JS heap 1.31 MB. These measurements do not represent production network or total browser memory. Publication of this layout was authorized by the owner.
