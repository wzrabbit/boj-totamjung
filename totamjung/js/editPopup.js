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

const loadEditPopup = () => { }

export default loadEditPopup;