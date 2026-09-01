import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The API reference under src/content/docs/api/<pkg> is generated from each
// package's JSDoc by scripts/gen-api.mjs (run via `npm run gen:api`) and
// committed to this repo. The site build just consumes the committed markdown,
// so deploying the site does not need the package repos checked out. The
// .github/workflows/update-api.yml workflow regenerates and commits it.
export default defineConfig({
  site: 'https://suite.tangent.to',
  integrations: [
    starlight({
      title: 'tangent',
      description:
        'Scientific computing for JavaScript. Numerics, statistics and modeling that run in the browser, validated against scipy, numpy and lavaan.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        alt: 'tangent',
      },
      customCss: ['./src/styles/tangent.css'],
      social: {
        github: 'https://github.com/tangent-to',
      },
      sidebar: (() => {
        // One collapsible entry per package: its overview, then its generated
        // API reference. Keeps the package name from appearing twice.
        const meta = {
          opt: 'optimization',
          proba: 'probability',
          lina: 'linear algebra',
          grad: 'automatic differentiation',
          ode: 'differential equations',
          ds: 'data science',
          mc: 'Bayesian inference',
          sem: 'structural equation modeling',
        };
        const group = (slug) => ({
          label: `${slug} · ${meta[slug]}`,
          collapsed: true,
          items: [
            { label: 'Overview', slug },
            { label: 'API reference', autogenerate: { directory: `api/${slug}` }, collapsed: true },
          ],
        });
        return [
          { label: 'Foundations', items: ['opt', 'proba', 'lina', 'grad', 'ode'].map(group) },
          { label: 'Applications', items: ['ds', 'mc', 'sem'].map(group) },
        ];
      })(),
      pagination: false,
      lastUpdated: false,
    }),
  ],
});
