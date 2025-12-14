import * as S from './AlgorithmListItem.styled';
import Checkbox from '@/components/common/Checkbox';
import Text from '@/components/common/Text';
import { forwardRef } from 'react';

interface AlgorithmListItemProps {
  id: number;
  name: string;
  isChecked: boolean;
  backgroundColor: 'light-brown' | 'brown';
  tabIndex?: number;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange: (id: number) => void;
}

const AlgorithmListItem = forwardRef<HTMLInputElement, AlgorithmListItemProps>(
  (props, ref) => {
    const {
      id,
      name: algorithmName,
      isChecked,
      backgroundColor,
      tabIndex = 0,
      onChange,
      ...rest
    } = props;

    return (
      <S.Container $backgroundColor={backgroundColor}>
        <S.Label>
          <Text type="semiPrimary" fontSize={16} width="auto">
            {algorithmName}
          </Text>
          <Checkbox
            isChecked={isChecked}
            onChange={() => onChange(id)}
            name="algorithm"
            ariaLabel={algorithmName}
            tabIndex={tabIndex}
            ref={ref}
            {...rest}
          />
        </S.Label>
      </S.Container>
    );
  },
);

export default AlgorithmListItem;
