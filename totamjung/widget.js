const algorithmToId = {
    "수학": 1, "구현": 2, "다이나믹 프로그래밍": 3, "그래프 이론": 4, "자료 구조": 5,
    "문자열": 6, "그리디 알고리즘": 7, "브루트포스 알고리즘": 8, "그래프 탐색": 9,
    "정렬": 10, "정수론": 11, "트리": 12, "세그먼트 트리": 13, "기하학": 14,
    "이분 탐색": 15, "너비 우선 탐색": 16, "사칙연산": 17, "시뮬레이션": 18,
    "깊이 우선 탐색": 19, "조합론": 20, "애드 혹": 21, "누적 합": 22, "구성적": 23,
    "많은 조건 분기": 24, "비트마스킹": 25, "다익스트라": 26, "파싱": 27,
    "분리 집합": 28, "백트래킹": 29, "분할 정복": 30, "스위핑": 31,
    "해시를 사용한 집합과 맵": 32, "트리를 사용한 집합과 맵": 33, "우선순위 큐": 34,
    "트리에서의 다이나믹 프로그래밍": 35, "스택": 36, "두 포인터": 37, "소수 판정": 38,
    "최대 유량": 39, "느리게 갱신되는 세그먼트 트리": 40, "게임 이론": 41,
    "비트필드를 이용한 다이나믹 프로그래밍": 42, "임의 정밀도 / 큰 수 연산": 43,
    "분할 정복을 이용한 거듭제곱": 44, "오프라인 쿼리": 45, "재귀": 46, "확률론": 47,
    "에라토스테네스의 체": 48, "매개 변수 탐색": 49, "최소 스패닝 트리": 50,
    "이분 매칭": 51, "배낭 문제": 52, "최소 공통 조상": 53, "런타임 전의 전처리": 54,
    "해싱": 55, "위상 정렬": 56, "값 / 좌표 압축": 57, "유클리드 호제법": 58,
    "강한 연결 요소": 59, "플로이드-와샬": 60, "포함 배제의 원리": 61, "볼록 껍질": 62,
    "선형대수학": 63, "트라이": 64, "희소 배열": 65, "고속 푸리에 변환": 66,
    "접미사 배열과 lcp 배열": 67, "제곱근 분할법": 68,
    "작은 집합에서 큰 집합으로 합치는 테크닉": 69, "볼록 껍질을 이용한 최적화": 70,
    "kmp": 71, "슬라이딩 윈도우": 72, "최소 비용 최대 유량": 73, "중간에서 만나기": 74,
    "덱": 75, "무작위화": 76, "미적분학": 77, "heavy-light 분할": 78,
    "3차원 기하학": 79, "스프라그-그런디 정리": 80, "오일러 경로 테크닉": 81,
    "가장 긴 증가하는 부분 수열: O(n log n)": 82, "선분 교차 판정": 83, "센트로이드": 84,
    "센트로이드 분할": 85, "단절점과 단절선": 86, "최대 유량 최소 컷 정리": 87,
    "가우스 소거법": 88, "2-sat": 89, "피타고라스 정리": 90, "삼분 탐색": 91,
    "순열 사이클 분할": 92, "오일러 경로": 93, "큐": 94, "비트 집합": 95,
    "퍼시스턴트 세그먼트 트리": 96, "휴리스틱": 97, "선인장": 98, "물리학": 99,
    "중국인의 나머지 정리": 100, "이중 연결 요소": 101, "mo's": 102, "스플레이 트리": 103,
    "페르마의 소정리": 104, "확장 유클리드 호제법": 105, "모듈로 곱셈 역원": 106,
    "분할 정복을 사용한 최적화": 107, "0-1 너비 우선 탐색": 108, "벨만-포드": 109,
    "평면 그래프": 110, "아호-코라식": 111, "오일러 피 함수": 112, "병렬 이분 탐색": 113,
    "다차원 세그먼트 트리": 114, "머지 소트 트리": 115, "오일러 지표 (χ=V-E+F)": 116,
    "기댓값의 선형성": 117, "벌래캠프-매시": 118, "볼록 다각형 내부의 점 판정": 119,
    "연결 리스트": 120, "링크/컷 트리": 121, "정규 표현식": 122, "라빈-카프": 123,
    "회전하는 캘리퍼스": 124, "외판원 순회 문제": 125, "다각형의 넓이": 126,
    "덱을 이용한 다이나믹 프로그래밍": 127, "매내처": 128,
    "커넥션 프로파일을 이용한 다이나믹 프로그래밍": 129, "뫼비우스 반전 공식": 130,
    "함수 개형을 이용한 최적화": 131, "트리 동형 사상": 132, "aliens 트릭": 133,
    "밀러-라빈 소수 판별법": 134, "수치해석": 135, "오프라인 동적 연결성 판정": 136,
    "홀의 결혼 정리": 137, "인터프리터": 138, "폴라드 로": 139, "이분 그래프": 140,
    "선형 계획법": 141, "쌍대 그래프": 142, "비둘기집 원리": 143,
    "오목 다각형 내부의 점 판정": 144, "뤼카 정리": 145, "쌍대성": 146, "매트로이드": 147,
    "보로노이 다이어그램": 148, "번사이드 보조정리": 149, "키타마사": 150,
    "크누스 최적화": 151, "헝가리안": 152, "이산 로그": 153, "일반적인 매칭": 154,
    "최소 외접원": 155, "z": 156, "통계학": 157, "도미네이터 트리": 158,
    "단조 큐를 이용한 최적화": 159, "회문 트리": 160, "안정 결혼 문제": 161,
    "담금질 기법": 162, "양방향 탐색": 163, "반평면 교집합": 164, "로프": 165,
    "스토어-바그너": 166, "히르쉬버그": 167, "이산 제곱근": 168,
    "4차원 이상의 기하학": 169, "접미사 트리": 170, "유향 최소 신장 트리": 171,
    "베이즈 정리": 172, "그린 정리": 173, "픽의 정리": 174, "크누스 x": 175,
    "탑 트리": 176, "춤추는 링크": 177, "보이어-무어 다수결 투표": 178, "트리 압축": 179,
    "생성 함수": 180, "a*": 181, "레드-블랙 트리": 182, "델로네 삼각분할": 183,
    "서큘레이션": 184, "이산 k제곱근": 185, "다중 대입값 계산": 186, "차분 공격": 187,

    "Mathematics": 1, "Implementation": 2, "Dynamic Programming": 3, "Graph Theory": 4,
    "Data Structures": 5, "String": 6, "Greedy": 7, "Bruteforcing": 8,
    "Graph Traversal": 9, "Sorting": 10, "Number Theory": 11, "Tree": 12,
    "Segment Tree": 13, "Geometry": 14, "Binary Search": 15, "Breadth-first Search": 16,
    "Arithmetic": 17, "Simulation": 18, "Depth-first Search": 19, "Combinatorics": 20,
    "Ad-hoc": 21, "Prefix Sum": 22, "Constructive": 23, "Case Work": 24, "Bitmask": 25,
    "Dijkstra's": 26, "Parsing": 27, "Disjoint Set": 28, "Backtracking": 29,
    "Divide And Conquer": 30, "Sweeping": 31, "Set / Map By Hashing": 32,
    "Set / Map By Trees": 33, "Priority Queue": 34, "Dynamic Programming On Trees": 35,
    "Stack": 36, "Two-pointer": 37, "Primality Test": 38, "Maximum Flow": 39,
    "Segment Tree With Lazy Propagation": 40, "Game Theory": 41,
    "Dynamic Programming Using Bitfield": 42, "Arbitrary Precision / Big Integers": 43,
    "Exponentiation By Squaring": 44, "Offline Queries": 45, "Recursion": 46,
    "Probability Theory": 47, "Sieve Of Eratosthenes": 48, "Parametric Search": 49,
    "Minimum Spanning Tree": 50, "Bipartite Matching": 51, "Knapsack": 52,
    "Lowest Common Ancestor": 53, "Precomputation": 54, "Hashing": 55,
    "Topological Sorting": 56, "Value / Coordinate Compression": 57,
    "Euclidean Algorithm": 58, "Strongly Connected Component": 59, "Floyd-warshall": 60,
    "Inclusion And Exclusion": 61, "Convex Hull": 62, "Linear Algebra": 63, "Trie": 64,
    "Sparse Table": 65, "Fast Fourier Transform": 66, "Suffix ARray And Lcp Array": 67,
    "Square Root Decomposition": 68, "Smaller To Larger Technique": 69,
    "Convex Hull Trick": 70, "Knuth-morris-pratt": 71, "Sliding Window": 72,
    "Minimum Cost Maximum Flow": 73, "Meet In The Middle": 74, "Deque": 75,
    "Randomization": 76, "Calculus": 77, "Heavy-light Decomposition": 78,
    "Geometry; 3d": 79, "Sprague-grundy Theorem": 80, "Euler Tour Technique": 81,
    "Longest Increasing Sequence In O(n Log N)": 82, "Line Segment Intersection Check": 83,
    "Centroid": 84, "Centroid Decomposition": 85, "Articulation Points And Bridges": 86,
    "Max-flow Min-cut Theorem": 87, "Gaussian Elimination": 88, "Pythagoras Theorem": 90,
    "Ternary Search": 91, "Permutation Cycle Decomposition": 92, "Eulerian Path / Circuit": 93,
    "Queue": 94, "Bit Set": 95, "Persistent Segment Tree": 96, "Heuristics": 97, "Cactus": 98,
    "Physics": 99, "Chinese Remainder Theorem": 100, "Biconnected Component": 101, "Mo's": 102,
    "Splay Tree": 103, "Fermat's Little Theorem": 104, "Extended Euclidean Algorithm": 105,
    "Modular Multiplicative Inverse": 106, "Divide And Conquer Optimization": 107,
    "0-1 Bfs": 108, "Bellman–ford": 109, "Planar Graph": 110, "Aho-corasick": 111,
    "Euler Totient Function": 112, "Parallel Binary Search": 113,
    "Multidimensional Segment Tree": 114, "Merge Sort Tree": 115,
    "Euler Characteristic (χ=v-e+f)": 116, "Linearity Of Expectation": 117,
    "Berlekamp–massey": 118, "Point In Convex Polygon Check": 119, "Linked List": 120,
    "Link/cut Tree": 121, "Regular Expression": 122, "Rabin–karp": 123,
    "Rotating Calipers": 124, "Travelling Salesman Problem": 125, "Area Of A Polygon": 126,
    "Dynamic Programming Using A Deque": 127, "Manacher's": 128,
    "Dynamic Programming Using Connection Profile": 129, "Möbius Inversion": 130,
    "Slope Trick": 131, "Tree Isomorphism": 132, "Aliens Trick": 133, "Miller–rabin": 134,
    "Numerical Analysis": 135, "Offline Dynamic Connectivity": 136, "Hall's Theorem": 137,
    "Interpreter": 138, "Pollard Rho": 139, "Bipartite Graph": 140, "Linear Programming": 141,
    "Dual Graph": 142, "Pigeonhole Principle": 143, "Point In Non-convex Polygon Check": 144,
    "Lucas Theorem": 145, "Duality": 146, "Matroid": 147, "Voronoi Diagram": 148,
    "Burnside's Lemma": 149, "Kitamasa": 150, "Knuth Optimization": 151, "Hungarian": 152,
    "Discrete Logarithm": 153, "General Matching": 154, "Minimum Enclosing Circle": 155,
    "Z": 156, "Statistics": 157, "Dominator Tree": 158, "Monotone Queue Optimization": 159,
    "Palindrome Tree": 160, "Stable Marriage Problem": 161, "Simulated Annealing": 162,
    "Bidirectional Search": 163, "Half Plane Intersection": 164, "Rope": 165,
    "Stoer–wagner": 166, "Hirschberg's": 167, "Discrete Square Root": 168,
    "Geometry; Hyperdimensional": 169, "Suffix Tree": 170, "Directed Minimum Spanning Tree": 171,
    "Bayes Theorem": 172, "Green's Theorem": 173, "Pick's Theorem": 174, "Knuth's X": 175,
    "Top Tree": 176, "Dancing Links": 177, "Boyer–moore Majority Vote": 178,
    "Tree Compression": 179, "Generating Function": 180, "A*": 181, "Red-black Tree": 182,
    "Delaunay Triangulation": 183, "Circulation": 184, "Discrete k-th Root": 185,
    "Multipoint Evaluation": 186, "Differential Cryptanalysis": 187
}


