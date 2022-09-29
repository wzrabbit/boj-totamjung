const historySlot = document.querySelector('#history-slot');
const hideButton = document.querySelector('#tier-hide-button');
const tierImage = [];

const loadTierImage = () => {
    for (let i = 0; i <= 31; i++) {
        let image = new Image();
        image.src = `images/tier/solvedac-tier-${i}.svg`;
        tierImage.push(image);
    }
}

const renderHistory = () => {
    console.log('render history');
    chrome.runtime.sendMessage({ msg: 'getQueryHistory' }, res => {
        console.log('Query Response', res);

        if (res.isTierHidden) {
            hideButton.checked = true;
            historySlot.classList.add('gray');
        }

        for (let i = res.queryLog.length - 1; i >= 0; i--) {
            let historyBlock = document.createElement('div');
            historyBlock.addEventListener('click', () => {
                open(`https://acmicpc.net/problem/${res.queryLog[i].no}`);
            });

            let tierName = 'unrated';
            const tier = res.queryLog[i].tier;

            switch (true) {
                case (tier >= 1 && tier <= 5):
                    tierName = 'bronze';
                    break;
                case (tier >= 6 && tier <= 10):
                    tierName = 'silver';
                    break;
                case (tier >= 11 && tier <= 15):
                    tierName = 'gold';
                    break;
                case (tier >= 16 && tier <= 20):
                    tierName = 'platinum';
                    break;
                case (tier >= 21 && tier <= 25):
                    tierName = 'diamond';
                    break;
                case (tier >= 26 && tier <= 30):
                    tierName = 'ruby';
                    break;
            }

            historyBlock.classList.add('history-block');
            historyBlock.classList.add(tierName);

            historyBlock.innerHTML = `
                <img class="history-block-image" src="${tierImage[tier].src}"/>
                <div class="history-block-title">${res.queryLog[i].title}</div>
                <div class="history-block-date">${res.queryLog[i].date}</div>
                <div class="history-block-no">#${res.queryLog[i].no}</div>
            `;
            historySlot.append(historyBlock);
        }
    });
}

hideButton.addEventListener('change', (e) => {
    if (e.currentTarget.checked) {
        chrome.runtime.sendMessage({ msg: 'setTierVisible', isTierHidden: true });
        historySlot.classList.add('gray');
    }
    else {
        chrome.runtime.sendMessage({ msg: 'setTierVisible', isTierHidden: false });
        historySlot.classList.remove('gray');
    }
});

const loadHistory = () => {
    console.log('History load start');
    loadTierImage();
    renderHistory();
};

export default loadHistory;