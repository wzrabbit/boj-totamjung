const resetSettings = {
    'predict': 'click',
    'lock': 'click',
    'theme': 'no',
    'font': 'none'
};

const resetTimer = {
    'hour': 0,
    'minute': 10,
    'problem': -1,
    'expire': -1
};

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        setData('algorithm', [2]);
        setData('settings', resetSettings);
        setData('timer', resetTimer);
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.msg === 'openOption') {
        chrome.runtime.openOptionsPage();
    }
    else if (message.msg === 'themeOn' || message.msg === 'themeOff') {
        const newValue = (message.msg === 'themeOn') ? 'yes' : 'no';
        chrome.storage.sync.get('settings', (loaded) => {
            loaded = loaded['settings'];

            chrome.storage.sync.set({
                ['settings']: {
                    'predict': loaded.predict,
                    'lock': loaded.lock,
                    'theme': newValue,
                    'font': loaded.font
                }
            }, () => { });
        });
    }
    else if (message.msg === 'setTimer' || message.msg === 'deleteTimer') {
        chrome.storage.sync.get('timer', (loaded) => {
            loaded = loaded['timer'] || resetTimer;

            if (message.msg === 'setTimer') {
                loaded.problem = parseInt(sender.url.split('problem/')[1].match(/^\d+/g)[0]);
                loaded.expire = new Date().getTime()
                    + loaded.hour * 3600000 + loaded.minute * 60000;

                chrome.storage.sync.set({
                    ['timer']: {
                        'hour': loaded.hour,
                        'minute': loaded.minute,
                        'problem': loaded.problem,
                        'expire': loaded.expire
                    }
                }, () => { });

                sendResponse(loaded.expire);
            }
            else {
                chrome.storage.sync.set({
                    ['timer']: {
                        'hour': loaded.hour,
                        'minute': loaded.minute,
                        'problem': -1,
                        'expire': -1
                    }
                }, () => { });
            }
        });
    }

    return true;
});

function setData(key, value) {
    chrome.storage.sync.set({ [key]: value }, () => { });
}