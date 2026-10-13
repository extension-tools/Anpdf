# Privacy policy

Approved on October 13, 2026. Public route: https://annotatepdf.org/privacy/.

## Scope and content

The English policy describes Annotate PDF version 0.1.0 and the website in four sections:

1. Local PDF processing and recovery storage.
2. Browser access and permissions.
3. No tracking, GitHub Pages hosting and voluntary support email.
4. User choices, policy changes and contact.

The owner confirmed `bestusers2015@gmail.com` as the contact and approved browser verification and publication. The reference policy belongs to another extension; its analytics and website-access permissions do not apply here.

## Implementation evidence

Checked against the extension source and built manifest:

- No additional required/optional extension permissions or host permissions; no content scripts. Incognito is not allowed.
- `tabs` and `activeTab` permissions are not requested. The extension uses tab APIs to open/focus its own editor and opens the fixed welcome URL after installation. Avoid claiming that no tab APIs are used.
- PDF bytes, filename, annotations, unfinished edits, editor position and preferences can persist in local IndexedDB recovery storage. Opening another PDF successfully replaces the saved document; preferences can remain.
- Export uses a local Blob download; printing uses a local document, with a local PDF tab as a fallback. No `downloads` permission is requested.
- No usage analytics, domain collection, automatic diagnostics or document uploads were found in the current functionality.
- The website has no analytics scripts. GitHub Pages logs visitor IP addresses for security; the policy discloses this separately from extension processing.
- Support email is voluntary. The extension does not automatically attach documents or browsing data.

Do not promise an always-available in-product “Delete draft” button: current deletion UI is limited to recovery failure handling. The policy describes browser storage tools and exported-file deletion instead.

## Presentation and verification

Static HTML and CSS, with no scripts or new dependencies. Reuses the extension icon and self-hosted Montserrat assets from the welcome page. Product background `#F1F4F8`, text `#292A2E`, accent `#B84230`. Main text 16px; table 15px. Semantic sections, table headers and visible keyboard focus.

Isolated Playwright Chromium verification passed at 3440×1440, 1440×900, 1366×768, 1024×768, 768×1024, 390×844 and 320×740 (DPR 1), plus 768×1024 (DPR 2). Checked four sections, six capability rows, contact link, fonts/icon, no overflow or clipped elements, no script/external request on load, no page/resource errors and keyboard navigation. Both GitHub documentation links returned HTTP 200. Desktop, narrow mobile and retina table screenshots were visually reviewed.

Local page load measurements: approximately 27–52ms; no observed long tasks. These are local browser measurements, not production network guarantees. Existing welcome and home page source files are unchanged.

## Maintenance

Review this policy whenever permissions, storage, network behavior, analytics, support processing or hosting change. Keep the public update date accurate. It describes the verified current implementation; it does not assert jurisdiction-specific compliance certification.

Sources: [Chrome tabs permissions](https://developer.chrome.com/docs/extensions/reference/api/tabs#permissions), [GitHub Pages data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection), [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## Contact appearance

The owner requested unaccented contact text. The email inherits the paragraph color and has no underline, including on hover. Its mailto action and visible keyboard focus are preserved; other links retain their original styling.
