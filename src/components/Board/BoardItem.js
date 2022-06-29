import { useSelector, useDispatch } from "react-redux/es/exports";
import { boardActions } from "../../store/reducers/board-slice";
import { handlePlay } from "../../store/actions/player-actions";

import classes from "./BoardItem.module.css";
import Icon from "./Icon";

const BoardItem = props => {
  const dispatch = useDispatch();

  const players = useSelector(state => state.players);

  const { row, col, boardValue } = props;

  const playHandler = (row, col, value) => {
    if (boardValue) {
      return;
    }
    dispatch(boardActions.play({ row, col, value }));

    dispatch(handlePlay(players.currentPlayer.value, players));
  };

  return (
    <div
      className={classes.item}
      onClick={playHandler.bind(this, row, col, players.currentPlayer?.value)}>
      {boardValue && <Icon src={boardValue} alt={boardValue} />}
    </div>
  );
};

export default BoardItem;
