import { createSlice } from "@reduxjs/toolkit";
const boardSlice = createSlice({
  name: "board",
  initialState: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  reducers: {
    play: (state, action) => {
      state[action.payload.row][action.payload.col] = action.payload.value;
    },
    reset: state => {
      state = state.map(row => row.map(col => null));
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice;
