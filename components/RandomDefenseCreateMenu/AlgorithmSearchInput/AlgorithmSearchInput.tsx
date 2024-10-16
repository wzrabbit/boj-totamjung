import * as S from './AlgorithmSearchInput.styled';
import MiniAlgorithmButton from './MiniAlgorithmButton';
import useAlgorithmSearchInput from '@/hooks/randomDefense/useAlgorithmSearchInput';
import { ALGORITHM_INFOS } from '@/constants/algorithmInfos';

interface AlgorithmSearchInputProps {
  selectedAlgorithmIds: number[];
  onChange: (selectedAlgorithmIds: number[]) => void;
}

const AlgorithmSearchInput = (props: AlgorithmSearchInputProps) => {
  const { selectedAlgorithmIds, onChange } = props;
  const {
    isOpen,
    inputValue,
    searchedAlgorithmIds,
    updateInputValue,
    processActionIfKeyPress,
    addAlgorithmId,
    deleteAlgorithmId,
    containerRef,
    inputRef,
  } = useAlgorithmSearchInput({
    selectedAlgorithmIds,
    onChange,
  });

  return (
    <S.Container ref={containerRef} $isOpen={isOpen} tabIndex={-1}>
      <S.InputPanel tabIndex={-1}>
        <>
          {selectedAlgorithmIds.map((selectedId) => {
            const searchedAlgorithm = ALGORITHM_INFOS.find(
              ({ id }) => id === selectedId,
            );
            const searchedName = searchedAlgorithm
              ? searchedAlgorithm.name
              : '';

            return (
              <MiniAlgorithmButton
                key={selectedId}
                mode="delete"
                id={selectedId}
                name={searchedName}
                onClick={deleteAlgorithmId}
              />
            );
          })}
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
        {searchedAlgorithmIds.map((selectedId) => {
          const searchedAlgorithm = ALGORITHM_INFOS.find(
            ({ id }) => id === selectedId,
          );
          const searchedName = searchedAlgorithm ? searchedAlgorithm.name : '';

          return (
            <MiniAlgorithmButton
              key={selectedId}
              mode="add"
              id={selectedId}
              name={searchedName}
              onClick={addAlgorithmId}
            />
          );
        })}
      </S.SearchResultPanel>
    </S.Container>
  );
};

export default AlgorithmSearchInput;
