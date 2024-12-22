import { PROBLEM_CARDS, CARD_BOXES } from '@/assets/png/problemCards';
import type { Rank } from '@/types/randomDefense';
import * as S from './CardBox.styled';
import { useState } from 'react';

interface CardBoxProps {
  color: 'black' | 'red' | 'green' | 'blue' | 'gold';
  isTierHidden: boolean;
  cardRanks: [Rank] | [Rank, Rank] | [Rank, Rank, Rank];
  onOpenAnimationEnd: () => void;
}

const CardBox = (props: CardBoxProps) => {
  const { color, isTierHidden, cardRanks, onOpenAnimationEnd } = props;
  const [isCardBoxOpening, setIsCardBoxOpening] = useState(false);
  const firstCardRank = cardRanks[0];
  const secondCardRank = cardRanks[1];
  const thirdCardRank = cardRanks[2];

  return (
    <S.Container
      onClick={() => setIsCardBoxOpening(true)}
      $isCardBoxOpening={isCardBoxOpening}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) {
          onOpenAnimationEnd();
        }
      }}
    >
      <S.CardBoxInside src={CARD_BOXES.inside[color]} draggable={false} />
      <S.InsideCardList>
        {firstCardRank && (
          <S.InsideCard
            src={
              isTierHidden ? PROBLEM_CARDS.hidden : PROBLEM_CARDS[firstCardRank]
            }
            draggable={false}
            alt=""
            $isCardBoxOpening={isCardBoxOpening}
            $top="0"
            $delay={1}
          />
        )}
        {secondCardRank && (
          <S.InsideCard
            src={
              isTierHidden
                ? PROBLEM_CARDS.hidden
                : PROBLEM_CARDS[secondCardRank]
            }
            draggable={false}
            alt=""
            $isCardBoxOpening={isCardBoxOpening}
            $top="4%"
            $delay={1.15}
          />
        )}
        {thirdCardRank && (
          <S.InsideCard
            src={
              isTierHidden ? PROBLEM_CARDS.hidden : PROBLEM_CARDS[thirdCardRank]
            }
            draggable={false}
            alt=""
            $isCardBoxOpening={isCardBoxOpening}
            $top="8%"
            $delay={1.3}
          />
        )}
      </S.InsideCardList>
      <S.CardBoxFront src={CARD_BOXES.front[color]} draggable={false} alt="" />
      <S.CardBoxTop
        src={CARD_BOXES.top[color]}
        draggable={false}
        alt=""
        $isCardBoxOpening={isCardBoxOpening}
      />
    </S.Container>
  );
};

export default CardBox;
