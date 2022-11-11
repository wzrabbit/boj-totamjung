import db from './db.js';

const slotBean = document.querySelector('#slot-bean');
const slotName = document.querySelector('#slot-name');
const slotQuery = document.querySelector('#slot-query');
const hotkeyText = document.querySelector('#hotkey-info');
const deleteButton = document.querySelector('#query-delete');

const rdTitle = document.querySelector('#rd-title');
const toggler = document.querySelector('#toggler');
const rdNickName = document.querySelector('#rd-nickname');
const rdMinSolved = document.querySelector('#rd-min-solved');
const rdMaxSolved = document.querySelector('#rd-max-solved');
const leftThumb = document.querySelector('#left-thumb');
const rightThumb = document.querySelector('#right-thumb');
const rdQuery = document.querySelector('#rd-query');
const rdSubmit = document.querySelector('#rd-submit');

const mainDiv = document.querySelector('#query-searcher');
const searchDiv = document.querySelector('#query-search-div');
const keywordDiv = document.querySelector('#query-keyword-div');
const searchInput = document.querySelector('#query-search-input');
const fakeDiv = document.querySelector('#fake-div');

const warningBundle = document.querySelector('#warning-bundle');
const warningText = document.querySelector('#warning-text');

let algoData = [];
let searchResult = [];
let ORValue = 'AND';

/* SLOT */

const createSlot = () => {
    chrome.runtime.sendMessage({ msg: 'getSlotData' }, (res) => {
        let slotHTML = '';

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach(i => {
            slotHTML += `
            <label>
                <input class="hidden slot-radio${res[i].isEmpty ? '' : ' ready'}" type="radio" name="slot" id="slot-radio-${i}"/>
                <span class="slot-radio-visual">${i}</span>
            </label>`;
        });

        slotBean.innerHTML = slotHTML;

        for (let i = 0; i <= 9; i++) {
            document.querySelector(`#slot-radio-${i}`).addEventListener('click', () => {
                showInfoAndSaveNo(i);
            });
        }

        document.querySelector(`#slot-radio-${res.selectedNo}`).click();
    });
}

const showInfoAndSaveNo = no => {
    chrome.runtime.sendMessage({ msg: 'getSlotData' }, (res) => {
        if (res[no].isEmpty) {
            slotName.innerHTML = `<span style="color: var(--empty-color)">(비어 있음)</span>`;
            slotQuery.innerHTML = `<span style="color: var(--empty-color)">(비어 있음)</span>`;
        }
        else {
            slotName.innerText = res[no].title;
            slotQuery.innerText = res[no].query;
        }

        hotkeyText.innerText = `단축키: Alt + ${no}`;

        chrome.runtime.sendMessage({ msg: 'saveSlotNo', no: no }, (res) => {
            if (res.result === 'FAIL')
                alert('죄송합니다. 데이터 저장 도중 문제가 발생했습니다. 페이지를 새로고침 해 주세요.');
        });
    });
}

deleteButton.addEventListener('click', () => {
    deleteQuery();
});

const deleteQuery = () => {
    chrome.runtime.sendMessage({ msg: 'getSlotData' }, (res) => {
        const no = res.selectedNo;

        slotName.innerHTML = `<span style="color: var(--empty-color)">(비어 있음)</span>`;
        slotQuery.innerHTML = `<span style="color: var(--empty-color)">(비어 있음)</span>`;
        document.querySelector(`#slot-radio-${res.selectedNo}`).classList.remove('ready');

        chrome.runtime.sendMessage({
            msg: 'saveQuery',
            no: no,
            data: { isEmpty: true, title: '', query: '' }
        });
    });
}

rdSubmit.addEventListener('click', () => {
    const validResult = checkValid(toggler.getAttribute('activated'));
    if (validResult.result === 'OK') {
        warningBundle.style.display = 'none';
        saveQuery(toggler.getAttribute('activated'));
    }
    else {
        warningBundle.style.display = 'block';
        warningText.innerText = validResult.errorMessage;
    }
});

const checkValid = mode => {
    if (rdTitle.value.length > 30)
        return { result: 'FAIL', errorMessage: '추첨 이름은 30자 이하여야 합니다.' };

    if (mode === 'left') {
        if (rdNickName.value.trim() !== '') {
            if (!/^[A-z0-9]+$/.test(rdNickName.value) && rdNickName.value !== '') {
                rdNickName.focus();
                return { result: 'FAIL', errorMessage: '닉네임은 알파벳과 숫자로만 구성되어야 합니다.' };
            }

            if (rdNickName.value.length > 20 || rdNickName.value.length < 3) {
                rdNickName.focus();
                return { result: 'FAIL', errorMessage: '닉네임은 3~20자여야 합니다.' };
            }
        }

        if (isNaN(rdMaxSolved.value) || isNaN(rdMinSolved.value) || rdMaxSolved.value < 0 || rdMinSolved.value < 0) {
            if (isNaN(rdMinSolved.value) || rdMinSolved.value < 0) {
                rdMinSolved.focus();
            }
            else {
                rdMaxSolved.focus();
            }

            return { result: 'FAIL', errorMessage: '맞은 사람 수는 0 이상의 정수여야 합니다.' };
        }

        // 비교 전, 맞춘 사람 수는 정수로 변환
        const rdMinNumberValue = Number(rdMinSolved.value);
        const rdMaxNumberValue = Number(rdMaxSolved.value);
        console.log('Changed Test', rdMinNumberValue, rdMaxNumberValue);

        if (rdMinSolved.value !== '' && rdMaxSolved.value !== '' && rdMinNumberValue > rdMaxNumberValue) {
            console.log('Something got wrong');
            console.log(rdMinSolved.value, rdMaxSolved.value);
            rdMinSolved.focus();
            return { result: 'FAIL', errorMessage: '맞은 사람 수의 좌변은 우변보다 클 수 없습니다.' };
        }

        if (rdMinNumberValue > 100000000 || rdMaxNumberValue > 100000000) {
            if (rdMinNumberValue > 100000000) {
                rdMinSolved.focus();
            }
            else {
                rdMaxSolved.focus();
            }

            return { result: 'FAIL', errorMessage: '맞은 사람 수는 100,000,000 명을 넘을 수 없습니다.' };
        }
    }
    else {
        if (rdQuery.value.length > 300) {
            rdQuery.focus();
            return { result: 'FAIL', errorMessage: '쿼리는 300자 이하여야 합니다.' };
        }
    }

    return { result: 'OK' };
}

