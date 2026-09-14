# AI Mr Ferdy — Final Cleanup Audit

Domain target: https://aimrferdy.com

## Main cleanup performed

- Fixed `astro.config.mjs` to use `https://aimrferdy.com` as the single deployment URL.
- Fixed `public/robots.txt` sitemap URL.
- Removed the obfuscated `eval()`/XOR/base64 redirect block from `src/pages/news-generator.astro`.
- Removed stale `aimrdennis.com`, `aimrferdy.net`, `example.com`, `AI PRINT`, and legacy Blogger asset references from the project.
- Fixed invalid `https://http://...` URL in the news generator.
- Fixed incorrect canonical URLs on Pricing and Return Policy pages.
- Made Blog schema use absolute image URLs, publication/update dates, and Person author data.
- Expanded content collection schemas for Blog and Product frontmatter fields already present in the content.
- Removed the dynamic `/tools/[category]/` route that conflicted with the explicit `/tools/web/` route.
- Updated `/tools/` to combine Markdown/content tools and `.astro` tools into one listing.
- Fixed `/tools/web/` ItemList URLs to use the `.com` domain.
- Fixed the missing `src/lib/utils` dependency in `TOC.astro` by using a local slugify function.
- Removed dead category links and several placeholder `#` links.
- Cleaned Product branding from `AI PRINT` to `AI Mr Ferdy`.
- Removed inaccurate physical-shipping schema from the digital Product JSON-LD.
- Replaced legacy AMP logo/favicon assets with local AI Mr Ferdy assets.
- Fixed the `</hp>` HTML typo in the footer.
- Kept the existing visual design and content structure as much as possible.

## Verification note

Static source checks were completed after the cleanup. A full `npm install` / `astro build` could not be completed in the available environment because package installation timed out, so this archive should still be run through `npm install` and `npm run build` locally or in CI before production deployment.
