import executeContentScript from './main';

export default defineContentScript({
  matches: ['https://www.acmicpc.net/*'],
  runAt: 'document_idle',
  main() {
    executeContentScript();
  },
});
