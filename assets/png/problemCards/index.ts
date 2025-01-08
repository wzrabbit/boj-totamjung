import unratedCard from './unrated-card.png';
import bronzeCard from './bronze-card.png';
import silverCard from './silver-card.png';
import goldCard from './gold-card.png';
import platinumCard from './platinum-card.png';
import diamondCard from './diamond-card.png';
import rubyCard from './ruby-card.png';
import hiddenCard from './hidden-card.png';
import cardBoxFrontBlack from './card-box-front-black.png';
import cardBoxFrontRed from './card-box-front-red.png';
import cardBoxFrontGreen from './card-box-front-green.png';
import cardBoxFrontBlue from './card-box-front-blue.png';
import cardBoxFrontGold from './card-box-front-gold.png';
import cardBoxInsideBlack from './card-box-inside-black.png';
import cardBoxInsideRed from './card-box-inside-red.png';
import cardBoxInsideGreen from './card-box-inside-green.png';
import cardBoxInsideBlue from './card-box-inside-blue.png';
import cardBoxInsideGold from './card-box-inside-gold.png';
import cardBoxTopBlack from './card-box-top-black.png';
import cardBoxTopRed from './card-box-top-red.png';
import cardBoxTopGreen from './card-box-top-green.png';
import cardBoxTopBlue from './card-box-top-blue.png';
import cardBoxTopGold from './card-box-top-gold.png';

export const PROBLEM_CARDS = {
  unrated: unratedCard,
  bronze: bronzeCard,
  silver: silverCard,
  gold: goldCard,
  platinum: platinumCard,
  diamond: diamondCard,
  ruby: rubyCard,
  hidden: hiddenCard,
} as const;

export const CARD_BOXES = {
  front: {
    black: cardBoxFrontBlack,
    red: cardBoxFrontRed,
    green: cardBoxFrontGreen,
    blue: cardBoxFrontBlue,
    gold: cardBoxFrontGold,
  },
  inside: {
    black: cardBoxInsideBlack,
    red: cardBoxInsideRed,
    green: cardBoxInsideGreen,
    blue: cardBoxInsideBlue,
    gold: cardBoxInsideGold,
  },
  top: {
    black: cardBoxTopBlack,
    red: cardBoxTopRed,
    green: cardBoxTopGreen,
    blue: cardBoxTopBlue,
    gold: cardBoxTopGold,
  },
} as const;
