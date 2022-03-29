import idToAlgorithm from './idToAlgorithm.js';

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

function setData(key, value) {
    chrome.storage.sync.set({ [key]: value }, () => { console.log('ok') });
}

function loadPool() {
    let printer = '';
    chrome.storage.sync.get('algorithm', (algorithm) => {
        algorithm = new Set(algorithm['algorithm']);
        const poolOrigin = document.getElementById('pool');

        for (let i = 1; i <= Object.keys(idToAlgorithm).length; i++) {
            printer += `
                <div class="algorithm-block">
                    <label>
                        <span>${idToAlgorithm[i]}</span>
                        <input class="hidden checkbox" type="checkbox" no="${i}" ${algorithm.has(i) ? 'checked' : ''}/>
                        <span class="checkbox-visual"></span>
                    </label>
                </div>
            `;
        }

        poolOrigin.innerHTML = printer;

        document.querySelectorAll('.checkbox').forEach((item) => {
            item.addEventListener('change', () => {
                updateAlgorithmData(parseInt(item.getAttribute('no')), item.checked);
            });
        });
    });
}

function updateAlgorithmData(id, state) {
    chrome.storage.sync.get('algorithm', (loaded) => {
        loaded = new Set(loaded['algorithm']);

        if (state)
            loaded.add(id);
        else
            loaded.delete(id);

        setData('algorithm', [...loaded]);
    });
}

function loadSettings() {
    chrome.storage.sync.get(['settings'], (loaded) => {
        loaded = loaded['settings'];
        if (loaded === undefined || Object.values(loaded).indexOf(undefined) !== -1)
            loaded = resetSettings;

        ['predict', 'lock', 'theme', 'font'].forEach((name) => {
            let radioElement = document.querySelector(`.radio[name="${name}"].radio[value="${loaded[name]}"]`);
            if (radioElement)
                radioElement.checked = true;
            else {
                loaded = resetSettings;
                console.log('invaild data. reset');
            }
        });
    });

    document.querySelectorAll('.radio').forEach((item) => {
        item.addEventListener('change', () => {
            console.log('value change detected!');
            updateSettingsData(
                item.getAttribute('name'),
                item.getAttribute('value'),
                item.checked
            );
        });
    });
}

function updateSettingsData(name, value, state) {
    console.log('update start', name, value, state);
    chrome.storage.sync.get('settings', (loaded) => {
        if (!state)
            return;

        console.log(loaded);
        loaded = loaded['settings'];

        if (loaded === undefined || Object.values(loaded).indexOf(undefined) !== -1)
            loaded = resetSettings;

        console.log('before', loaded);
        if (['predict', 'lock', 'theme', 'font'].indexOf(name) === -1) {
            loaded = resetSettings;
            console.log('invaild request!! aborting.');
            return;
        }

        loaded[name] = value;
        console.log('after', loaded);

        setData('settings', {
            'predict': loaded.predict,
            'lock': loaded.lock,
            'theme': loaded.theme,
            'font': loaded.font
        });
    });
}

function loadTimer() {
    chrome.storage.sync.get(['timer'], (loaded) => {
        loaded = loaded['timer'];
        if (loaded === undefined ||
            isNaN(loaded.hour) || loaded.hour % 1 !== 0 || loaded.hour > 8 || loaded.hour < 0 ||
            isNaN(loaded.minute) || loaded.minute % 1 !== 0 || loaded.minute > 59 || loaded.minute < 0 ||
            isNaN(loaded.problem) || isNaN(loaded.expire)
        )
            loaded = resetTimer;

        let hour = document.querySelector('#hour');
        let minute = document.querySelector('#minute');
        hour.value = loaded.hour;
        minute.value = loaded.minute;

        [hour, minute].forEach((item) => {
            item.addEventListener('change', () => {
                console.log('timer value change detected!');
                updateTimerData(item);
            });
        });
    });
}

function updateTimerData(element) {
    let hour = document.querySelector('#hour');
    let minute = document.querySelector('#minute');

    chrome.storage.sync.get(['timer'], (loaded) => {
        loaded = loaded['loaded'];
        if (loaded === undefined ||
            isNaN(loaded.hour) || loaded.hour === '' || loaded.hour % 1 !== 0 || loaded.hour > 8 || loaded.hour < 0 ||
            isNaN(loaded.minute) || loaded.minute === '' || loaded.minute % 1 !== 0 || loaded.minute > 59 || loaded.minute < 0 ||
            isNaN(loaded.problem) || isNaN(loaded.expire)
        )
            loaded = resetTimer;

        if (element === hour) {
            if (isNaN(hour.value) || hour.value === '' || hour.value % 1 !== 0 || hour.value > 8 || hour.value < 0)
                hour.value = loaded.hour;
        }
        else if (element === minute) {
            if (isNaN(minute.value) || minute.value === '' || minute.value % 1 !== 0 || minute.value > 59 || minute.value < 0)
                minute.value = loaded.minute;
        }

        loaded.hour = hour.value;
        loaded.minute = minute.value;

        setData('timer', {
            'hour': loaded.hour,
            'minute': loaded.minute,
            'problem': loaded.problem,
            'expire': loaded.expire
        });
    });
}

window.onload = () => {
    loadPool();
    loadSettings();
    loadTimer();
}
