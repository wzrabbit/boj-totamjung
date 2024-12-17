import { PROBLEM_CARDS, CARD_BOXES } from '@/assets/png/problemCards';
import type { Rank } from '@/types/randomDefense';
import * as S from './CardBox.styled';
import { useState } from 'react';

interface CardBoxProps {
  color: 'black' | 'red' | 'green' | 'blue' | 'gold';
  isTierHidden: boolean;
  firstCardRank: Rank;
  secondCardRank?: Rank;
  thirdCardRank?: Rank;
  onOpenAnimationEnd: () => void;
}

const CardBox = (props: CardBoxProps) => {
  const {
    color,
    isTierHidden,
    firstCardRank,
    secondCardRank,
    thirdCardRank,
    onOpenAnimationEnd,
  } = props;
  const [isCardBoxOpening, setIsCardBoxOpening] = useState(false);

  return (
    <S.Container onClick={() => setIsCardBoxOpening(true)}>
      <S.CardBoxInside src={CARD_BOXES.inside[color]} />
      <S.InsideCardList>
        <S.InsideCard
          src={
            isTierHidden ? PROBLEM_CARDS.hidden : PROBLEM_CARDS[firstCardRank]
          }
        />
        {secondCardRank && (
          <S.InsideCard
            src={
              isTierHidden
                ? PROBLEM_CARDS.hidden
                : PROBLEM_CARDS[secondCardRank]
            }
          />
        )}
        {thirdCardRank && (
          <S.InsideCard
            src={
              isTierHidden ? PROBLEM_CARDS.hidden : PROBLEM_CARDS[thirdCardRank]
            }
          />
        )}
      </S.InsideCardList>
      <S.CardBoxFront src={CARD_BOXES.front[color]} />
      <S.CardBoxTop
        src={CARD_BOXES.top[color]}
        $isCardBoxOpening={isCardBoxOpening}
      />
    </S.Container>
  );
};

export default CardBox;
