import { configureStore } from "@reduxjs/toolkit";

import boardSlice from "./reducers/board-slice";
import playerSlice from "./reducers/player-slice";

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
    players: playerSlice.reducer,
  },
});

export default store;
