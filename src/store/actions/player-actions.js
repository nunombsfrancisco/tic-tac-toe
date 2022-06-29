import { playerActions } from "../reducers/player-slice";

export const handlePlay = (value, players) => {
  return dispatch => {
    if (value === "cross") {
      return dispatch(
        playerActions.switchPlayer({
          ...players.player2,
          previousValue: "cross",
        })
      );
    } else {
      return dispatch(
        playerActions.switchPlayer({
          ...players.player1,
          previousValue: "circle",
        })
      );
    }
  };
};
