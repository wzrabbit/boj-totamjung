(() => {
    'use strict';

    chrome.storage.sync.get('settings', (loaded) => {
        loaded = loaded['settings'];

        const observer = new MutationObserver(() => {
            const html = document.querySelector('html');
            const head = document.querySelector('head');

            if (loaded.theme === 'yes') {
                if (html)
                    html.setAttribute('totamjung', 'on');
            }

            if (head) {
                let pre = document.createElement('link');
                pre.rel = 'preconnect';
                pre.href = 'https://fonts.googleapis.com';

                let pre2 = document.createElement('link');
                pre2.rel = 'preconnect';
                pre.href = 'https://fonts.gstatic.com';

                let front = document.createElement('link');
                front.rel = 'stylesheet';
                front.href = 'https://fonts.googleapis.com/css2?family=Cute+Font&family=Do+Hyeon&family=Gaegu&family=Gothic+A1&family=Gowun+Batang&family=Gowun+Dodum&family=Hi+Melody&family=IBM+Plex+Sans+KR&family=Jua&family=Nanum+Gothic&family=Nanum+Gothic+Coding&family=Nanum+Myeongjo&family=Noto+Sans+KR&family=Noto+Serif+KR&family=Poor+Story&family=Single+Day&family=Song+Myung&family=Stylish&family=Sunflower:wght@300&family=Yeon+Sung&display=swap';

                head.appendChild(pre);
                head.appendChild(pre2);
                head.appendChild(front);
            }
        });
        observer.observe(document.documentElement, { childList: true });
    });
})();
