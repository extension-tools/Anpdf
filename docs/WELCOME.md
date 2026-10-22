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

## Readability and arrow removal — 13 October 2026

Both decorative teaching arrows were removed; the numbered steps, coral rings and pin caption remain. Open PDF in the editor illustration is now 16 px. Important menu labels, the pin caption, editor description and footer use at least 14 px, including mobile. Browser tab/address text retains its secondary browser-like sizing. The menu description wraps naturally without a forced line break. The pin caption is centered below the menu; mobile illustration height reserves space for the larger text. Desktop illustration heights remain unchanged.

Focused isolated Chrome checks passed on 13 viewport/density combinations from 320 to 3440 px, including 768/1440 px at DPR 2. Assertions cover label sizes, absence of teaching arrows, menu/caption separation, containment, assets, fonts, colors and reduced motion. The pre-fix arrow regression failed as expected. Desktop 1366×768 still shows the entire first illustration and 64.2 px of the second; 1440×900 shows 196.2 px of the second. Screenshots were visually reviewed for legibility. Three cold local samples: DOMContentLoaded 28.3–33.4 ms; load 31.1–35.8 ms; no long tasks observed; approximate JS heap 1.31 MB. These are local samples, not production-network or total-browser-memory guarantees.

## Closing rows removed — 13 October 2026

At the owner's request, removed only the closing sentence “You’re ready to make your first annotation.” and the entire footer row “Annotate PDF · Your PDFs stay on your device.” The welcome page now ends after the second illustration. All remaining markup and CSS are unchanged. An isolated browser comparison at 1440×900, 1366×768, 768×1024 and 320×740 confirmed identical text and bounding boxes for the header, instructions and both illustrations, with no horizontal overflow or page/request errors.

## OS-neutral browser illustrations — 13 October 2026

At the owner's request, both illustrations now have an empty solid top strip instead of window dots, a named tab, its close icon and the new-tab plus. The strips retain their original 44 px height and color. Removed only the displayed annotatepdf.org/welcome text from both address fields; shapes and remaining browser icons are unchanged. CSS and all other page markup remain unchanged. A before/after isolated Chrome comparison at 3440, 1440, 1366, 768 and 320 px, plus 768 px at DPR 2, confirmed identical geometry for every retained element and no horizontal overflow or page/request errors.

## Address icon removed — 13 October 2026

Removed only the filter/site-controls SVG from both address fields at the owner's request. All other HTML, CSS and assets remain unchanged. Before/after isolated Chrome checks at 3440, 1440, 1366, 768 and 320 px, plus 768 px at DPR 2, confirmed identical geometry for all retained elements. Both empty address fields preserve their dimensions; no overflow or page/request errors.

## Bottom page spacing — October 13, 2026

The owner requested a small background strip below the second illustration. Main bottom padding is now 32px (previously 0) on desktop and at the mobile breakpoint. The workspace background remains `#F1F4F8`. The instruction-to-illustration gap is 20px, so the final outer space is one spacing step larger. No content, illustration dimensions, horizontal spacing or preceding vertical positions changed.

Focused isolated Playwright regression check failed before the fix (0 instead of 32px) and passed after it at widths 3440, 1440, 1366, 768, 720, 390 and 320px. Measured CSS border boxes confirm the same illustration geometry before and after, unchanged top spacing, main height increased by exactly 32px, and no horizontal overflow. Bottom-of-page desktop and mobile screenshots were visually checked.

### Bottom spacing adjustment

At the owner's request, increased the bottom padding from 32px to 42px (+31.25%) on all widths. Only the final background strip changes; illustration geometry and preceding spacing remain unchanged.


## French welcome guide — 22 October 2026

The owner requested and approved a separate French page at `/welcome/fr/`. `welcome/fr/index.html` translates the instructions, browser illustration captions, metadata and accessible descriptions. The name Annotate PDF matches the extension’s French locale fallback; “Ouvrir un PDF”, “Glissez un PDF ici”, and “Surlignez et annotez votre PDF.” match its French interface.

