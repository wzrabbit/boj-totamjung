import { defineConfig } from 'wxt';
import vitePluginSvgr from 'vite-plugin-svgr';

export default defineConfig({
  modules: ['@wxt-dev/module-react', '@wxt-dev/i18n/module'],
  vite: () => ({
    plugins: [vitePluginSvgr()],
    define: {
      'process.env.BUILD_DATE': JSON.stringify(
        new Date().toLocaleDateString('ko-KR'),
      ),
    },
  }),
  manifest: {
    name: '__MSG_extensionName__',
    description: '__MSG_extensionDescription__',
    default_locale: 'ko',
    permissions: ['storage'],
    host_permissions: ['https://solved.ac/api/v3/search/*'],
    web_accessible_resources: [
      {
        resources: ['/*'],
        matches: ['https://www.acmicpc.net/*', 'https://solved.ac/*'],
      },
    ],
  },
  webExt: {
    startUrls: ['https://solved.ac', 'https://www.acmicpc.net'],
  },
});
