import * as S from './RandomDefenseHistoryList.styled';
import RandomDefenseHistoryItem from './RandomDefenseHistoryItem';
import useRovingFocus from '@/hooks/useRovingFocus';
import type { RandomDefenseHistoryInfo } from '@/types/randomDefense';

interface RandomDefenseHistoryList {
  items: RandomDefenseHistoryInfo[];
  isHidden: boolean;
  onDelete: (id: string) => void;
}

const RandomDefenseHistoryList = (props: RandomDefenseHistoryList) => {
  const { items, isHidden, onDelete } = props;
  const { getRovingProps } = useRovingFocus<HTMLAnchorElement, HTMLLIElement>({
    count: items.length,
    shouldResetFocusIndexOnItemChange: false,
  });

  return (
    <S.Container>
      {items.map((item, index) => {
        const id = `${item.problemId}-${item.createdAt}`;
        const isCurrentTierHidden = ![0, 31].includes(item.tier) && isHidden;
        const { ref, ...restRawRovingProps } = getRovingProps(index);
        const historyItemRovingProps = {
          ...restRawRovingProps,
          linkButtonRef: ref,
        };

        return (
          <RandomDefenseHistoryItem
            key={id}
            isHidden={isCurrentTierHidden}
            onDelete={() => {
              onDelete(id);
            }}
            {...item}
            {...historyItemRovingProps}
          />
        );
      })}
    </S.Container>
  );
};

export default RandomDefenseHistoryList;
