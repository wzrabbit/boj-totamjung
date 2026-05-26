import * as S from './AlgorithmSearchInput.styled';
import MiniAlgorithmButton from './MiniAlgorithmButton';
import useAlgorithmSearchInput from '@/hooks/randomDefense/useAlgorithmSearchInput';
import useRovingFocus from '@/hooks/useRovingFocus';
import { ALGORITHM_INFOS } from '@/constants/algorithmInfos';
import { useTranslation, getAlgorithmDisplayName } from '@/i18n';

interface AlgorithmSearchInputProps {
  selectedAlgorithmIds: number[];
  onChange: (selectedAlgorithmIds: number[]) => void;
}

const AlgorithmSearchInput = (props: AlgorithmSearchInputProps) => {
  const { selectedAlgorithmIds, onChange } = props;
  const { language, t } = useTranslation();
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
  const { getRovingProps: getSelectedRovingProps } =
    useRovingFocus<HTMLButtonElement>({ count: selectedAlgorithmIds.length });
  const { getRovingProps: getSearchedRovingProps } =
    useRovingFocus<HTMLButtonElement>({ count: searchedAlgorithmIds.length });

  return (
    <S.Container ref={containerRef} $isOpen={isOpen} tabIndex={-1}>
      <S.InputPanel tabIndex={-1}>
        <>
          {selectedAlgorithmIds.map((selectedId, index) => {
            const searchedAlgorithm = ALGORITHM_INFOS.find(
              ({ id }) => id === selectedId,
            );
            const searchedName = searchedAlgorithm
              ? getAlgorithmDisplayName(searchedAlgorithm, language)
              : '';

            return (
              <MiniAlgorithmButton
                key={selectedId}
                mode="delete"
                id={selectedId}
                name={searchedName}
                {...getSelectedRovingProps(index)}
                onClick={deleteAlgorithmId}
              />
            );
          })}
          <S.SearchInput
            ref={inputRef}
            maxLength={100}
            aria-label={t('options.algorithmPool.searchInputAriaLabel')}
            $isOpen={isOpen}
            value={inputValue}
            onChange={updateInputValue}
            onKeyDown={processActionIfKeyPress}
          />
        </>
      </S.InputPanel>
      <S.SearchResultPanel $isOpen={isOpen} tabIndex={-1}>
        {searchedAlgorithmIds.map((selectedId, index) => {
          const searchedAlgorithm = ALGORITHM_INFOS.find(
            ({ id }) => id === selectedId,
          );
          const searchedName = searchedAlgorithm
            ? getAlgorithmDisplayName(searchedAlgorithm, language)
            : '';

          return (
            <MiniAlgorithmButton
              key={selectedId}
              mode="add"
              id={selectedId}
              name={searchedName}
              {...getSearchedRovingProps(index)}
              onClick={addAlgorithmId}
            />
          );
        })}
      </S.SearchResultPanel>
    </S.Container>
  );
};

export default AlgorithmSearchInput;
