import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: '토탐정',
    permissions: ['storage'],
    host_permissions: ['https://solved.ac/api/v3/search/*'],
    web_accessible_resources: [
      {
        resources: ['/*'],
        matches: ['https://www.acmicpc.net/*'],
      },
    ],
  },
});
