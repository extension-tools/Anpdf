# Anpdf website

Official website repository for Anpdf. The home page contains only `Hi world!`.

- Website: https://annotatepdf.org/
- Post-install welcome guide: https://annotatepdf.org/welcome/
- Privacy policy: https://annotatepdf.org/privacy/
- Hosting: GitHub Pages, published from the root of `main`.
- Static files are served directly; `.nojekyll` disables Jekyll processing.
- No build step or external dependencies are required.

## Publishing

Edit the site files, commit the changes, and push to `main`. GitHub Pages deploys the updated site automatically.

The browser extension source is maintained separately. Local access notes and credentials are not part of this repository.

## Welcome guide

`welcome/index.html` explains how to pin Annotate PDF and open a local PDF. It uses self-hosted Montserrat, the approved extension icon, and the product palette. The browser illustrations are instructional graphics, not interactive controls. See [implementation and brand notes](docs/WELCOME.md).

## Privacy policy

`privacy/index.html` describes the current extension’s local PDF processing, recovery storage, browser permissions, website hosting and support contact in four sections. See [policy maintenance notes](docs/PRIVACY.md).
