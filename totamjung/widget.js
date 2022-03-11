function createWidget() {
    let widget = document.createElement('div');
    widget.className = 'ttj-widget';

    widget.innerHTML = `
        <div class="ttj-dropdown-menu" id="ttj-dropdown-menu">
            <div class="ttj-menu-item ttj-option-btn" id="ttj-optionbtn">
                <img class="ttj-menu-image" src="${chrome.runtime.getURL('images/options_normal.png')}" />
            </div>
            <div class="ttj-menu-item">
                <img class="ttj-menu-image" src="${chrome.runtime.getURL('images/theme_normal.png')}" />
            </div>
            <div class="ttj-menu-item">
                <img class="ttj-menu-image" src="${chrome.runtime.getURL('images/task_normal.png')}" />
            </div>
            <div class="ttj-menu-item">
                <img class="ttj-menu-image" src="${chrome.runtime.getURL('images/lock_normal.png')}" />
            </div>
        </div>
        <div class="ttj-topbtn" id="ttj-topbtn" cooldown="false">
            <span></span>
            <span></span>
        </div>
    `;

    document.querySelector('body').appendChild(widget);
}

function createTopButtonListener() {
    const topBtn = document.querySelector('#ttj-topbtn');
    const menu = document.querySelector('#ttj-dropdown-menu');
    topBtn.addEventListener('click', () => {
        if (topBtn.getAttribute('cooldown') === 'false') {
            topBtn.setAttribute('cooldown', 'true');
            setTimeout(() => {
                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 330);
            setTimeout(() => {
                topBtn.setAttribute('cooldown', 'false');
            }, 1050);
        }
    });

    topBtn.addEventListener('contextmenu', (event) => {
        topBtn.classList.toggle('open');
        if (topBtn.classList.contains('open')) {
            menu.style.height = '180px';
        }
        else {
            menu.style.height = '36px';
        }
        event.preventDefault();
    }, false);
}

function createOptionButtonListener() {
    const optionBtn = document.querySelector('#ttj-optionbtn');
    optionBtn.addEventListener('click', () => {
        chrome.runtime.sendMessage({ msg: 'openOption' });
    });
}

window.onload = () => {
    createWidget();
    createTopButtonListener();
    createOptionButtonListener();
}