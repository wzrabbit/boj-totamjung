import { useRef } from 'react';
import * as S from './AlgorithmSearchInput.styled';
import MiniAlgorithmButton from './MiniAlgorithmButton';
import useAlgorithmSearchInput from '~hooks/randomDefense/useAlgorithmSearchInput';
import type { Algorithm } from '~types/algorithm';

interface AlgorithmSearchInputProps {
  selectedAlgorithms: Algorithm[];
  onChange: (selectedAlgorithms: Algorithm[]) => void;
}

const AlgorithmSearchInput = (props: AlgorithmSearchInputProps) => {
  const { selectedAlgorithms, onChange } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    isOpen,
    inputValue,
    searchedAlgorithms,
    updateInputValue,
    processActionIfKeyPress,
    addAlgorithm,
    deleteAlgorithm,
  } = useAlgorithmSearchInput({
    containerRef,
    inputRef,
    selectedAlgorithms,
    onChange,
  });

  return (
    <S.Container ref={containerRef} $isOpen={isOpen} tabIndex={-1}>
      <S.InputPanel tabIndex={-1}>
        <>
          {selectedAlgorithms.map(({ id, name }) => (
            <MiniAlgorithmButton
              key={id}
              mode="delete"
              id={id}
              name={name}
              onClick={deleteAlgorithm}
            />
          ))}
          <S.SearchInput
            ref={inputRef}
            maxLength={100}
            aria-label="알고리즘을 입력해 주세요"
            $isOpen={isOpen}
            value={inputValue}
            onChange={updateInputValue}
            onKeyDown={processActionIfKeyPress}
          />
        </>
      </S.InputPanel>
      <S.SearchResultPanel $isOpen={isOpen} tabIndex={-1}>
        {searchedAlgorithms.map(({ id, name }) => (
          <MiniAlgorithmButton
            key={id}
            mode="add"
            id={id}
            name={name}
            onClick={addAlgorithm}
          />
        ))}
      </S.SearchResultPanel>
    </S.Container>
  );
};

export default AlgorithmSearchInput;