const saveQuery = mode => {
    chrome.runtime.sendMessage({ msg: 'getSlotData' }, (res) => {
        const no = res.selectedNo;
        let title = rdTitle.value;
        let query = '';

        if (title.trim() === '')
            title = `추첨 ${res.selectedNo}`;

        if (mode === 'left') {
            query += `tier:${leftThumb.value}..${rightThumb.value} `;
            if (rdNickName.value.replaceAll(' ', '') !== '')
                query += `~@${rdNickName.value} `

            if (rdMinSolved.value.trim() !== '' || rdMaxSolved.value.trim() !== '')
                query += `solved:${rdMinSolved.value.replaceAll(' ', '')}..${rdMaxSolved.value.replaceAll(' ', '')} `;

            query += 'solvable:true ';

            if (algoData.length > 0) {
                query += '(';
            }

            for (let i = 0; i < algoData.length; i++) {
                if (ORValue !== 'OR' && ORValue !== 'AND') {
                    query += '-';
                }

                query += `tag:${algoData[i].tag}`;

                if (i < algoData.length - 1) {
                    if (ORValue === 'OR') {
                        query += '|';
                    }
                    else if (ORValue === 'AND') {
                        query += '&';
                    }
                }
            }

            if (algoData.length > 0) {
                query += ')';
            }
        }
        else {
            query = rdQuery.value;
        }

        slotName.innerText = title;
        slotQuery.innerText = query;
        document.querySelector(`#slot-radio-${res.selectedNo}`).classList.add('ready');

        chrome.runtime.sendMessage({
            msg: 'saveQuery',
            no: no,
            data: { isEmpty: false, title: title, query: query }
        });
    });
}




/* SEARCHER */

searchInput.addEventListener('focusin', () => {
    mainDiv.setAttribute('focused', '');
    getSearchResult('');
});

searchInput.addEventListener('focusout', (e) => {
    setTimeout(() => {
        if (![searchInput, mainDiv, keywordDiv, searchDiv].includes(e.relatedTarget)) {
            mainDiv.removeAttribute('focused');
            searchInput.value = '';
        }
    }, 200);
});

document.querySelectorAll('.radio.or').forEach(item => {
    item.addEventListener('change', e => {
        ORValue = e.target.value;
    });
});

const trimWord = word => {
    word = word.toLowerCase();
    word = word.replace(/^tag:|^#|[,_/#-]| /g, '');
    return word;
}

const getSearchResult = keyword => {
    keywordDiv.textContent = '';

    if (algoData.length >= 5) {
        return;
    }

    keyword = trimWord(keyword);
    searchResult = [];

    for (let i = 1; i <= Object.keys(db).length; i++) {
        let word = [
            db[i].name,
            db[i].tag,
            ...(db[i].alias.length > 0 ? db[i].alias : [])].map((x => trimWord(x)));
        let found = false;

        for (let j = 0; j < word.length; j++) {
            if (word[j].indexOf(keyword) !== -1) {
                found = true;
                break;
            }
        }

        if (found || keyword === '') {
            searchResult.push({ name: db[i].name, tag: db[i].tag });
            let searchBlock = document.createElement('div');
            searchBlock.className = 'search-algorithm-block';
            searchBlock.innerText = db[i].name;
            keywordDiv.append(searchBlock);

            searchBlock.addEventListener('click', () => {
                algoData.push({ name: db[i].name, tag: db[i].tag });
                renderResult();
                searchInput.value = '';
                searchInput.focus();
                getSearchResult('');
            });
        }

        if (searchResult.length >= 20)
            break;
    }
}

searchDiv.addEventListener('keydown', e => {
    if (e.key === 'Backspace' && algoData.length >= 1 && searchInput.value === '') {
        algoData.pop();
        renderResult();
        searchInput.value = '';
        searchInput.focus();
        getSearchResult('');
    }
});

searchInput.addEventListener('keyup', e => {
    if (algoData.length >= 5) {
        e.target.value = '';
    }

    getFakeWidth(searchInput.value);

    getSearchResult(searchInput.value);
    if (e.key === 'Enter' && algoData.length < 5 && searchResult.length !== 0) {
        algoData.push(searchResult[0]);
        renderResult();
        searchInput.value = '';
        searchInput.focus();
        getSearchResult('');
    }

    searchInput.style.width = `${(getFakeWidth(searchInput.value) + 20).toString()}px`;
});

const getFakeWidth = text => {
    text = text.replace(/ /g, 'x');
    fakeDiv.innerText = text;
    return fakeDiv.offsetWidth;
}

const renderResult = () => {
    document.querySelectorAll('.search-algorithm-block').forEach(x => {
        x.remove();
    });

    for (let i = algoData.length - 1; i >= 0; i--) {
        let block = document.createElement('div');
        block.classList.add('search-algorithm-block');
        block.innerText = algoData[i].name;
        searchDiv.prepend(block);
    }
}


const loadSlotAndSearcher = () => {
    createSlot();
}

export default loadSlotAndSearcher;