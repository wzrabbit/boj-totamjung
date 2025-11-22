import { forwardRef } from 'react';
import * as S from './MiniAlgorithmButton.styled';
import { CloseSmallIcon } from '@/assets/svg';
import type { KeyboardEventHandler } from 'react';

interface MiniAlgorithmButtonProps {
  id: number;
  name: string;
  mode: 'add' | 'delete';
  tabIndex: number;
  onClick: (algorithmId: number) => void;
  onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
}

const MiniAlgorithmButton = forwardRef<
  HTMLButtonElement,
  MiniAlgorithmButtonProps
>((props, ref) => {
  const { id, name, mode, tabIndex, onClick, onKeyDown } = props;

  return (
    <S.Container>
      <S.Button
        type="button"
        tabIndex={tabIndex}
        aria-label={
          mode === 'add'
            ? `${name}을 검색에 포함할 알고리즘 목록에 추가하기`
            : `${name}을 검색에 포함할 알고리즘 목록에서 제거하기`
        }
        onClick={() => {
          onClick(id);
        }}
        onKeyDown={onKeyDown}
        ref={ref}
      >
        <S.Text>{name}</S.Text>
        {mode === 'delete' && (
          <S.CloseIconWrapper>
            <CloseSmallIcon />
          </S.CloseIconWrapper>
        )}
      </S.Button>
    </S.Container>
  );
});

export default MiniAlgorithmButton;
