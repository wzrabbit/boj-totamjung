(() => {
    'use strict';

    chrome.storage.sync.get('settings', (loaded) => {
        loaded = loaded['settings'];
        if (loaded.theme === 'no') return;
        const observer = new MutationObserver(() => {
            if (document.querySelector('html')) {
                document.querySelector('html').setAttribute('totamjung', 'on');
            }
        });
        observer.observe(document.documentElement, { childList: true });
    });
})();
