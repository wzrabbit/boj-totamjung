import { forwardRef } from 'react';
import * as S from './MiniAlgorithmButton.styled';
import { CloseSmallIcon } from '@/assets/svg';
import { useTranslation } from '@/i18n';
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
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Button
        type="button"
        tabIndex={tabIndex}
        aria-label={
          mode === 'add'
            ? t('randomDefenseCreate.miniAlgorithm.addAriaLabel', [name])
            : t('randomDefenseCreate.miniAlgorithm.removeAriaLabel', [name])
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
