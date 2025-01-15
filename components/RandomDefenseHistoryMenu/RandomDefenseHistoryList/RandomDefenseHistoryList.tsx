import * as S from './RandomDefenseHistoryList.styled';
import RandomDefenseHistoryItem from './RandomDefenseHistoryItem';
import type { RandomDefenseHistoryInfo } from '@/types/randomDefense';

interface RandomDefenseHistoryList {
  items: RandomDefenseHistoryInfo[];
  isHidden: boolean;
  onDelete: (id: string) => void;
}

const RandomDefenseHistoryList = (props: RandomDefenseHistoryList) => {
  const { items, isHidden, onDelete } = props;

  return (
    <S.Container>
      {items.map((item) => {
        const id = `${item.problemId}-${item.createdAt}`;
        const isCurrentTierHidden = ![0, 31].includes(item.tier) && isHidden;

        return (
          <RandomDefenseHistoryItem
            key={id}
            isHidden={isCurrentTierHidden}
            onDelete={() => {
              onDelete(id);
            }}
            {...item}
          />
        );
      })}
    </S.Container>
  );
};

export default RandomDefenseHistoryList;
