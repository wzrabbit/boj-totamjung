import executeContentScript from './main';

export default defineContentScript({
  matches: ['https://www.acmicpc.net/*', 'https://solved.ac/*'],
  runAt: 'document_idle',
  main() {
    executeContentScript();
  },
});
