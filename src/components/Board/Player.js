import React from "react";

import classes from "./Player.module.css";

import one from "../../assets/avatars/playerOne.png";
import two from "../../assets/avatars/playerTwo.png";

const Player = ({ info, disabled }) => {
  return (
    <div className={`${classes.card} ${disabled && classes.disabled}`}>
      <img
        className={classes.avatar}
        src={info.value === "cross" ? one : two}
        alt=''
      />
      <h3 className={classes.playerName}>{info.playerName}</h3>
      <span>Wins: {info.wins}</span>
      <span>Losses: {info.losses}</span>
      <span>Draws: {info.draws}</span>
    </div>
  );
};

export default Player;
