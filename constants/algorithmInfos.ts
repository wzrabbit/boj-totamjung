import { AlgorithmInfo } from '@/types/algorithm';

export const ALGORITHM_INFOS: Readonly<AlgorithmInfo[]> = [
  {
    id: 1,
    name: '수학',
    englishName: 'Mathematics',
    tag: 'math',
    alias: ['수학시러', '수학싫어'],
  },
  {
    id: 2,
    name: '구현',
    englishName: 'Implementation',
    tag: 'implementation',
    alias: ['빡구현', '코딩시러', '코딩싫어'],
  },
  {
    id: 3,
    name: '다이나믹 프로그래밍',
    englishName: 'Dynamic Programming',
    tag: 'dp',
    alias: ['동적 계획법', '디피'],
  },
  {
    id: 4,
    name: '그래프 이론',
    englishName: 'Graph Theory',
    tag: 'graphs',
    alias: [],
  },
  {
    id: 5,
    name: '자료 구조',
    englishName: 'Data Structures',
    tag: 'data_structures',
    alias: ['자구'],
  },
  { id: 6, name: '문자열', englishName: 'String', tag: 'string', alias: [] },
  {
    id: 7,
    name: '그리디 알고리즘',
    englishName: 'Greedy',
    tag: 'greedy',
    alias: ['탐욕법', '탐욕 알고리즘', '욕심쟁이 알고리즘', '애구그'],
  },
  {
    id: 8,
    name: '브루트포스 알고리즘',
    englishName: 'Bruteforcing',
    tag: 'bruteforcing',
    alias: ['brute force', '무차별 대입', '무작위 대입'],
  },
  {
    id: 9,
    name: '그래프 탐색',
    englishName: 'Graph Traversal',
    tag: 'graph_traversal',
    alias: [],
  },
  {
    id: 10,
    name: '정렬',
    englishName: 'Sorting',
    tag: 'sorting',
    alias: ['소트', '소팅'],
  },
  {
    id: 11,
    name: '정수론',
    englishName: 'Number Theory',
    tag: 'number_theory',
    alias: ['수학'],
  },
  {
    id: 12,
    name: '트리',
    englishName: 'Tree',
    tag: 'trees',
    alias: ['tree', '나무'],
  },
  {
    id: 13,
    name: '세그먼트 트리',
    englishName: 'Segment Tree',
    tag: 'segtree',
    alias: ['세그트리', 'segment tree', '어쩔세그'],
  },
  {
    id: 14,
    name: '기하학',
    englishName: 'Geometry',
    tag: 'geometry',
    alias: ['기하싫어', '기하시러'],
  },
  {
    id: 15,
    name: '이분 탐색',
    englishName: 'Binary Search',
    tag: 'binary_search',
    alias: ['바이너리 서치', '이진 탐색'],
  },
  {
    id: 16,
    name: '너비 우선 탐색',
    englishName: 'Breadth-first Search',
    tag: 'bfs',
    alias: [],
  },
  {
    id: 17,
    name: '사칙연산',
    englishName: 'Arithmetic',
    tag: 'arithmetic',
    alias: [],
  },
  {
    id: 18,
    name: '시뮬레이션',
    englishName: 'Simulation',
    tag: 'simulation',
    alias: [],
  },
  {
    id: 19,
    name: '깊이 우선 탐색',
    englishName: 'Depth-first Search',
    tag: 'dfs',
    alias: [],
  },
  {
    id: 20,
    name: '조합론',
    englishName: 'Combinatorics',
    tag: 'combinatorics',
    alias: [],
  },
  {
    id: 21,
    name: '애드 혹',
    englishName: 'Ad-hoc',
    tag: 'ad_hoc',
    alias: ['애드 훅, 애구그'],
  },
  {
    id: 22,
    name: '누적 합',
    englishName: 'Prefix Sum',
    tag: 'prefix_sum',
    alias: ['cumulative sum', '프리픽스 썸', '프리픽스 섬', 'imos'],
  },
  {
    id: 23,
    name: '해 구성하기',
    englishName: 'Constructive',
    tag: 'constructive',
    alias: ['구성적', '애구그'],
  },
  {
    id: 24,
    name: '많은 조건 분기',
    englishName: 'Case Work',
    tag: 'case_work',
    alias: ['케이스 워크, 케이스 웍, 케웍, 많조분'],
  },
  {
    id: 25,
    name: '비트마스킹',
    englishName: 'Bitmask',
    tag: 'bitmask',
    alias: [],
  },
  {
    id: 26,
    name: '데이크스트라',
    englishName: "Dijkstra's",
    tag: 'dijkstra',
    alias: ['다익스트라'],
  },
  {
    id: 27,
    name: '파싱',
    englishName: 'Parsing',
    tag: 'parsing',
    alias: ['parse'],
  },
  {
    id: 28,
    name: '분리 집합',
    englishName: 'Disjoint Set',
    tag: 'disjoint_set',
    alias: [
      'union find',
      '유니온 파인드',
      '유파',
      '크루스칼 알고리즘',
      '프림 알고리즘',
    ],
  },
  {
    id: 29,
    name: '백트래킹',
    englishName: 'Backtracking',
    tag: 'backtracking',
    alias: ['되추적 알고리즘', '가지치기'],
  },
  {
    id: 30,
    name: '분할 정복',
    englishName: 'Divide And Conquer',
    tag: 'divide_and_conquer',
    alias: [],
  },
  {
    id: 31,
    name: '스위핑',
    englishName: 'Sweeping',
    tag: 'sweeping',
    alias: [],
  },
  {
    id: 32,
    name: '해시를 사용한 집합과 맵',
    englishName: 'Set / Map By Hashing',
    tag: 'hash_set',
    alias: [
      '해쉬맵',
      '해쉬셋',
      '해시맵',
      '해시셋',
      '해쉬를 사용한 집합과 맵',
      '해시를 이용한 집합과 맵',
      '해쉬를 이용한 집합과 맵',
    ],
  },
  {
    id: 33,
    name: '트리를 사용한 집합과 맵',
    englishName: 'Set / Map By Trees',
    tag: 'tree_set',
    alias: ['트리맵', '트리셋', '트리를 사용한 집합과 맵'],
  },
  {
    id: 34,
    name: '우선순위 큐',
    englishName: 'Priority Queue',
    tag: 'priority_queue',
    alias: ['힙', 'heap', 'pq', '우큐'],
  },
  {
    id: 35,
    name: '트리에서의 다이나믹 프로그래밍',
    englishName: 'Dynamic Programming On Trees',
    tag: 'dp_tree',
    alias: ['트리 디피', 'tree dp'],
  },
  { id: 36, name: '스택', englishName: 'Stack', tag: 'stack', alias: [] },
  {
    id: 37,
    name: '두 포인터',
    englishName: 'Two-pointer',
    tag: 'two_pointer',
    alias: ['투 포인터'],
  },
  {
    id: 38,
    name: '소수 판정',
    englishName: 'Primality Test',
    tag: 'primality_test',
    alias: [],
  },
  {
    id: 39,
    name: '최대 유량',
    englishName: 'Maximum Flow',
    tag: 'flow',
    alias: ['플로우', '네트워크 플로우', 'network flow'],
  },
  {
    id: 40,
    name: '느리게 갱신되는 세그먼트 트리',
    englishName: 'Segment Tree With Lazy Propagation',
    tag: 'lazyprop',
    alias: ['lazy propagation', '레이지 세그', '느갱세'],
  },
  {
    id: 41,
    name: '게임 이론',
    englishName: 'Game Theory',
    tag: 'game_theory',
    alias: [],
  },
  {
    id: 42,
    name: '비트필드를 이용한 다이나믹 프로그래밍',
    englishName: 'Dynamic Programming Using Bitfield',
    tag: 'dp_bitfield',
    alias: ['비트 dp', 'bit dp', 'bitfield dp', '비트 디피'],
  },
  {
    id: 43,
    name: '임의 정밀도 / 큰 수 연산',
    englishName: 'Arbitrary Precision / Big Integers',
    tag: 'arbitrary_precision',
    alias: [],
  },
  {
    id: 44,
    name: '분할 정복을 이용한 거듭제곱',
    englishName: 'Exponentiation By Squaring',
    tag: 'exponentiation_by_squaring',
    alias: ['분할 거듭 제곱'],
  },
  {
    id: 45,
    name: '오프라인 쿼리',
    englishName: 'Offline Queries',
    tag: 'offline_queries',
    alias: [],
  },
  {
    id: 46,
    name: '재귀',
    englishName: 'Recursion',
    tag: 'recursion',
    alias: ['recursive'],
  },
  {
    id: 47,
    name: '확률론',
    englishName: 'Probability Theory',
    tag: 'probability',
    alias: [],
  },
  {
    id: 48,
    name: '에라토스테네스의 체',
    englishName: 'Sieve Of Eratosthenes',
    tag: 'sieve',
    alias: ['에테체', '에라체'],
  },
  {
    id: 49,
    name: '매개 변수 탐색',
    englishName: 'Parametric Search',
    tag: 'parametric_search',
    alias: ['파라메트릭 서치'],
  },
  {
    id: 50,
    name: '최소 스패닝 트리',
    englishName: 'Minimum Spanning Tree',
    tag: 'mst',
    alias: ['minimum spanning tree', '최소 신장 트리'],
  },
  {
    id: 51,
    name: '이분 매칭',
    englishName: 'Bipartite Matching',
    tag: 'bipartite_matching',
    alias: [],
  },
  {
    id: 52,
    name: '배낭 문제',
    englishName: 'Knapsack',
    tag: 'knapsack',
    alias: ['냅색'],
  },
  {
    id: 53,
    name: '최소 공통 조상',
    englishName: 'Lowest Common Ancestor',
    tag: 'lca',
    alias: ['lowest common ancestor'],
  },
  {
    id: 54,
    name: '런타임 전의 전처리',
    englishName: 'Precomputation',
    tag: 'precomputation',
    alias: [],
  },
  { id: 55, name: '해싱', englishName: 'Hashing', tag: 'hashing', alias: [] },
  {
    id: 56,
    name: '위상 정렬',
    englishName: 'Topological Sorting',
    tag: 'topological_sorting',
    alias: [],
  },
  {
    id: 57,
    name: '값 / 좌표 압축',
    englishName: 'Value / Coordinate Compression',
    tag: 'coordinate_compression',
    alias: [],
  },
  {
    id: 58,
    name: '유클리드 호제법',
    englishName: 'Euclidean Algorithm',
    tag: 'euclidean',
    alias: ['gcd'],
  },
  {
    id: 59,
    name: '강한 연결 요소',
    englishName: 'Strongly Connected Component',
    tag: 'scc',
    alias: ['strongly connected components'],
  },
  {
    id: 60,
    name: '플로이드-워셜',
    englishName: 'Floyd-warshall',
    tag: 'floyd_warshall',
    alias: ['플로이드-와샬'],
  },
  {
    id: 61,
    name: '포함 배제의 원리',
    englishName: 'Inclusion And Exclusion',
    tag: 'inclusion_and_exclusion',
    alias: ['포배제'],
  },
  {
    id: 62,
    name: '볼록 껍질',
    englishName: 'Convex Hull',
    tag: 'convex_hull',
    alias: ['컨벡스 헐', '컨백스 헐'],
  },
  {
    id: 63,
    name: '선형대수학',
    englishName: 'Linear Algebra',
    tag: 'linear_algebra',
    alias: [],
  },
  { id: 64, name: '트라이', englishName: 'Trie', tag: 'trie', alias: [] },
  {
    id: 65,
    name: '희소 배열',
    englishName: 'Sparse Table',
    tag: 'sparse_table',
    alias: ['스파스 테이블'],
  },
  {
    id: 66,
    name: '고속 푸리에 변환',
    englishName: 'Fast Fourier Transform',
    tag: 'fft',
    alias: ['어쩔FFT'],
  },
  {
    id: 67,
    name: '접미사 배열과 lcp 배열',
    englishName: 'Suffix ARray And Lcp Array',
    tag: 'suffix_array',
    alias: ['서픽스 어레이'],
  },
  {
    id: 68,
    name: '제곱근 분할법',
    englishName: 'Square Root Decomposition',
    tag: 'sqrt_decomposition',
    alias: [],
  },
  {
    id: 69,
    name: '작은 집합에서 큰 집합으로 합치는 테크닉',
    englishName: 'Smaller To Larger Technique',
    tag: 'smaller_to_larger',
    alias: [],
  },
  {
    id: 70,
    name: '볼록 껍질을 이용한 최적화',
    englishName: 'Convex Hull Trick',
    tag: 'cht',
    alias: ['convex hull trick'],
  },
  {
    id: 71,
    name: 'kmp',
    englishName: 'Knuth-morris-pratt',
    tag: 'kmp',
    alias: [],
  },
  {
    id: 72,
    name: '슬라이딩 윈도우',
    englishName: 'Sliding Window',
    tag: 'sliding_window',
    alias: [],
  },
  {
    id: 73,
    name: '최소 비용 최대 유량',
    englishName: 'Minimum Cost Maximum Flow',
    tag: 'mcmf',
    alias: ['Minimum Cost Maximum Flow'],
  },
  {
    id: 74,
    name: '중간에서 만나기',
    englishName: 'Meet In The Middle',
    tag: 'mitm',
    alias: ['meet in the middle', '밋 인더 미들'],
  },
  {
    id: 75,
    name: '덱',
    englishName: 'Deque',
    tag: 'deque',
    alias: ['데크', '대크', '데큐', '대큐', '댁'],
  },
  {
    id: 76,
    name: '무작위화',
    englishName: 'Randomization',
    tag: 'randomization',
    alias: ['랜덤'],
  },
  {
    id: 77,
    name: '미적분학',
    englishName: 'Calculus',
    tag: 'calculus',
    alias: [],
  },
  {
    id: 78,
    name: 'heavy-light 분할',
    englishName: 'Heavy-light Decomposition',
    tag: 'hld',
    alias: ['어쩔HLD', 'heavy light decomposition', '흐르드'],
  },
  {
    id: 79,
    name: '3차원 기하학',
    englishName: 'Geometry; 3d',
    tag: 'geometry_3d',
    alias: [],
  },
  {
    id: 80,
    name: '스프라그-그런디 정리',
    englishName: 'Sprague-grundy Theorem',
    tag: 'sprague_grundy',
    alias: [],
  },
  {
    id: 81,
    name: '오일러 경로 테크닉',
    englishName: 'Euler Tour Technique',
    tag: 'euler_tour_technique',
    alias: [],
  },
  {
    id: 82,
    name: '가장 긴 증가하는 부분 수열 문제',
    englishName: 'Longest Increasing Sequence Problem',
    tag: 'lis',
    alias: [],
  },
  {
    id: 83,
    name: '선분 교차 판정',
    englishName: 'Line Segment Intersection Check',
    tag: 'line_intersection',
    alias: [],
  },
  {
    id: 84,
    name: '센트로이드',
    englishName: 'Centroid',
    tag: 'centroid',
    alias: [],
  },
  {
    id: 85,
    name: '센트로이드 분할',
    englishName: 'Centroid Decomposition',
    tag: 'centroid_decomposition',
    alias: [],
  },
  {
    id: 86,
    name: '단절점과 단절선',
    englishName: 'Articulation Points And Bridges',
    tag: 'articulation',
    alias: [],
  },
  {
    id: 87,
    name: '최대 유량 최소 컷 정리',
    englishName: 'Max-flow Min-cut Theorem',
    tag: 'mcmf',
    alias: [],
  },
  {
    id: 88,
    name: '가우스 소거법',
    englishName: 'Gaussian Elimination',
    tag: 'gaussian_elimination',
    alias: [],
  },
  {
    id: 89,
    name: '2-sat',
    englishName: '2-sat',
    tag: '2_sat',
    alias: [],
  },
  {
    id: 90,
    name: '피타고라스 정리',
    englishName: 'Pythagoras Theorem',
    tag: 'pythagoras',
    alias: ['피타고라스의 정리'],
  },
  {
    id: 91,
    name: '삼분 탐색',
    englishName: 'Ternary Search',
    tag: 'ternary_search',
    alias: [],
  },
  {
    id: 92,
    name: '순열 사이클 분할',
    englishName: 'Permutation Cycle Decomposition',
    tag: 'permutation_cycle_decomposition',
    alias: [],
  },
  {
    id: 93,
    name: '오일러 경로',
    englishName: 'Eulerian Path / Circuit',
    tag: 'eulerian_path',
    alias: [],
  },
  { id: 94, name: '큐', englishName: 'Queue', tag: 'queue', alias: [] },
  {
    id: 95,
    name: '비트 집합',
    englishName: 'Bit Set',
    tag: 'bitset',
    alias: ['비트셋'],
  },
  {
    id: 96,
    name: '퍼시스턴트 세그먼트 트리',
    englishName: 'Persistent Segment Tree',
    tag: 'pst',
    alias: ['persistent segment tree'],
  },
  {
    id: 97,
    name: '휴리스틱',
    englishName: 'Heuristics',
    tag: 'heuristics',
    alias: [],
  },
  { id: 98, name: '선인장', englishName: 'Cactus', tag: 'cactus', alias: [] },
  { id: 99, name: '물리학', englishName: 'Physics', tag: 'physics', alias: [] },
  {
    id: 100,
    name: '중국인의 나머지 정리',
    englishName: 'Chinese Remainder Theorem',
    tag: 'crt',
    alias: ['chinese remainder theorem'],
  },
  {
    id: 101,
    name: '이중 연결 요소',
    englishName: 'Biconnected Component',
    tag: 'biconnected_component',
    alias: [],
  },
  {
    id: 102,
    name: "mo's",
    englishName: "Mo's",
    tag: 'mo',
    alias: ['모스', 'mos'],
  },
  {
    id: 103,
    name: '스플레이 트리',
    englishName: 'Splay Tree',
    tag: 'splay_tree',
    alias: [],
  },
  {
    id: 104,
    name: '페르마의 소정리',
    englishName: "Fermat's Little Theorem",
    tag: 'flt',
    alias: ["fermat's last theorem"],
  },
  {
    id: 105,
    name: '확장 유클리드 호제법',
    englishName: 'Extended Euclidean Algorithm',
    tag: 'extended_euclidean',
    alias: ['egcd', 'gcd'],
  },
  {
    id: 106,
    name: '모듈로 곱셈 역원',
    englishName: 'Modular Multiplicative Inverse',
    tag: 'modular_multiplicative_inverse',
    alias: [],
  },
  {
    id: 107,
    name: '분할 정복을 사용한 최적화',
    englishName: 'Divide And Conquer Optimization',
    tag: 'divide_and_conquer_optimization',
    alias: ['분할 정복을 이용한 최적화'],
  },
  {
    id: 108,
    name: '0-1 너비 우선 탐색',
    englishName: '0-1 Bfs',
    tag: '0_1_bfs',
    alias: [],
  },
  {
    id: 109,
    name: '벨만-포드',
    englishName: 'Bellman-ford',
    tag: 'bellman_ford',
    alias: [],
  },
  {
    id: 110,
    name: '평면 그래프',
    englishName: 'Planar Graph',
    tag: 'planar_graph',
    alias: [],
  },
  {
    id: 111,
    name: '아호-코라식',
    englishName: 'Aho-corasick',
    tag: 'aho_corasick',
    alias: [],
  },
  {
    id: 112,
    name: '오일러 피 함수',
    englishName: 'Euler Totient Function',
    tag: 'euler_phi',
    alias: ['euler pi'],
  },
  {
    id: 113,
    name: '병렬 이분 탐색',
    englishName: 'Parallel Binary Search',
    tag: 'pbs',
    alias: ['Parallel Binary Search'],
  },
  {
    id: 114,
    name: '다차원 세그먼트 트리',
    englishName: 'Multidimensional Segment Tree',
    tag: 'multi_segtree',
    alias: ['multi segment tree'],
  },
  {
    id: 115,
    name: '머지 소트 트리',
    englishName: 'Merge Sort Tree',
    tag: 'merge_sort_tree',
    alias: [],
  },
  {
    id: 116,
    name: '오일러 지표 (χ=V-E+F)',
    englishName: 'Euler Characteristic (χ=v-e+f)',
    tag: 'euler_characteristic',
    alias: [],
  },
  {
    id: 117,
    name: '기댓값의 선형성',
    englishName: 'Linearity Of Expectation',
    tag: 'linearity_of_expectation',
    alias: [],
  },
  {
    id: 118,
    name: '벌리캠프-매시',
    englishName: 'Berlekamp-massey',
    tag: 'berlekamp_massey',
    alias: ['벌레캠프-매시', '벌래캠프-매시', '벌리컴프-매시', '벌리캄프-매시'],
  },
  {
    id: 119,
    name: '볼록 다각형 내부의 점 판정',
    englishName: 'Point In Convex Polygon Check',
    tag: 'point_in_convex_polygon',
    alias: [],
  },
  {
    id: 120,
    name: '연결 리스트',
    englishName: 'Linked List',
    tag: 'linked_list',
    alias: [],
  },
  {
    id: 121,
    name: '링크/컷 트리',
    englishName: 'Link/cut Tree',
    tag: 'link_cut_tree',
    alias: ['링컷 트리'],
  },
  {
    id: 122,
    name: '정규 표현식',
    englishName: 'Regular Expression',
    tag: 'regex',
    alias: ['리잭스', '리젝스', '정규식', 'RegExp'],
  },
  {
    id: 123,
    name: '라빈-카프',
    englishName: 'Rabin-karp',
    tag: 'rabin_karp',
    alias: [],
  },
  {
    id: 124,
    name: '회전하는 캘리퍼스',
    englishName: 'Rotating Calipers',
    tag: 'rotating_calipers',
    alias: [],
  },
  {
    id: 125,
    name: '외판원 순회 문제',
    englishName: 'Travelling Salesman Problem',
    tag: 'tsp',
    alias: ['Traveling Salesman Problem'],
  },
  {
    id: 126,
    name: '다각형의 넓이',
    englishName: 'Area Of A Polygon',
    tag: 'polygon_area',
    alias: [],
  },
  {
    id: 127,
    name: '덱을 이용한 다이나믹 프로그래밍',
    englishName: 'Dynamic Programming Using A Deque',
    tag: 'dp_deque',
    alias: ['덱을 사용한 다이나믹 프로그래밍'],
  },
  {
    id: 128,
    name: '매내처',
    englishName: "Manacher's",
    tag: 'manacher',
    alias: ['마나커'],
  },
  {
    id: 129,
    name: '커넥션 프로파일을 이용한 다이나믹 프로그래밍',
    englishName: 'Dynamic Programming Using Connection Profile',
    tag: 'dp_connection_profile',
    alias: [],
  },
  {
    id: 130,
    name: '뫼비우스 반전 공식',
    englishName: 'Möbius Inversion',
    tag: 'mobius_inversion',
    alias: [],
  },
  {
    id: 131,
    name: '함수 개형을 이용한 최적화',
    englishName: 'Slope Trick',
    tag: 'slope_trick',
    alias: [],
  },
  {
    id: 132,
    name: '트리 동형 사상',
    englishName: 'Tree Isomorphism',
    tag: 'tree_isomorphism',
    alias: [],
  },
  {
    id: 133,
    name: 'aliens 트릭',
    englishName: 'Aliens Trick',
    tag: 'aliens',
    alias: ['외계인 트릭'],
  },
  {
    id: 134,
    name: '밀러-라빈 소수 판별법',
    englishName: 'Miller-rabin',
    tag: 'miller_rabin',
    alias: [],
  },
  {
    id: 135,
    name: '수치해석',
    englishName: 'Numerical Analysis',
    tag: 'numerical_analysis',
    alias: [],
  },
  {
    id: 136,
    name: '오프라인 동적 연결성 판정',
    englishName: 'Offline Dynamic Connectivity',
    tag: 'offline_dynamic_connectivity',
    alias: [],
  },
  {
    id: 137,
    name: '홀의 결혼 정리',
    englishName: "Hall's Theorem",
    tag: 'hall',
    alias: [],
  },
  {
    id: 138,
    name: '인터프리터',
    englishName: 'Interpreter',
    tag: 'interpreter',
    alias: [],
  },
  {
    id: 139,
    name: '폴라드 로',
    englishName: 'Pollard Rho',
    tag: 'pollard_rho',
    alias: [],
  },
  {
    id: 140,
    name: '이분 그래프',
    englishName: 'Bipartite Graph',
    tag: 'bipartite_graph',
    alias: [],
  },
  {
    id: 141,
    name: '선형 계획법',
    englishName: 'Linear Programming',
    tag: 'linear_programming',
    alias: [],
  },
  {
    id: 142,
    name: '쌍대 그래프',
    englishName: 'Dual Graph',
    tag: 'dual_graph',
    alias: [],
  },
  {
    id: 143,
    name: '비둘기집 원리',
    englishName: 'Pigeonhole Principle',
    tag: 'pigeonhole_principle',
    alias: [],
  },
  {
    id: 144,
    name: '오목 다각형 내부의 점 판정',
    englishName: 'Point In Non-convex Polygon Check',
    tag: 'point_in_non_convex_polygon',
    alias: [],
  },
  {
    id: 145,
    name: '뤼카 정리',
    englishName: 'Lucas Theorem',
    tag: 'lucas',
    alias: [],
  },
  {
    id: 146,
    name: '쌍대성',
    englishName: 'Duality',
    tag: 'duality',
    alias: [],
  },
  {
    id: 147,
    name: '매트로이드',
    englishName: 'Matroid',
    tag: 'matroid',
    alias: [],
  },
  {
    id: 148,
    name: '보로노이 다이어그램',
    englishName: 'Voronoi Diagram',
    tag: 'voronoi',
    alias: [],
  },
  {
    id: 149,
    name: '번사이드 보조정리',
    englishName: "Burnside's Lemma",
    tag: 'burnside',
    alias: [],
  },
  {
    id: 150,
    name: '키타마사',
    englishName: 'Kitamasa',
    tag: 'kitamasa',
    alias: [],
  },
  {
    id: 151,
    name: '크누스 최적화',
    englishName: 'Knuth Optimization',
    tag: 'knuth',
    alias: [],
  },
  {
    id: 152,
    name: '헝가리안',
    englishName: 'Hungarian',
    tag: 'hungarian',
    alias: [],
  },
  {
    id: 153,
    name: '이산 로그',
    englishName: 'Discrete Logarithm',
    tag: 'discrete_log',
    alias: [],
  },
  {
    id: 154,
    name: '일반적인 매칭',
    englishName: 'General Matching',
    tag: 'general_matching',
    alias: [],
  },
  {
    id: 155,
    name: '최소 외접원',
    englishName: 'Minimum Enclosing Circle',
    tag: 'min_enclosing_circle',
    alias: [],
  },
  { id: 156, name: 'z', englishName: 'Z', tag: 'z', alias: [] },
  {
    id: 157,
    name: '통계학',
    englishName: 'Statistics',
    tag: 'statistics',
    alias: [],
  },
  {
    id: 158,
    name: '도미네이터 트리',
    englishName: 'Dominator Tree',
    tag: 'dominator_tree',
    alias: [],
  },
  {
    id: 159,
    name: '단조 큐를 이용한 최적화',
    englishName: 'Monotone Queue Optimization',
    tag: 'monotone_queue_optimization',
    alias: ['단조 큐를 사용한 최적화'],
  },
  {
    id: 160,
    name: '회문 트리',
    englishName: 'Palindrome Tree',
    tag: 'palindrome_tree',
    alias: [],
  },
  {
    id: 161,
    name: '안정 결혼 문제',
    englishName: 'Stable Marriage Problem',
    tag: 'stable_marriage',
    alias: [],
  },
  {
    id: 162,
    name: '담금질 기법',
    englishName: 'Simulated Annealing',
    tag: 'simulated_annealing',
    alias: [],
  },
  {
    id: 163,
    name: '양방향 탐색',
    englishName: 'Bidirectional Search',
    tag: 'bidirectional_search',
    alias: [],
  },
  {
    id: 164,
    name: '반평면 교집합',
    englishName: 'Half Plane Intersection',
    tag: 'half_plane_intersection',
    alias: [],
  },
  { id: 165, name: '로프', englishName: 'Rope', tag: 'rope', alias: [] },
  {
    id: 166,
    name: '스토어-바그너',
    englishName: 'Stoer-wagner',
    tag: 'stoer_wagner',
    alias: [],
  },
  {
    id: 167,
    name: '히르쉬버그',
    englishName: "Hirschberg's",
    tag: 'hirschberg',
    alias: [],
  },
  {
    id: 168,
    name: '이산 제곱근',
    englishName: 'Discrete Square Root',
    tag: 'discrete_sqrt',
    alias: [],
  },
  {
    id: 169,
    name: '4차원 이상의 기하학',
    englishName: 'Geometry; Hyperdimensional',
    tag: 'geometry_hyper',
    alias: ['geometry_4d'],
  },
  {
    id: 170,
    name: '접미사 트리',
    englishName: 'Suffix Tree',
    tag: 'suffix_tree',
    alias: [],
  },
  {
    id: 171,
    name: '유향 최소 스패닝 트리',
    englishName: 'Directed Minimum Spanning Tree',
    tag: 'directed_mst',
    alias: [],
  },
  {
    id: 172,
    name: '베이즈 정리',
    englishName: 'Bayes Theorem',
    tag: 'bayes',
    alias: [],
  },
  {
    id: 173,
    name: '그린 정리',
    englishName: "Green's Theorem",
    tag: 'green',
    alias: [],
  },
  {
    id: 174,
    name: '픽의 정리',
    englishName: "Pick's Theorem",
    tag: 'pick',
    alias: [],
  },
  {
    id: 175,
    name: '크누스 x',
    englishName: "Knuth's X",
    tag: 'knuth_x',
    alias: [],
  },
  {
    id: 176,
    name: '탑 트리',
    englishName: 'Top Tree',
    tag: 'top_tree',
    alias: [],
  },
  {
    id: 177,
    name: '춤추는 링크',
    englishName: 'Dancing Links',
    tag: 'dancing_links',
    alias: [],
  },
  {
    id: 178,
    name: '보이어-무어 다수결 투표',
    englishName: 'Boyer-moore Majority Vote',
    tag: 'majority_vote',
    alias: [],
  },
  {
    id: 179,
    name: '트리 압축',
    englishName: 'Tree Compression',
    tag: 'tree_compression',
    alias: [],
  },
  {
    id: 180,
    name: '생성 함수',
    englishName: 'Generating Function',
    tag: 'generating_function',
    alias: [],
  },
  {
    id: 181,
    name: 'a*',
    englishName: 'A*',
    tag: 'a_star',
    alias: ['a스타', '에이스타'],
  },
  {
    id: 182,
    name: '레드-블랙 트리',
    englishName: 'Red-black Tree',
    tag: 'rb_tree',
    alias: ['red black tree'],
  },
  {
    id: 183,
    name: '델로네 삼각분할',
    englishName: 'Delaunay Triangulation',
    tag: 'delaunay',
    alias: [],
  },
  {
    id: 184,
    name: '서큘레이션',
    englishName: 'Circulation',
    tag: 'circulation',
    alias: [],
  },
  {
    id: 185,
    name: '이산 k제곱근',
    englishName: 'Discrete k-th Root',
    tag: 'discrete_kth_root',
    alias: [],
  },
  {
    id: 186,
    name: '다중 대입값 계산',
    englishName: 'Multipoint Evaluation',
    tag: 'multipoint_evaluation',
    alias: [],
  },
  {
    id: 187,
    name: '차분 공격',
    englishName: 'Differential Cryptanalysis',
    tag: 'differential_cryptanalysis',
    alias: [],
  },
  {
    id: 188,
    name: '하켄부시 게임',
    englishName: 'Hackenbush',
    tag: 'hackenbush',
    alias: [],
  },
  {
    id: 189,
    name: '트리 분할',
    englishName: 'Tree Decomposition',
    tag: 'tree_decomposition',
    alias: [],
  },
  {
    id: 190,
    name: '생일 문제',
    englishName: 'Birthday',
    tag: 'birthday',
    alias: [],
  },
  {
    id: 191,
    name: '도형에서의 불 연산',
    englishName: 'Boolean Operations On Geometric Objects',
    tag: 'geometric_boolean_operations',
    alias: [],
  },
  {
    id: 192,
    name: '현 그래프',
    englishName: 'Chordal Graph',
    tag: 'chordal_graph',
    alias: [],
  },
  {
    id: 193,
    name: '차수열',
    englishName: 'Degree Sequence',
    tag: 'degree_sequence',
    alias: [],
  },
  {
    id: 194,
    name: 'utf-8 입력 처리',
    englishName: 'Utf-8 Inputs',
    tag: 'utf8',
    alias: [],
  },
  {
    id: 195,
    name: '부분집합의 합 다이나믹 프로그래밍',
    englishName: 'Sum Over Subsets Dynamic Programming',
    tag: 'dp_sum_over_subsets',
    alias: [],
  },
  {
    id: 196,
    name: '경사 하강법',
    englishName: 'Gradient Descent',
    tag: 'gradient_descent',
    alias: [],
  },
  {
    id: 197,
    name: '데카르트 트리',
    englishName: 'Cartesian Tree',
    tag: 'cartesian_tree',
    alias: [],
  },
  {
    id: 198,
    name: '다항식 보간법',
    englishName: 'Polynomial Interpolation',
    tag: 'polynomial_interpolation',
    alias: [],
  },
  {
    id: 199,
    name: '플러드 필',
    englishName: 'Flood Fill',
    tag: 'flood_fill',
    alias: [],
  },
  {
    id: 200,
    name: '함수형 그래프',
    englishName: 'Functional Graph',
    tag: 'functional_graph',
    alias: [],
  },
  {
    id: 201,
    name: '방향 비순환 그래프',
    englishName: 'Directed Acyclic Graph',
    tag: 'dag',
    alias: [],
  },
  {
    id: 202,
    name: '최단 경로',
    englishName: 'Shortest Path',
    tag: 'shortest_path',
    alias: [],
  },
  {
    id: 203,
    name: '린드스트롬-게셀-비엔노 보조정리',
    englishName: 'Lindström-gessel-viennot Lemma',
    tag: 'lgv',
    alias: [],
  },
  {
    id: 204,
    name: '지수승강 보조정리',
    englishName: 'Lifting The Exponent Lemma',
    tag: 'lte',
    alias: [],
  },
  {
    id: 205,
    name: '유리 등차수열의 내림 합',
    englishName: 'Sum Of Floor Of Rational Arithmetic Sequence',
    tag: 'floor_sum',
    alias: [],
  },
  {
    id: 206,
    name: '자릿수를 이용한 다이나믹 프로그래밍',
    englishName: 'Digit Dp',
    tag: 'dp_digit',
    alias: [],
  },
  {
    id: 207,
    name: '덱을 이용한 구간 최댓값 트릭',
    englishName: 'Deque Range Maximum Trick',
    tag: 'deque_trick',
    alias: ['덱 트릭'],
  },
  {
    id: 208,
    name: '집합과 맵',
    englishName: 'Set / Map',
    tag: 'set',
    alias: [],
  },
  {
    id: 209,
    name: '트리의 지름',
    englishName: 'Diameter Of A Tree',
    tag: 'tree_diameter',
    alias: [],
  },
  {
    id: 210,
    name: 'cdq 분할 정복',
    englishName: 'Cdq',
    tag: 'cdq',
    alias: [],
  },
  {
    id: 211,
    name: '최장 공통 부분 수열 문제',
    englishName: 'Longest Common Subsequence',
    tag: 'lcs',
    alias: [],
  },
  {
    id: 212,
    name: '다이얼',
    englishName: 'Dial',
    tag: 'dial',
    alias: [],
  },
  {
    id: 213,
    name: '세그먼트 트리 비츠',
    englishName: 'Segment Tree Beats',
    tag: 'beats',
    alias: ['세그비츠'],
  },
  {
    id: 214,
    name: '홀짝성',
    englishName: 'Parity',
    tag: 'parity',
    alias: ['패리티'],
  },
  {
    id: 215,
    name: '피사노 주기',
    englishName: 'Pisano Period',
    tag: 'pisano',
    alias: [],
  },
  {
    id: 216,
    name: 'bulldozer 트릭',
    englishName: 'Bulldozer Trick',
    tag: 'bulldozer',
    alias: [],
  },
  {
    id: 217,
    name: '불변량 찾기',
    englishName: 'Finding Invariants',
    tag: 'invariant',
    alias: [],
  },
  {
    id: 218,
    name: '트리에서의 전방향 다이나믹 프로그래밍',
    englishName: 'Rerooting On Trees',
    tag: 'rerooting',
    alias: [],
  },
  {
    id: 219,
    name: '역추적',
    englishName: 'Traceback',
    tag: 'traceback',
    alias: [],
  },
  {
    id: 220,
    name: '제한된 트리 너비',
    englishName: 'Treewidth',
    tag: 'treewidth',
    alias: [],
  },
  {
    id: 221,
    name: '배타적 논리합 기저 (gf(2))',
    englishName: 'XOR Basis (gf(2))',
    tag: 'xor_basis',
    alias: [],
  },
  {
    id: 222,
    name: '비트 집합을 이용한 최장 공통 부분 수열 최적화',
    englishName: 'Longest Common Subsequence Using Bit Sets',
    tag: 'bitset_lcs',
    alias: ['비트셋 lcs'],
  },
  {
    id: 223,
    name: '격자 그래프',
    englishName: 'Grid Graph',
    tag: 'grid_graph',
    alias: [],
  },
  {
    id: 224,
    name: '순환군',
    englishName: 'Cyclic Group',
    tag: 'cyclic_group',
    alias: [],
  },
  {
    id: 225,
    name: '리-차오 트리',
    englishName: 'Li-Chao Tree',
    tag: 'li_chao_tree',
    alias: ['리차오 트리'],
  },
  {
    id: 226,
    name: '키네틱 세그먼트 트리',
    englishName: 'Kinetic Segment Tree',
    tag: 'kinetic_segtree',
    alias: [],
  },
  {
    id: 227,
    name: '차분 배열 트릭',
    englishName: 'Difference Array',
    tag: 'difference_array',
    alias: [],
  },
  {
    id: 228,
    name: '최대 부분 배열 문제',
    englishName: 'Maximum Subarray',
    tag: 'maximum_subarray',
    alias: [],
  },
  {
    id: 229,
    name: '각도 정렬',
    englishName: 'Angle Sorting',
    tag: 'angle_sorting',
    alias: [],
  },
  {
    id: 230,
    name: '조화수',
    englishName: 'Harmonic Number',
    tag: 'harmonic_number',
    alias: [],
  },
  {
    id: 231,
    name: '소인수분해',
    englishName: 'Prime Factorization',
    tag: 'prime_factorization',
    alias: [],
  },
];

export const ALGORITHMS_COUNT = ALGORITHM_INFOS.length;
