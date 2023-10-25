import React from "react";
import counterRed from "../assets/images/counter-red-large.svg";
import counterYellow from "../assets/images/counter-yellow-large.svg";

const Slot = ({ ch, y, x }) => {
  return (
    <>
      <div className="slot">
        {ch && (
          <img
            src={ch === "X" ? counterRed : counterYellow}
            width="100%"
            height="100%"
          />
        )}
      </div>
    </>
  );
};

// function Slot() {
//   return (
//     <>
//       <table>
//         <img src={counterRed} alt="" srcset="" />
//         <img src={counterYellow} alt="" srcset="" />
//       </table>
//     </>
//   );
// }

export default Slot;
