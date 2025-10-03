import * as S from './AlgorithmListItem.styled';
import Checkbox from '@/components/common/Checkbox';
import Text from '@/components/common/Text';

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
        <Text type="semiPrimary" fontSize={16} width="auto">
          {name}
        </Text>
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