The French page reuses the existing self-hosted icon, fonts and base CSS. Its separate `fr.css` adds larger 20px instructions (18px on mobile), the current secondary-text token #5E6169, and three coral #B84230 curved SVG arrows. Each arrow is positioned relative to its numbered badge; the tip stops 6px before the circle and aligns with its vertical centre. The pin row reserves a clear area for the curve above its label. The arrows are decorative and hidden from assistive technology. No page JavaScript or new dependencies are added.

English `/welcome/`, the Russian Tilda page and extension installation routing are unchanged. The French route is published independently; selecting it automatically after extension installation would be a separate integration change.

### Focused local verification

Isolated Playwright / Chrome for Testing 151 on the owner’s laptop, 22 October 2026: 1366×768, 1920×1080, 2560×1080, 3440×1440, 768×1024 at DPR 2, 390×844 and 320×740. All seven cases passed: French language, loaded fonts and images, no horizontal overflow, no page/request errors, three contained curves, endpoints aligned to badge centres with a 6px gap, no curve intersection with illustration labels, and at least 49px between menu and pin caption. Desktop and mobile screenshots reviewed. Existing English HTML/CSS/assets are byte-for-byte unchanged.

Seven fresh local contexts: loadEventEnd 27.8–84.1ms; no observed Long Tasks; sampled JS heap 1.86–1.90MB including verification instrumentation. Static page, zero page scripts. These short localhost measurements do not establish production network latency or total browser memory.

Evidence in the extension workspace: `exports/welcome-fr-check/results.json`, `fr-1366.png`, `fr-320.png`, and the retained verification script.

## Japanese welcome guide — 22 October 2026

Published separately at `/welcome/ja/` on the owner's request. Translates instructions, illustration labels, metadata and accessible descriptions. The extension name `PDF 書き込み` matches `src/_locales/ja/messages.json`; the editor retains its Annotate PDF brand. Editor labels match the Japanese UI catalog: `PDFを開く`, `ここにPDFをドラッグ＆ドロップ`, and `PDFにハイライトや注釈を追加。`.

The page uses existing self-hosted base CSS, fonts and icon, plus scoped `ja.css`. It preserves the French guide's coral arrows anchored to numbered badges. Native Japanese sans-serif fallbacks, a mobile title break and a bounded drop zone accommodate Japanese text without new font downloads or JavaScript. English, French, Russian pages and extension install routing are unchanged.

Focused verification: isolated local Chrome for Testing at 1366×768, 1920×1080, 2560×1080, 3440×1440, 768×1024 DPR 2, 390×844 and 320×740. All seven passed: `lang=ja`, loaded fonts/images, no horizontal overflow or page/request errors, three arrows within illustrations, tips aligned with badge centres and separated by 6px, no label collisions, menu/caption gap ≥33px. Desktop and 320px screenshots visually reviewed. No changes to existing language files.

Seven fresh local contexts: loadEventEnd 26.3–92.1ms; no observed long tasks; sampled JS heap 1.86–1.90MB including verification instrumentation. Static page with zero scripts. Local samples do not establish production latency or total browser memory. Evidence: `Anpdf/exports/welcome-ja-check/` (results, screenshots, retained runner).

## French name and compact localized extension rows — 22 October 2026

Corrected the French extension name to `Écrire sur un PDF — Annotate PDF` from the current approved `src/_locales/fr/messages.json`, in the heading, instructions, browser extension row, metadata and accessible descriptions. This supersedes the earlier French fallback-name assumption. The illustrated editor retains its own Annotate PDF brand. Japanese `PDF 書き込み` already matches its manifest and remains unchanged.

Both localized extension rows now use a 62px minimum with natural height and 12px vertical padding, instead of a fixed 112px. French needs 64px for its two-line full name; Japanese stays at 62px. Added space below the menu description keeps the arrow above the compact row. Reduced illustration height by 36px; all three arrows retain their 6px tip gap. The French title separates the introduction and product name to avoid an orphaned PDF line. Changes are restricted to French HTML/CSS and Japanese CSS; English HTML/CSS/assets are untouched. No scripts, requests or runtime work added.

Regression checks failed before the fix (112px rows in both locales and incorrect French name), then passed in isolated local Chrome at 1366, 1920, 3440, 768, 390 and 320px for both locales. All 12 cases: exact approved name in heading and menu, compact row, no overflow/errors, loaded images, arrows contained and aligned, no intersections with text glyph rectangles, and menu/caption gap ≥31px. Desktop/mobile screenshots visually reviewed. Evidence and retained runner: `Anpdf/exports/welcome-compact/`.

