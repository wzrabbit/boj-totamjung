import { defineConfig } from 'wxt';
import vitePluginSvgr from 'vite-plugin-svgr';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  extensionApi: 'chrome',
  vite: () => ({
    plugins: [vitePluginSvgr()],
    define: {
      'process.env.BUILD_DATE': JSON.stringify(
        new Date().toLocaleDateString('ko-KR'),
      ),
    },
  }),
  manifest: {
    name: '토탐정',
    permissions: ['storage'],
    host_permissions: ['https://solved.ac/api/v3/search/*'],
    web_accessible_resources: [
      {
        resources: ['/*'],
        matches: ['https://www.acmicpc.net/*', 'https://solved.ac/*'],
      },
    ],
  },
});
