# Anpdf website

Official website repository for Annotate PDF. The home page presents the product through four concise sections and interactive document examples.

- Website: https://annotatepdf.org/
- Post-install welcome guide: https://annotatepdf.org/welcome/
- Japanese welcome guide: https://annotatepdf.org/welcome/ja/
- French welcome guide: https://annotatepdf.org/welcome/fr/
- Privacy policy: https://annotatepdf.org/privacy/
- Hosting: GitHub Pages, published from the root of `main`.
- Static files are served directly; `.nojekyll` disables Jekyll processing.
- No build step or external dependencies are required.

## Publishing

Edit the site files, commit the changes, and push to `main`. GitHub Pages deploys the updated site automatically.

The browser extension source is maintained separately. Local access notes and credentials are not part of this repository.

## Homepage

`index.html`, `home.css`, and `home.js` provide the root landing page. Installation buttons currently open the owner-requested moderation dialog; configure the verified store URL in `home.js` after publication. See [homepage notes](docs/HOMEPAGE.md).

## Welcome guide

The English (`welcome/index.html`), French (`welcome/fr/index.html`) and Japanese (`welcome/ja/index.html`) guides explain how to pin Annotate PDF and open a local PDF. They share the approved gentle arrows, an 8px gap around highlighted targets, self-hosted fonts, the extension icon and product palette. The browser illustrations are instructional graphics, not interactive controls. Arrow layout is verified across 16 viewport/DPR configurations per language; see [implementation and verification notes](docs/WELCOME.md).

## Privacy policy

`privacy/index.html` describes the current extension’s local PDF processing, recovery storage, browser permissions, website hosting and support contact in four sections. See [policy maintenance notes](docs/PRIVACY.md).
