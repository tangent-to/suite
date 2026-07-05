import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Served at suite.tangent.to (custom domain via public/CNAME), so no base path.
export default defineConfig({
  site: 'https://suite.tangent.to',
  integrations: [
    starlight({
      title: 'tangent',
      description:
        'Scientific computing for JavaScript. Numerics, statistics and modeling that run in the browser, validated against scipy, numpy and lavaan.',
      // Theme-aware logo: logo-light shows on the light (cream) theme,
      // logo-dark on the dark theme.
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
            { label: 'proba · probability', slug: 'proba' },
            { label: 'lina · linear algebra', slug: 'lina' },
            { label: 'ode · differential equations', slug: 'ode' },
          ],
        },
        {
          label: 'Applications',
          items: [
            { label: 'ds · data science', slug: 'ds' },
            { label: 'mc · Bayesian inference', slug: 'mc' },
            { label: 'sem · structural equation modeling', slug: 'sem' },
          ],
        },
      ],
      components: {
        // Use Starlight defaults; theming is done entirely through tangent.css.
      },
      pagination: false,
      lastUpdated: false,
    }),
  ],
});
