import { useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import Board from "./components/Board/Board";
import Player from "./components/Board/Player";
import { useEffect } from "react";

function App() {
  const playerInfo = useSelector(state => state.players);
  const board = useSelector(state => state.board);

  useEffect(() => {
    if (playerInfo.previousValue) {
      if (
        board
          .map(row => row.every(el => el && el === playerInfo.previousValue))
          .includes(true)
      ) {
        console.log("win");
      } else if (
        (board[1][1] &&
          board[0][0] === board[1][1] &&
          board[1][1] === board[2][2]) ||
        (board[1][1] &&
          board[0][2] === board[1][1] &&
          board[1][1] === board[2][0])
      ) {
        console.log("win");
      } else if (
        board[0]
          .map(
            (col, index) =>
              col && board[1][index] === col && board[2][index] === col
          )
          .includes(true)
      ) {
        console.log("win");
      }
    }
  }, [playerInfo.previousValue, board]);
  return (
    <Layout>
      <Player
        info={playerInfo.player1}
        disabled={playerInfo.currentPlayer.value !== "cross"}
      />
      <Board />
      <Player
        info={playerInfo.player2}
        disabled={playerInfo.currentPlayer.value !== "circle"}
      />
    </Layout>
  );
}

export default App;