const resetSettings = {
    'predict': 'click',
    'lock': 'click',
    'theme': 'no',
    'font': 'none'
};

let allKnow = true;
let isLocked = false;

function setData(key, value) {
    chrome.storage.sync.set({ [key]: value }, () => { console.log('ok') });
}

function getProblemNo() {
    const wholePath = location.href;
    const no = (wholePath.match(/(?<=https:\/\/www.acmicpc.net\/problem\/)[0-9]+(?=.*)/) || [-1])[0];

    return parseInt(no);
}

function setTimer(expire) {
    console.log("Lock Timer Set", expire);

    const spoilerBtn = document.querySelector('.show-spoiler');
    let now, left, displayText;
    isLocked = true;

    try {
        const timer = setInterval(() => {
            now = new Date().getTime();
            left = expire - now;

            if (left < 0 || !isLocked) {
                spoilerBtn.innerText = '보기';
                clearInterval(timer);
                isLocked = false;
                return;
            }

            const leftHours = Math.floor(left / 3600000);
            const leftMinutes = ((Math.floor(left / 60000) % 60 >= 10) ? '' : '0') + Math.floor(left / 60000) % 60;
            const leftSeconds = ((Math.floor(left / 1000) % 60 >= 10) ? '' : '0') + Math.floor(left / 1000) % 60;
            displayText = `잠김 (🔒︎${leftHours}:${leftMinutes}:${leftSeconds} 후 보기 가능)`;
            spoilerBtn.innerText = displayText;
        }, 100);
    }
    catch (e) { return; }
}

