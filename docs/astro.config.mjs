// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '토탐정',
      description:
        '토탐정은 백준에서 사용할 수 있는 확장 프로그램입니다. 알고리즘 분류와 랜덤 디펜스 관련 기능들을 주로 제공하고, 그 외에 여러 유용한 기능들도 제공합니다.',
      editLink: {
        baseUrl: 'https://github.com/wzrabbit/boj-totamjung/edit/main/',
      },
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
        {
          label: '기능',
          items: [
            { label: '알고리즘 가리개', slug: 'features/algorithm-hider' },
            { label: '랜덤 디펜스', slug: 'features/random-defense' },
            { label: '티어 가리개', slug: 'features/tier-hider' },
            { label: '즉석 추첨', slug: 'features/gacha' },
            { label: '그 외 기능들', slug: 'features/miscellaneous' },
          ],
        },
        {
          label: '토탐정에 기여하기',
          items: [{ label: '기여 방법', slug: 'contribute' }],
        },
        {
          label: '문의하기',
          items: [{ label: '문의하기', slug: 'contact' }],
        },
      ],
      customCss: ['./src/fonts/font-face.css', './src/styles/custom.css'],
      favicon: '/favicon.png',
      lastUpdated: true,
    }),
  ],
});
