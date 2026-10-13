# Homepage

The root page introduces Annotate PDF through four sections: the finished result, annotation examples, the Open/Annotate/Download flow, and local processing benefits.

## Implementation

- `index.html`, `home.css`, and `home.js`; no build step or runtime dependencies.
- Original/Annotated comparison, three keyboard-accessible annotation tabs, and three workflow previews use prepared HTML/CSS artwork. Accessible figure descriptions identify these as examples, not a functioning online editor.
- Montserrat 400/500/600, existing product icon, coral `#B84230`, text `#292A2E`, light product surfaces. Text is at least 18 CSS px, including mobile controls and document text.
- All user-facing text is English, including the installation dialog. Fonts are self-hosted; font license: `welcome/assets/OFL-Montserrat.txt`.
- No trackers, accounts, uploaded documents, third-party scripts, or automatic animations. Reduced motion is respected. Without JavaScript, the prepared examples remain visible and inactive preview selectors are hidden.

## Installation buttons

The owner requested ordinary installation buttons with no availability status on the page. Until a Chrome Web Store URL is provided, both buttons open the same dialog:

> The extension is under review
> We’ll add the store link once it’s published

The buttons use native `commandfor` / `command="show-modal"` so the message remains available without JavaScript in browsers supporting Invoker Commands (Chrome 135+, below the extension’s minimum Chrome 151). The dialog closes with its **Got it** button, Escape or a backdrop click and returns focus to the invoking control. JavaScript prevents the default command before its enhanced handler runs, avoiding duplicate activation or a dialog opening during a future store navigation. Set `storeURL` in `home.js` to the verified store address after publication. Never substitute a guessed listing URL.

## Search content

The initial page has 12 case-insensitive occurrences of the exact phrase in agreed content fields: six in page text, four in title/description/Open Graph metadata, two in accessible figure descriptions. Switching both examples to their original states reduces the count to 10. Script strings, technical duplicate copies and comments do not count. No hidden keyword paragraphs or headings are used; descriptions describe their associated examples.

Welcome and privacy routes remain independent and unchanged. Only the root homepage is replaced.

## Verification — 13 October 2026

Isolated Chrome 151 checks passed at 320, 390, 768, 1024 and 1440 CSS px: readable text, no horizontal overflow, tab/step/comparison interactions, keyboard/touch, reduced motion and dialog focus restoration. Installation was regression-tested with JavaScript disabled, the script request blocked and normal execution: the previous version failed and the native-command fix passed. Mobile heading spacing and date-arrow positioning were corrected and checked again at 320/1440 px. No existing welcome/privacy assets or routes were changed.

The root page does not persist settings. Replacing the previous placeholder has no stored-state migration. These checks do not constitute an extension release.

## Visual refinement — 13 October 2026

At the owner’s request, visible “Example PDF · Demo” labels and arrows within the document illustrations were removed. The sample is now “Document review” / `document-review.pdf`. Visible headings, paragraphs, notes and benefits omit terminal periods; internal sentence separators remain. Accessible descriptions reflect the illustrations.

Point uses a rectangle anchored directly to the date, with 10 px vertical and 12 px horizontal offsets instead of fixed page coordinates. CSS/JS cache versions are now 2.

The old frame failed the vertical-symmetry regression (7 px above and 19.5 px below at 1440 px); the updated frame passed at 320, 768 and 1440 px. Focused checks confirmed tab visibility, dialog copy, 18 px minimum type, no horizontal overflow, and 12 initial / 10 original-state keyword occurrences. Desktop/mobile screenshots and the final diff were reviewed. Local load samples were 38–53 ms; sampled Point click-to-next-frame latency was 21–33 ms, and approximate JS heap was 2.81 MB. These are local measurements, not production performance guarantees or whole-browser memory figures. The static homepage has no persisted settings to migrate.