function createPopup() {
    const knowImagePath = chrome.runtime.getURL('images/know.png');
    const popup = document.createElement('div');

    popup.className = 'ttj-popup';

    popup.innerHTML = `
        <img id="ttj-result-image" src="${knowImagePath}" />
        <div id="ttj-result-text">이 문제는 알고 있는 알고리즘만을<br />이용하여 풀 수 있습니다.</div>
    `;

    document.querySelector('body').appendChild(popup);
}

function createWidget() {
    let widget = document.createElement('div');
    widget.className = 'ttj-widget';

    widget.innerHTML = `
        <div class="ttj-dropdown-menu" id="ttj-dropdown-menu">
            <div class="ttj-menu-item ttj-option-btn" id="ttj-optionbtn">
                <img class="ttj-menu-image" src="${chrome.runtime.getURL('images/options.png')}" />
            </div>
            <div class="ttj-menu-item" id="ttj-themebtn">
                <img class="ttj-menu-image" src="${chrome.runtime.getURL('images/theme.png')}" />
            </div>
            <div class="ttj-menu-item" id="ttj-checkbtn">
                <img class="ttj-menu-image" id="ttj-checkimg" src="${chrome.runtime.getURL('images/check.png')}" />
            </div>
            <div class="ttj-menu-item" id="ttj-lockbtn">
                <img class="ttj-menu-image" src="${chrome.runtime.getURL('images/lock.png')}" />
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
            menu.style.height = '40px';
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

function createThemeButtonListener() {
    const themeBtn = document.querySelector('#ttj-themebtn');
    const html = document.querySelector('html');
    themeBtn.addEventListener('click', () => {
        chrome.storage.sync.get('settings', (loaded) => {
            loaded = loaded['settings'];

            if (loaded === undefined || Object.values(loaded).indexOf(undefined) !== -1)
                loaded = resetSettings;

            if (loaded.theme === 'yes') {
                html.setAttribute('totamjung', 'off');
                chrome.runtime.sendMessage({ msg: 'themeOff' });
            }
            else {
                html.setAttribute('totamjung', 'on');
                chrome.runtime.sendMessage({ msg: 'themeOn' });
            }
        });
    });
}

function createCheckButtonListener() {
    const checkBtn = document.querySelector('#ttj-checkbtn');
    const checkImg = document.querySelector('#ttj-checkimg');
    const spoilerBtn = document.querySelector('.show-spoiler');
    const algorithmElementList = document.querySelectorAll('.spoiler-link');

    const popup = document.querySelector('.ttj-popup');
    const popupImage = document.querySelector('#ttj-result-image');
    const popupText = document.querySelector('#ttj-result-text');

    const knowImagePath = chrome.runtime.getURL('images/know.png');
    const dontKnowImagePath = chrome.runtime.getURL('images/dontknow.png');

    const problemTitle = document.querySelector('#problem_title');

    const knowIcon = document.createElement('img');
    knowIcon.src = knowImagePath;
    knowIcon.classList.add('ttj-result-icon');

    const dontKnowIcon = document.createElement('img');
    dontKnowIcon.src = dontKnowImagePath;
    dontKnowIcon.classList.add('ttj-result-icon');

    let allKnow = true;

    console.log("Spoiler: ", spoilerBtn);
    if (!spoilerBtn) {
        checkBtn.classList.add('disabled');
        return;
    }

    chrome.storage.sync.get(['algorithm'], (loaded) => {
        const knowAlgorithm = new Set(loaded['algorithm'] || []);

        for (let i = 0; i < algorithmElementList.length; i++) {
            if (!knowAlgorithm.has(algorithmToId[algorithmElementList[i].innerText])) {
                allKnow = false;
                break;
            }
        }
    });

    checkBtn.addEventListener('click', () => {
        if ([...checkBtn.classList].includes('disabled'))
            return;

        checkBtn.classList.add('disabled');
        if (allKnow) {
            console.log("Know!");
            checkImg.src = knowImagePath;
            problemTitle.after(knowIcon);
        }
        else {
            console.log("Don't Know!");
            checkImg.src = dontKnowImagePath;
            problemTitle.after(dontKnowIcon);
            popupImage.src = dontKnowImagePath;
            popupText.innerHTML = '이 문제를 풀기 위해 아직 모르는<br />알고리즘을 이용해야 할 수 있습니다.';
        }

        popup.style.left = '20px';
        setTimeout(() => {
            popup.style.left = '-310px';
        }, 2000);
    });

    chrome.storage.sync.get(['settings'], (loaded) => {
        loaded = loaded.settings;

        if (loaded !== undefined && loaded.predict === 'always') {
            popup.style.display = 'none';
            checkBtn.click();
        }
    });
}

function createLockButtonListener() {
    const checkBtn = document.querySelector('#ttj-checkbtn');
    const lockBtn = document.querySelector('#ttj-lockbtn');
    const spoilerBtn = document.querySelector('.show-spoiler');
    const algorithmElementCore = document.querySelector('.spoiler');
    const algorithmElementList = document.querySelectorAll('.spoiler-link');

    chrome.storage.sync.get(['algorithm'], (loaded) => {
        const knowAlgorithm = new Set(loaded['algorithm'] || []);

        algorithmElementList.forEach((tag, i) => {
            if (!knowAlgorithm.has(algorithmToId[algorithmElementList[i].innerText])) {
                tag.style.fontWeight = 800;
                tag.innerText = tag.innerText + ' ⚠️';
            }
        });
    });

    if (!spoilerBtn) {
        lockBtn.classList.add('disabled');
        return;
    }

    const newBtn = spoilerBtn.cloneNode(true);
    spoilerBtn.after(newBtn);
    spoilerBtn.remove();

    chrome.storage.sync.get(['timer', 'settings'], (loaded) => {
        const timer = loaded['timer'];
        const settings = loaded['settings'];

        if (timer === undefined || settings === undefined)
            return;

        const now = new Date().getTime();
        const expire = timer.expire;

        if (now >= expire || getProblemNo() !== timer.problem)
            return;

        console.log(now, expire);

        setTimer(expire);
    });

    newBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (algorithmElementList && ![...lockBtn.classList].includes('disabled') && isLocked === false) {
            newBtn.style.display = 'none';
            console.log(algorithmElementList, algorithmElementList.parentNode);
            algorithmElementCore.style.display = 'block';

            checkBtn.classList.add('disabled');
            lockBtn.classList.add('disabled');
        }
    });

    lockBtn.addEventListener('click', () => {
        if ([...lockBtn.classList].includes('disabled'))
            return;

        if (!isLocked) {
            chrome.storage.sync.get(['timer'], (loaded) => {
                loaded = loaded.timer;
                if (loaded === undefined)
                    return;

                console.log("Will Send Msg Settimer");
                chrome.runtime.sendMessage({ msg: 'setTimer' }, (response) => {
                    setTimer(response);
                });
            });
        }
        else {
            isLocked = false;
            chrome.runtime.sendMessage({ msg: 'deleteTimer' });
        }
    });

    chrome.storage.sync.get(['settings', 'timer'], (loaded) => {
        const settings = loaded.settings;
        const timer = loaded.timer;

        const now = new Date().getTime();
        const expire = timer.expire;
        console.log("Prob", getProblemNo(), timer.problem);
        if (loaded !== undefined && settings.lock === 'always' && (now >= expire || getProblemNo() !== timer.problem)) {
            console.log("Query:", now >= expire, getProblemNo() !== timer.problem)

            console.log("Lock Button Automatically Clicked");
            lockBtn.click();
        }

    });
}

function applyFont() {
    console.log('start');
    if (getProblemNo() === -1)
        return;

    chrome.storage.sync.get('settings', (loaded) => {
        loaded = loaded['settings'];
        if (loaded === undefined) return;

        const target = document.querySelector('#problem-body');
        const font = (loaded.font) || 'none';

        target.classList.remove(...target.classList);
        target.classList.add(font);

        console.log('end');
    });
}

window.onload = () => {
    applyFont();
    createPopup();
    createWidget();
    createTopButtonListener();
    createOptionButtonListener();
    createThemeButtonListener();
    createCheckButtonListener();
    createLockButtonListener();
}
