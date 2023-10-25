import React from "react";
import player1 from "../assets/images/player-one.svg";

function Player1() {
  return (
    <>
      <div className="p1Container player">
        <img src={player1} alt="" srcset="" />
        <h2>Player 1</h2>
        <div className="counter">{0}</div>
      </div>
    </>
  );
}

export default Player1;
