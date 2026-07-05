# tangent suite site

The website for the [tangent](https://github.com/tangent-to) scientific-computing
suite, built with Astro Starlight and deployed to **suite.tangent.to**.

- Landing splash plus one API-reference page per package (opt, proba, lina, ode, ds, mc, sem).
- Theme in `src/styles/tangent.css` (warm cream/sand neutrals, one teal accent, Lora + Inter).
- Each package page links its flagship example to run live at note.tangent.to.

```bash
npm install
npm run dev      # local preview
npm run build    # static output in dist/
```

Deploy is automatic on push to `main` via GitHub Pages (`.github/workflows/deploy.yml`).
The custom domain is set by `public/CNAME`; point a DNS CNAME record for `suite`
at `tangent-to.github.io`.

Image placeholders (dashed boxes labelled "screenshot" / logo) mark where real
assets go. Replace `src/assets/logo.svg` with the final logo.
