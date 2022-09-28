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

const setData = (key, value) => {
    chrome.storage.sync.set({ [key]: value });
}

const isValidQueryNo = num => {
    if (typeof num === 'number' || num % 1 === 0 && num >= 0 && num <= 9)
        return true;
    else
        return false;
}

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
            });
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
                });

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
                });
            }
        });
    }
    else if (message.msg === 'getDefenseQuery') {
        const no = message.no;

        chrome.storage.sync.get('query', (loaded) => {
            loaded = loaded.query;

            if (loaded && no === -1 && loaded.selectedNo)
                sendResponse({ 'result': 'OK', 'query': loaded[loaded.selectedNo].query })
            else if (loaded && loaded[no] && !loaded[no].isEmpty)
                sendResponse({ 'result': 'OK', 'query': loaded[no].query });
            else
                sendResponse({ 'result': 'FAIL' });
        });
    }
    else if (message.msg === 'logQueryHistory') {
        chrome.storage.sync.get('queryLog', (loaded) => {
            let queryLog = loaded.queryLog;
            let data = [];
            console.log('OK Query STart', message.data);

            try {
                for (let i = Math.max(0, queryLog.length - 200); i < queryLog.length; i++) {
                    data.push(queryLog[i]);
                }
                data.push(message.data);
            }
            catch (e) { data = [message.data]; console.log('Exception!') };

            setData('queryLog', data);
        });
    }
    else if (message.msg === 'getQueryHistory') {
        chrome.storage.sync.get(['queryLog', 'isTierVisible'], (loaded) => {
            let queryLog = loaded.queryLog;
            let isTierVisible = loaded.isTierVisible;
            let data = [];

            try {
                for (let i = 0; i < queryLog.length; i++) {
                    let cur = {};
                    let ok = 0;

                    if ('no' in queryLog[i] && queryLog[i].no >= 1000 && Number.isInteger(queryLog[i].no)) {
                        cur.no = queryLog[i].no;
                        ok++;
                    }

                    if ('title' in queryLog[i]) {
                        cur.title = queryLog[i].title;
                        ok++;
                    }

                    if ('date' in queryLog[i]) {
                        cur.date = queryLog[i].date;
                        ok++;
                    }

                    if ('tier' in queryLog[i] && Number.isInteger(queryLog[i].tier) &&
                        queryLog[i].tier >= -1 && queryLog[i].tier <= 31) {
                        cur.tier = queryLog[i].tier;
                        ok++;
                    }

                    if (ok === 4) {
                        data.push(cur);
                    }
                }
            }
            catch (e) { };

            if (isTierVisible) isTierVisible = true;
            else isTierVisible = false;

            setData('queryLog', data);
            setData('isTierVisible', isTierVisible);
            sendResponse({ queryLog: data, isTierVisible: isTierVisible });
        });
    }
    else if (message.msg === 'getSlotData') {
        chrome.storage.sync.get('query', (loaded) => {
            let data = { selectedNo: 1 };
            loaded = loaded.query;

            for (let i = 0; i <= 9; i++)
                data[i] = { isEmpty: true, title: '', query: '' };

            for (let i = 0; i <= 9; i++) {
                try {
                    if (typeof loaded === 'object' && loaded[i]) {
                        if ('isEmpty' in loaded[i] && loaded[i].isEmpty === false)
                            data[i].isEmpty = false;

                        if ('title' in loaded[i])
                            data[i].title = loaded[i].title;

                        if ('query' in loaded[i])
                            data[i].query = loaded[i].query.slice(0, 300);
                    }
                } catch (e) { data[i] = { isEmpty: true, title: '', query: '' } };
            }

            if (isValidQueryNo(loaded.selectedNo))
                data.selectedNo = loaded.selectedNo;

            setData('query', data);
            sendResponse(data);
        });
    }
    else if (message.msg === 'saveSlotNo') {
        chrome.storage.sync.get('query', (loaded) => {
            try {
                let data = loaded.query;
                data.selectedNo = message.no;
                console.log('NEW', data);
                setData('query', data);
                sendResponse({ 'result': 'OK' });
            }
            catch (e) {
                sendResponse({ 'result': 'FAIL' });
            }
        });
    }
    else if (message.msg === 'saveQuery') {
        chrome.storage.sync.get('query', (loaded) => {
            loaded = loaded.query;
            loaded[message.no] = message.data;
            console.log('SAVE:', message.data);
            setData('query', loaded);
        });
    }

    return true;
});