## French arrow clearance — 22 October 2026

Owner-approved correction: keep each curved arrow visibly separated from the large target ring by 8 CSS px, pointing toward its upper-left quadrant and away from the numbered badge. Preserve the existing curves, strokes, colours, target rings, badges, copy and layout. Only `/welcome/fr/` changes.

The three decorative SVGs are now direct children of their target containers instead of their numbered badges. Scoped CSS places each tip at 45 degrees from the target centre, including the target radius, 3px outline offset, 2px outline, 8px gap and half the rendered arrow stroke. Mobile SVG scaling retains the same visible clearance. This supersedes the earlier badge-centred 6px measurements: those measured the wrong circle and did not protect the large outline.

Focused regression `tests/welcome-arrow-spacing.mjs` failed before the fix at 1440 and 390px: minimum arrow-to-outer-ring distance, including stroke, was −5.58 to −4.85px (inside the ring). It passes afterward at 1440, 721, 720, 390 and 320px: all 15 arrow clearances are 7.998–8.000px; badge clearance is at least 19.69px. The check samples both shaft and arrowhead in rendered screen coordinates, includes stroke thickness, checks text glyph rectangles, containment, loaded images and horizontal overflow. No errors or collisions. Desktop and 320px screenshots visually reviewed. Compared before/after at 1440 and 390px: all figure, menu, caption, target and badge rectangles and body text are identical.

Static HTML/CSS: zero page scripts, no new assets or dependencies. Five fresh isolated Chrome contexts on the owner's laptop recorded localhost loadEventEnd 17.2–235.4ms, no observed long tasks and sampled JS heap 1.54–2.15MB including test instrumentation. These are short local observations, not production-network or sustained-memory guarantees. No extension code, storage, settings or installation flow changes; no extension build or upgrade test is applicable.

Run with Playwright installed, or set `PLAYWRIGHT_MODULE` to its absolute `index.mjs` path:

```sh
node tests/welcome-arrow-spacing.mjs
```

The runner serves this checkout locally, uses isolated headless Chrome contexts, and writes screenshots/results to `/tmp/anpdf-arrow-check` (override `OUTPUT_DIR`). `BASE_URL` selects an already deployed site; `WIDTHS` selects affected widths. Local before/after evidence is retained in the extension workspace at `exports/welcome-arrow-spacing/`.

## Approved gentle arrows (option 2) — 22 October 2026

The owner selected option 2 from three screenshots rendered on the French page and explicitly authorized replacement of all three arrows and publication. Each SVG now contains the exact filled contour generated by the extension's `curvedArrow` / `curveControl` functions for endpoints `[8,12]` → `[196,48]`, bend `-0.07`, width `4`, viewBox `0 0 200 64`. The filled triangular head follows the curve tangent. This supersedes the previous open arrowhead and cubic curve; no runtime geometry code or JavaScript is shipped on the site.

Target-relative positioning and 8px clearance are retained. Because the filled contour ends exactly at the tip, the old half-stroke correction and stroke CSS are removed. Mobile scales the same contour to 150×48 while retaining the target-relative gap. Copy, rings, badges, layout and other language routes are unchanged.

Updated focused regression failed before replacement (old open paths) and passed afterward at 1440, 721, 720, 390 and 320px. All three polygon point lists exactly match the selected preview's generated contour. Measured clearance is 7.996–7.997px at every width (subpixel layout tolerance), with no text collisions, clipping, overflow or page/request errors. Desktop and 320px screenshots visually reviewed. Before/after 1440px body text and all non-arrow rectangles are identical.

Five fresh isolated local Chrome contexts: loadEventEnd 8.9–99.8ms, no observed long tasks, sampled JS heap 1.49–1.76MB including verification instrumentation. The baseline recorded one 51ms long task; these short samples do not establish a performance improvement or production-network guarantees. Static page remains script-free, with no new assets or dependencies. Evidence and chosen preview are retained in the extension workspace at `exports/welcome-arrow-options/` (`before/`, `after/`, `2-gentle.png`, `options.json`).
