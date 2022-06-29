import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "players",
  initialState: {
    player1: {
      playerName: "Player 1",
      value: "cross",
      wins: 0,
      losses: 0,
      draws: 0,
    },
    player2: {
      playerName: "Player 2",
      value: "circle",
      wins: 0,
      losses: 0,
      draws: 0,
    },
    currentPlayer: {
      playerName: "Player 1",
      value: "cross",
    },
    previousValue: null,
  },
  reducers: {
    switchPlayer: (state, action) => {
      state.previousValue = action.payload.previousValue;
      state.currentPlayer = {
        playerName: action.payload.playerName,
        value: action.payload.value,
      };
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
