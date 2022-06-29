import { useSelector } from "react-redux/es/exports";

import classes from "./Board.module.css";
import BoardItem from "./BoardItem";

const Board = () => {
  const board = useSelector(state => state.board);
  return (
    <div className={classes.board}>
      {board.map((row, rowIndex) =>
        row.map((col, colIndex) => {
          return (
            <BoardItem
              row={rowIndex}
              col={colIndex}
              boardValue={board[rowIndex][colIndex]}
              key={`${rowIndex}${colIndex}`}
            />
          );
        })
      )}
    </div>
  );
};

export default Board;
