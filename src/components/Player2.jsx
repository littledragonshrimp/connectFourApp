import React from "react";
import player2 from "../assets/images/player-two.svg";

function Player2() {
  return (
    <>
      <div className="p2Container player">
        <img src={player2} alt="" srcset="" />
        <h2>Player 2</h2>
        <div className="counter">{0}</div>
      </div>
    </>
  );
}

export default Player2;
