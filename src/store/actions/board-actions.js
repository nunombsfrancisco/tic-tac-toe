import { boardActions } from "../reducers/board-slice";

export const setPlay = (row, col, value) => {
  return dispatch => {
    dispatch(boardActions.play({ row, col, value }));
  };
};
