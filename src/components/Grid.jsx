import React from "react";
import grid1 from "../assets/images/board-layer-black-large.svg";
import grid2 from "../assets/images/board-layer-white-large.svg";

import Slot from "./Slot";
import counterRed from "../assets/images/counter-red-large.svg";
import counterYellow from "../assets/images/counter-yellow-large.svg";

function Grid() {
  const Board = () => {
    const [board, setBoard] = useState([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ]);
  };
  //   const [currPlayer, setCurrPlayer] = useState("X");
  //   const [oppPlayer, setOppPlayer] = useState("O");
  //   const [gameOver, setGameOver] = useState(false);
  return (
    <>
      <div className="gridContainer">
        {/* {board.map((row, i) => {
          return row.map((ch, j)) => {
            return <Slot ch ={ch} y = {i} x = {j} />
          }
        })} */}
        <img src={grid1} alt="" srcset="" />
        <img src={grid2} alt="" srcset="" />
        {/* <div className="counter">
          <img src={counterRed} alt="" srcset="" />
        </div> */}
      </div>
    </>
  );
}

export default Grid;
