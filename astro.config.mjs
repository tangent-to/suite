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
      sidebar: [
        {
          label: 'Foundations',
          items: [
            { label: 'opt · optimization', slug: 'opt' },
            { label: 'opt · API reference', autogenerate: { directory: 'api/opt' }, collapsed: true },
            { label: 'proba · probability', slug: 'proba' },
            { label: 'proba · API reference', autogenerate: { directory: 'api/proba' }, collapsed: true },
            { label: 'lina · linear algebra', slug: 'lina' },
            { label: 'lina · API reference', autogenerate: { directory: 'api/lina' }, collapsed: true },
            { label: 'ode · differential equations', slug: 'ode' },
            { label: 'ode · API reference', autogenerate: { directory: 'api/ode' }, collapsed: true },
          ],
        },
        {
          label: 'Applications',
          items: [
            { label: 'ds · data science', slug: 'ds' },
            { label: 'ds · API reference', autogenerate: { directory: 'api/ds' }, collapsed: true },
            { label: 'mc · Bayesian inference', slug: 'mc' },
            { label: 'mc · API reference', autogenerate: { directory: 'api/mc' }, collapsed: true },
            { label: 'sem · structural equation modeling', slug: 'sem' },
            { label: 'sem · API reference', autogenerate: { directory: 'api/sem' }, collapsed: true },
          ],
        },
      ],
      pagination: false,
      lastUpdated: false,
    }),
  ],
});
