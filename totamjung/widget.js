const algorithmToId = {
    "수학": 1,
    "구현": 2,
    "다이나믹 프로그래밍": 3,
    "그래프 이론": 4,
    "자료 구조": 5,
    "문자열": 6,
    "그리디 알고리즘": 7,
    "브루트포스 알고리즘": 8,
    "그래프 탐색": 9,
    "정렬": 10,
    "정수론": 11,
    "트리": 12,
    "세그먼트 트리": 13,
    "기하학": 14,
    "이분 탐색": 15,
    "너비 우선 탐색": 16,
    "사칙연산": 17,
    "시뮬레이션": 18,
    "깊이 우선 탐색": 19,
    "조합론": 20,
    "애드 혹": 21,
    "누적 합": 22,
    "구성적": 23,
    "많은 조건 분기": 24,
    "비트마스킹": 25,
    "다익스트라": 26,
    "파싱": 27,
    "분리 집합": 28,
    "백트래킹": 29,
    "분할 정복": 30,
    "스위핑": 31,
    "해시를 사용한 집합과 맵": 32,
    "트리를 사용한 집합과 맵": 33,
    "우선순위 큐": 34,
    "트리에서의 다이나믹 프로그래밍": 35,
    "스택": 36,
    "두 포인터": 37,
    "소수 판정": 38,
    "최대 유량": 39,
    "느리게 갱신되는 세그먼트 트리": 40,
    "게임 이론": 41,
    "비트필드를 이용한 다이나믹 프로그래밍": 42,
    "임의 정밀도 / 큰 수 연산": 43,
    "분할 정복을 이용한 거듭제곱": 44,
    "오프라인 쿼리": 45,
    "재귀": 46,
    "확률론": 47,
    "에라토스테네스의 체": 48,
    "매개 변수 탐색": 49,
    "최소 스패닝 트리": 50,
    "이분 매칭": 51,
    "배낭 문제": 52,
    "최소 공통 조상": 53,
    "런타임 전의 전처리": 54,
    "해싱": 55,
    "위상 정렬": 56,
    "값 / 좌표 압축": 57,
    "유클리드 호제법": 58,
    "강한 연결 요소": 59,
    "플로이드-와샬": 60,
    "포함 배제의 원리": 61,
    "볼록 껍질": 62,
    "선형대수학": 63,
    "트라이": 64,
    "희소 배열": 65,
    "고속 푸리에 변환": 66,
    "접미사 배열과 LCP 배열": 67,
    "제곱근 분할법": 68,
    "작은 집합에서 큰 집합으로 합치는 테크닉": 69,
    "볼록 껍질을 이용한 최적화": 70,
    "KMP": 71,
    "슬라이딩 윈도우": 72,
    "최소 비용 최대 유량": 73,
    "중간에서 만나기": 74,
    "덱": 75,
    "무작위화": 76,
    "미적분학": 77,
    "Heavy-light 분할": 78,
    "3차원 기하학": 79,
    "스프라그-그런디 정리": 80,
    "오일러 경로 테크닉": 81,
    "가장 긴 증가하는 부분 수열: O(n log n)": 82,
    "선분 교차 판정": 83,
    "센트로이드": 84,
    "센트로이드 분할": 85,
    "단절점과 단절선": 86,
    "최대 유량 최소 컷 정리": 87,
    "가우스 소거법": 88,
    "2-sat": 89,
    "피타고라스 정리": 90,
    "삼분 탐색": 91,
    "순열 사이클 분할": 92,
    "오일러 경로": 93,
    "큐": 94,
    "비트 집합": 95,
    "퍼시스턴트 세그먼트 트리": 96,
    "휴리스틱": 97,
    "선인장": 98,
    "물리학": 99,
    "중국인의 나머지 정리": 100,
    "이중 연결 요소": 101,
    "mo's": 102,
    "스플레이 트리": 103,
    "페르마의 소정리": 104,
    "확장 유클리드 호제법": 105,
    "모듈로 곱셈 역원": 106,
    "분할 정복을 사용한 최적화": 107,
    "0-1 너비 우선 탐색": 108,
    "벨만-포드": 109,
    "평면 그래프": 110,
    "아호-코라식": 111,
    "오일러 피 함수": 112,
    "병렬 이분 탐색": 113,
    "다차원 세그먼트 트리": 114,
    "머지 소트 트리": 115,
    "오일러 지표 (χ=V-E+F)": 116,
    "기댓값의 선형성": 117,
    "벌래캠프-매시": 118,
    "볼록 다각형 내부의 점 판정": 119,
    "연결 리스트": 120,
    "링크/컷 트리": 121,
    "정규 표현식": 122,
    "라빈-카프": 123,
    "회전하는 캘리퍼스": 124,
    "외판원 순회 문제": 125,
    "다각형의 넓이": 126,
    "덱을 이용한 다이나믹 프로그래밍": 127,
    "매내처": 128,
    "커넥션 프로파일을 이용한 다이나믹 프로그래밍": 129,
    "뫼비우스 반전 공식": 130,
    "함수 개형을 이용한 최적화": 131,
    "트리 동형 사상": 132,
    "Aliens 트릭": 133,
    "밀러-라빈 소수 판별법": 134,
    "수치해석": 135,
    "오프라인 동적 연결성 판정": 136,
    "홀의 결혼 정리": 137,
    "인터프리터": 138,
    "폴라드 로": 139,
    "이분 그래프": 140,
    "선형 계획법": 141,
    "쌍대 그래프": 142,
    "비둘기집 원리": 143,
    "오목 다각형 내부의 점 판정": 144,
    "뤼카 정리": 145,
    "쌍대성": 146,
    "매트로이드": 147,
    "보로노이 다이어그램": 148,
    "번사이드 보조정리": 149,
    "키타마사": 150,
    "크누스 최적화": 151,
    "헝가리안": 152,
    "이산 로그": 153,
    "일반적인 매칭": 154,
    "최소 외접원": 155,
    "z": 156,
    "통계학": 157,
    "도미네이터 트리": 158,
    "단조 큐를 이용한 최적화": 159,
    "회문 트리": 160,
    "안정 결혼 문제": 161,
    "담금질 기법": 162,
    "양방향 탐색": 163,
    "반평면 교집합": 164,
    "로프": 165,
    "스토어-바그너": 166,
    "히르쉬버그": 167,
    "이산 제곱근": 168,
    "4차원 이상의 기하학": 169,
    "접미사 트리": 170,
    "유향 최소 신장 트리": 171,
    "베이즈 정리": 172,
    "그린 정리": 173,
    "픽의 정리": 174,
    "크누스 X": 175,
    "탑 트리": 176,
    "춤추는 링크": 177,
    "보이어-무어 다수결 투표": 178,
    "트리 압축": 179,
    "생성 함수": 180,
    "a*": 181,
    "레드-블랙 트리": 182,
    "델로네 삼각분할": 183,
    "서큘레이션": 184,
    "이산 k제곱근": 185,
    "다중 대입값 계산": 186,
    "차분 공격": 187,
}

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