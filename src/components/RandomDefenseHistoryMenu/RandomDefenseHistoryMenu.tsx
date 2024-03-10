import RandomDefenseHistoryList from './RandomDefenseHistoryList';
import useRandomDefenseHistoryMenu from '~hooks/randomDefense/useRandomDefenseHistoryMenu';
import * as S from './RandomDefenseHistoryMenu.styled';

const RandomDefenseHistoryMenu = () => {
  const { items, isHidden, deleteHistoryById, clearHistory, setIsHidden } =
    useRandomDefenseHistoryMenu();
  return (
    <S.Container>
      <input
        type="checkbox"
        onChange={(e) => {
          setIsHidden(e.target.checked);
        }}
      />
      <RandomDefenseHistoryList
        items={items}
        isHidden={isHidden}
        onDelete={deleteHistoryById}
      />
      <button onClick={clearHistory}>모두 삭제</button>
    </S.Container>
  );
};

export default RandomDefenseHistoryMenu;
