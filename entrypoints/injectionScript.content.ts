export default defineContentScript({
  matches: ['https://www.acmicpc.net/*'],
  runAt: 'document_start',
  main() {
    console.log('Injection Script!');
  },
});
