chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.msg === 'openOption')
            chrome.runtime.openOptionsPage();
    }
);