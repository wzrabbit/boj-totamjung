chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.msg === 'openOption')
            chrome.runtime.openOptionsPage();
    }
);