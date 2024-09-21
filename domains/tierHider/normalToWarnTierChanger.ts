import { $, $$ } from '~utils/querySelector';
import { solvedAcNumericTierIcons, solvedAcRankIcons } from '~images/svg/tier';
import { isTierWithoutNotRatable } from '~types/typeGuards';
import type { RatedTier } from '~types/tierHider';
import { COMMANDS } from '~constants/commands';

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

export const changeNormalToWarnTier = (
  warnTier: RatedTier,
  shouldWarnHighTier: boolean,
) => {
  changeBoardBlockquoteBadgeTier(warnTier, shouldWarnHighTier);

  if (shouldWarnHighTier) {
    changeRegularBadgeTier(warnTier);
    changeTierText(warnTier);
    changeBojExtendedProblemLinkBox(warnTier);
  }
};

const changeBoardBlockquoteBadgeTier = async (
  warnTier: RatedTier,
  shouldWarnHighTier: boolean,
) => {
  const boardBlockquoteTierBadgeElement = $(
    BOARD_BLOCKQUOTE_TIER_BADGE_CSS_SELECTOR,
  );
  const handleElement = $(HANDLE_CSS_SELECTOR);
  const boardBlockquoteProblemTextElement = $(
    BOARD_BLOCKQUOTE_PROBLEM_TEXT_SELECTOR,
  );

  if (
    !(boardBlockquoteTierBadgeElement instanceof HTMLImageElement) ||
    !handleElement ||
    !boardBlockquoteProblemTextElement
  ) {
    return;
  }

  const matchedProblemId = boardBlockquoteProblemTextElement.innerText.match(
    PROBLEM_ID_FROM_BOARD_BLOCKQUOTE_PROBLEM_TEXT_REGEX,
  );
  const matchedTier =
    boardBlockquoteTierBadgeElement.src.match(TIER_FROM_SRC_REGEX);

  if (!matchedProblemId || !matchedTier) {
    return;
  }

  const handle = handleElement.innerText.trim();
  const problemId = Number(matchedProblemId);
  const tier = Number(matchedTier);

  if (!isTierWithoutNotRatable(tier)) {
    return;
  }

  const isUserSolved = await chrome.runtime.sendMessage({
    command: COMMANDS.IS_USER_SOLVED_PROBLEM,
    handle,
    problemId,
  });

  if (isUserSolved === 'unknown') {
    boardBlockquoteTierBadgeElement.remove();
    return;
  }

  if (isUserSolved) {
    boardBlockquoteTierBadgeElement.style.content = `url(${solvedAcNumericTierIcons[tier]})`;
    return;
  }

  if (tier >= warnTier && shouldWarnHighTier) {
    boardBlockquoteTierBadgeElement.style.content = `url(${solvedAcRankIcons.warn})`;
  }
};

const changeRegularBadgeTier = (warnTier: RatedTier) => {
  const tierBadgeElements = [
    ...TIER_BADGE_CSS_SELECTORS.map((selector) => $$(selector)).flat(),
  ];

  tierBadgeElements.forEach((tierBadgeElement) => {
    if (tierBadgeElement instanceof HTMLImageElement) {
      const src = tierBadgeElement.src;
      const tier = src.match(TIER_FROM_SRC_REGEX);

      if (tier && Number(tier) >= warnTier) {
        tierBadgeElement.style.content = `url(${solvedAcRankIcons.warn})`;
      }
    }
  });
};

const changeTierText = (warnTier: RatedTier) => {
  const tierTextElement = $(TIER_TEXT_CSS_SELECTOR);

  if (!tierTextElement) {
    return;
  }

  const className = tierTextElement.classList[0];

  if (!className) {
    return;
  }

  const tier = className.match(TIER_FROM_CLASS_TEXT_REGEX);

  if (tier && Number(tier) >= warnTier) {
    tierTextElement.classList.add('warn');
  }
};

const changeBojExtendedProblemLinkBox = (warnTier: RatedTier) => {
  const problemLinkBoxElements = $$(BOJ_EXTENDED_PROBLEM_LINK_BOX_CSS_SELECTOR);

  problemLinkBoxElements.forEach((problemLinkBoxElement) => {
    const tier = problemLinkBoxElement.getAttribute('data-tier');

    if (tier && Number(tier) >= warnTier) {
      problemLinkBoxElement.classList.add('warn');
    }
  });
};
