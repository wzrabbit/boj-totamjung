const TIER_FROM_SRC_REGEX = /\d+(?=\.svg$)/;

const TIER_FROM_CLASS_TEXT_REGEX = /\d+$/;

const PROBLEM_ID_FROM_BOARD_BLOCKQUOTE_PROBLEM_TEXT_REGEX = /^\d+/;

const BOARD_BLOCKQUOTE_TIER_BADGE_CSS_SELECTOR =
  ".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])";

const BOARD_BLOCKQUOTE_PROBLEM_TEXT_SELECTOR =
  ".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 blockquote > a";

const HANDLE_CSS_SELECTOR = '.loginbar > li > a[href^="/user/"]';

const TIER_BADGE_CSS_SELECTORS = [
  ".page-header:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",
  "#problemset tr:not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",
  "#status-table td:nth-child(3):not(:has(.result-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",
  ".col-md-12:has(a[href='/board/list/solvedac']) ~ .col-md-12 .table.table-bordered.table-striped td:nth-child(2):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",
  ".nav.nav-pills.no-print.problem-menu:not(:has(a[href^=\"https://solved.ac/contribute/\"])) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",
  ".row:has(li[class='active'] > a[href='/category']) ~ .row .table.table-bordered.table-striped td:nth-child(3):not(:has(.result-ac)) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",
  ".col-md-12:has(a[href='/workbook/top']) ~ .col-md-12 .table.table-bordered.table-striped tr:not(:has(.problem-label-ac)) td:nth-child(2) > .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg'])",
] as const;

const TIER_TEXT_CSS_SELECTOR =
  ".row:has(#problem_title):not(:has(.problem-label-ac)) .solvedac-tier:not([src*='/0.svg']):not([src*='/-1.svg']) + span";

const BOJ_EXTENDED_PROBLEM_LINK_BOX_CSS_SELECTOR =
  ".problem-link-style-box:not(.result-ac):not([data-tier='0'])";
