import '~/assets/css/palette.css';
import '~/assets/css/totamjungTheme.css';
import '~/assets/css/tierHider.css';
import '~/assets/css/problemTheme.css';

export default defineContentScript({
  matches: ['https://www.acmicpc.net/*'],
  runAt: 'document_idle',
  main() {
    console.log('Content Script!');
  },
});
