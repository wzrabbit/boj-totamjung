import db from './db.js';
import loadSliderModule from './slider.js';
import loadSlotAndSearcherModule from './slotAndSearcher.js';
import loadHistory from './history.js';

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
    chrome.storage.sync.set({ [key]: value });
}

function trimWord(word) {
    word = word.toLowerCase();
    word = word.replace(/^tag:|^#|[,_/#-]| /g, '');
    return word;
}

function makeCategoryListener() {
    const settings01 = document.querySelector('#sp-01');
    const settings02 = document.querySelector('#sp-02');
    const category01 = document.querySelector('#category-block-01');
    const category02 = document.querySelector('#category-block-02');

    category01.addEventListener('click', () => {
        settings01.style.display = 'grid';
        category01.classList.add('category-selected');
        settings02.style.display = 'none';
        category02.classList.remove('category-selected');
    });

    category02.addEventListener('click', () => {
        settings01.style.display = 'none';
        category01.classList.remove('category-selected');
        settings02.style.display = 'grid';
        category02.classList.add('category-selected');
    });
}

function loadPool(keyword) {
    let printer = '';
    keyword = trimWord(keyword);

    chrome.storage.sync.get('algorithm', (algorithm) => {
        algorithm = new Set(algorithm['algorithm']);
        const poolOrigin = document.getElementById('pool');

        for (let i = 1; i <= Object.keys(db).length; i++) {
            let word = [
                db[i].name,
                db[i].tag,
                ...(db[i].alias.length > 0 ? db[i].alias : [])].map((x => trimWord(x)));
            let found = false;

            for (let i = 0; i < word.length; i++) {
                if (word[i].indexOf(keyword) !== -1) {
                    found = true;
                    break;
                }
            }

            if (found || keyword === '') {
                printer += `
                <div class="algorithm-block">
                    <label>
                        <span>${db[i].name}</span>
                        <input class="hidden checkbox" type="checkbox" no="${i}" ${algorithm.has(i) ? 'checked' : ''}/>
                        <span class="checkbox-visual"></span>
                    </label>
                </div>
            `;
            }
        }

        poolOrigin.innerHTML = printer;

        document.querySelectorAll('.checkbox').forEach((item) => {
            item.addEventListener('change', () => {
                updateAlgorithmData(parseInt(item.getAttribute('no')), item.checked);
            });
        });
    });
}

function makePoolSearchListener() {
    const poolSearcher = document.querySelector('#pool-search');
    poolSearcher.addEventListener('keydown', e => {
        if (e.keyCode === 27)
            poolSearcher.value = '';
    });

    poolSearcher.addEventListener('keyup', () => {
        loadPool(poolSearcher.value);
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
            }
        });
    });

    document.querySelectorAll('.radio').forEach((item) => {
        item.addEventListener('change', () => {
            updateSettingsData(
                item.getAttribute('name'),
                item.getAttribute('value'),
                item.checked
            );
        });
    });
}

function updateSettingsData(name, value, state) {
    chrome.storage.sync.get('settings', (loaded) => {
        if (!state)
            return;

        loaded = loaded['settings'];

        if (loaded === undefined || Object.values(loaded).indexOf(undefined) !== -1)
            loaded = resetSettings;

        if (['predict', 'lock', 'theme', 'font'].indexOf(name) === -1) {
            loaded = resetSettings;
            return;
        }

        loaded[name] = value;

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
                updateTimerData(item);
            });
        });
    });
}

function updateTimerData(element) {
    let hour = document.querySelector('#hour');
    let minute = document.querySelector('#minute');

    chrome.storage.sync.get(['timer'], (loaded) => {
        loaded = loaded['timer'];
        if (loaded === undefined ||
            isNaN(loaded.hour) || loaded.hour === '' || loaded.hour % 1 !== 0 || loaded.hour > 8 || loaded.hour < 0 ||
            isNaN(loaded.minute) || loaded.minute === '' || loaded.minute % 1 !== 0 || loaded.minute > 59 || loaded.minute < 0 ||
            isNaN(loaded.problem) || isNaN(loaded.expire)
        )
            loaded = resetTimer;

        if (element === hour) {
            if (isNaN(hour.value) || hour.value === '' || hour.value % 1 !== 0 || hour.value > 8 || hour.value < 0 ||
                hour.value.toString().length >= 2 || hour.value.toString().includes('-')
            )
                hour.value = loaded.hour;
        }
        else if (element === minute) {
            if (isNaN(minute.value) || minute.value === '' || minute.value % 1 !== 0 || minute.value > 59 ||
                minute.value < 0 || minute.value.toString().length >= 3 || minute.value.toString().includes('-') ||
                minute.value.toString() === '00'
            )
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

function loadLinks() {
    const guideBtn = document.querySelector('#guide-btn');
    const githubBtn = document.querySelector('#github-btn');

    guideBtn.addEventListener('click', () => {
        if (confirm('도움말 페이지를 방문하시겠습니까?'))
            window.open('https://github.com/wzrabbit/boj-totamjung/blob/main/GUIDE.md');
    });

    githubBtn.addEventListener('click', () => {
        if (confirm('토탐정 깃허브 저장소를 방문하시겠습니까?'))
            window.open('https://github.com/wzrabbit/boj-totamjung');
    });
}

function loadToggler() {
    const toggler = document.querySelector('#toggler');
    const leftFrag = document.querySelector('#left-frag');
    const rightFrag = document.querySelector('#right-frag');
    const easyRandomMenu = document.querySelector('#easy-random-menu');
    const manualRandomMenu = document.querySelector('#manual-random-menu');
    let state = 'left';

    leftFrag.addEventListener('click', () => {
        if (state === 'right') {
            state = 'left';
            easyRandomMenu.classList.remove('none');
            manualRandomMenu.classList.add('none');
            toggler.setAttribute('activated', 'left');
        }
    });

    rightFrag.addEventListener('click', () => {
        if (state === 'left') {
            state = 'right';
            easyRandomMenu.classList.add('none');
            manualRandomMenu.classList.remove('none');
            toggler.setAttribute('activated', 'right');
        }
    });
}

window.onload = () => {
    makeCategoryListener();
    loadPool('');
    loadSettings();
    makePoolSearchListener();
    loadTimer();
    loadLinks();
    loadToggler();
    loadSliderModule();
    loadSlotAndSearcherModule();
    loadHistory();
}
