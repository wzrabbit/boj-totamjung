const root = document.querySelector('#popupRoot');
const cancelButton = document.querySelector('#cancelButton');
const applyButton = document.querySelector('#applyButton');
const closeButton = document.querySelector('#popupClose');
const editTitleInput = document.querySelector('#editTitleInput');
const editQueryInput = document.querySelector('#editQueryInput');
const editButton = document.querySelector('#query-edit');

const slotName = document.querySelector('#slot-name');
const slotQuery = document.querySelector('#slot-query');

let selectedNo = -1;

const hide = () => {
    root.style.display = 'none';
}

const show = () => {
    root.style.display = 'block';
}

const loadListener = () => {
    editButton.addEventListener('click', () => {
        loadCurrentQueryData();
    });

    cancelButton.addEventListener('click', () => {
        hide();
    });

    applyButton.addEventListener('click', () => {
        saveCurrentQueryData();
        hide();
    });

    closeButton.addEventListener('click', () => {
        hide();
    });
}

const loadCurrentQueryData = () => {
    chrome.runtime.sendMessage({ msg: 'getSlotData' }, (res) => {
        const isEmpty = res[res.selectedNo].isEmpty;
        if (isEmpty) {
            alert('해당 슬롯의 추첨은 비어 있습니다. 먼저 추첨을 만들어 주세요!');
            return;
        }

        show();
        selectedNo = res.selectedNo;
        editTitleInput.value = res[res.selectedNo].title;
        editQueryInput.value = res[res.selectedNo].query;
    });
}

const saveCurrentQueryData = () => {
    const newTitle = editTitleInput.value;
    const newQuery = editQueryInput.value;

    chrome.runtime.sendMessage({
        msg: 'saveQuery',
        no: selectedNo,
        data: { isEmpty: false, title: newTitle, query: newQuery }
    });

    slotName.innerText = newTitle;
    slotQuery.innerText = newQuery;
}

const loadEditPopup = () => {
    loadListener();
}

export default loadEditPopup;