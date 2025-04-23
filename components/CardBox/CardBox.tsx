import { PROBLEM_CARDS, CARD_BOXES } from '@/assets/png/problemCards';
import type { Rank } from '@/types/randomDefense';
import * as S from './CardBox.styled';
import { useState } from 'react';

interface CardBoxProps {
  color: 'black' | 'red' | 'green' | 'blue' | 'gold';
  isTierHidden: boolean;
  cardRanks: [Rank] | [Rank, Rank] | [Rank, Rank, Rank];
  onFirstClick: () => void;
  onOpenAnimationEnd: () => void;
}

const CardBox = (props: CardBoxProps) => {
  const { color, isTierHidden, cardRanks, onFirstClick, onOpenAnimationEnd } =
    props;
  const [isCardBoxOpening, setIsCardBoxOpening] = useState(false);
  const firstCardRank = cardRanks[0];
  const secondCardRank = cardRanks[1];
  const thirdCardRank = cardRanks[2];

  return (
    <S.ScaleUpAnimationContainer>
      <S.InnerContainer
        onClick={() => {
          setIsCardBoxOpening((isCardBoxOpening) => {
            if (!isCardBoxOpening) {
              onFirstClick();
            }

            return true;
          });
        }}
        $isCardBoxOpening={isCardBoxOpening}
        onAnimationEnd={(event) => {
          if (isCardBoxOpening && event.target === event.currentTarget) {
            onOpenAnimationEnd();
          }
        }}
        aria-label="카드 상자를 열어 추첨 진행하기"
      >
        <S.GlowingBox $isCardBoxOpening={isCardBoxOpening} />
        <S.CardBoxInside src={CARD_BOXES.inside[color]} draggable={false} />
        <S.InsideCardList $isCardBoxOpening={isCardBoxOpening}>
          {firstCardRank && (
            <S.InsideCard
              src={
                firstCardRank !== 'unrated' && isTierHidden
                  ? PROBLEM_CARDS.hidden
                  : PROBLEM_CARDS[firstCardRank]
              }
              draggable={false}
              alt=""
              $isCardBoxOpening={isCardBoxOpening}
              $top="0"
              $delay={1.5}
            />
          )}
          {secondCardRank && (
            <S.InsideCard
              src={
                secondCardRank !== 'unrated' && isTierHidden
                  ? PROBLEM_CARDS.hidden
                  : PROBLEM_CARDS[secondCardRank]
              }
              draggable={false}
              alt=""
              $isCardBoxOpening={isCardBoxOpening}
              $top="4%"
              $delay={1.65}
            />
          )}
          {thirdCardRank && (
            <S.InsideCard
              src={
                thirdCardRank !== 'unrated' && isTierHidden
                  ? PROBLEM_CARDS.hidden
                  : PROBLEM_CARDS[thirdCardRank]
              }
              draggable={false}
              alt=""
              $isCardBoxOpening={isCardBoxOpening}
              $top="8%"
              $delay={1.8}
            />
          )}
        </S.InsideCardList>
        <S.CardBoxFront
          src={CARD_BOXES.front[color]}
          draggable={false}
          alt=""
        />
        <S.CardBoxTop
          src={CARD_BOXES.top[color]}
          draggable={false}
          alt=""
          $isCardBoxOpening={isCardBoxOpening}
        />
      </S.InnerContainer>
    </S.ScaleUpAnimationContainer>
  );
};

export default CardBox;
