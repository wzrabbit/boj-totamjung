import * as S from './AlgorithmListItem.styled';
import Checkbox from '~components/common/Checkbox';

interface AlgorithmListItemProps {
  id: number;
  name: string;
  isChecked: boolean;
  backgroundColor: 'light-brown' | 'brown';
  onChange: (id: number) => void;
}

const AlgorithmListItem = (props: AlgorithmListItemProps) => {
  const { id, name, isChecked, backgroundColor, onChange } = props;

  return (
    <S.Container $backgroundColor={backgroundColor}>
      <S.Label>
        <S.Text>{name}</S.Text>
        <Checkbox
          isChecked={isChecked}
          onChange={() => onChange(id)}
          ariaLabel={name}
        />
      </S.Label>
    </S.Container>
  );
};

export default AlgorithmListItem;
