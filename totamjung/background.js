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
        console.log("NEW DATA SET")
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('message', message, 'sender', sender, 'sendResponse', sendResponse);
    if (message.msg === 'openOption') {
        chrome.runtime.openOptionsPage();
        console.log('Successfully responed to openOption');
    }
    else if (message.msg === 'themeOn' || message.msg === 'themeOff') {
        const newValue = (message.msg === 'themeOn') ? 'yes' : 'no';
        chrome.storage.sync.get('settings', (loaded) => {
            loaded = loaded['settings'];

            console.log('debug:', loaded.predict, loaded.lock, newValue, loaded.font);
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
            console.log('dataCheck:', loaded['timer']);
            loaded = loaded['timer'] || resetTimer;

            console.log("Received Timer Command");

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

                console.log("Problem No.", loaded.problem);
                console.log("New Expire Date:", loaded.expire);
                sendResponse(loaded.expire);
            }
            else {
                console.log("Unlocked");
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
    chrome.storage.sync.set({ [key]: value }, () => { console.log('ok') });
}