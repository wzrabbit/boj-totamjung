import * as S from './AlgorithmList.styled';
import AlgorithmListItem from './AlgorithmListItem';
import type { Algorithm } from '@/types/algorithm';

interface AlgorithmListProps {
  items: Algorithm[];
  checkedAlgorithmIds: number[];
  onChange: (id: number) => void;
}

const AlgorithmList = (props: AlgorithmListProps) => {
  const { items, checkedAlgorithmIds, onChange } = props;

  return (
    <S.Container>
      {items.map((item, index) => (
        <AlgorithmListItem
          key={item.id}
          id={item.id}
          name={item.name}
          isChecked={checkedAlgorithmIds.includes(item.id)}
          backgroundColor={index % 2 === 0 ? 'brown' : 'light-brown'}
          onChange={onChange}
        />
      ))}
    </S.Container>
  );
};

export default AlgorithmList;
