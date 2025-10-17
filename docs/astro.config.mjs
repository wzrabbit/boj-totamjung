// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '토탐정',
      locales: {
        root: {
          label: '한국어',
          lang: 'ko',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/wzrabbit/boj-totamjung',
        },
      ],
      sidebar: [
        {
          label: '다운로드',
          items: [{ label: '다운로드', slug: 'downloads' }],
        },
        {
          label: '퀵 스타트',
          items: [{ label: '퀵 스타트', slug: 'quick-start' }],
        },
      ],
      customCss: ['./src/fonts/font-face.css', './src/styles/custom.css'],
    }),
  ],
});
