# Anpdf website

Official website repository for Annotate PDF. The home page presents the product through four concise sections and interactive document examples.

- Website: https://annotatepdf.org/
- Post-install welcome guide: https://annotatepdf.org/welcome/
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

`welcome/index.html` explains how to pin Annotate PDF and open a local PDF. It uses self-hosted Montserrat, the approved extension icon, and the product palette. The browser illustrations are instructional graphics, not interactive controls. See [implementation and brand notes](docs/WELCOME.md).

## Privacy policy

`privacy/index.html` describes the current extension’s local PDF processing, recovery storage, browser permissions, website hosting and support contact in four sections. See [policy maintenance notes](docs/PRIVACY.md).
