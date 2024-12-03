import React, { useState } from "react";
import table from "../assets/table.png";
import seat from "../assets/unknownPlayer.png";
import { useNavigate } from "react-router-dom";

function Room() {
  const today = new Date().toLocaleDateString();
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();

  const handlePlayerClick = (seat) => {
    setSelectedSeat(seat);
  };

  const handleConfirmation = (confirm) => {
    if (confirm) {
      navigate("/chat");
    }
    setSelectedSeat(null);
  };

  return (
    <div className="bg-mainBackground flex items-center justify-center min-h-screen">
      <div className="absolute top-10 left-10 text-mainFont font-primary">
        <div className="text-5xl font-bold ">Waiting Room</div>
        <div className="ml-3 mt-3">{today}</div>
      </div>
      <div>
        <div className="bg-mainBackground flex items-center justify-center min-h-screen">
          <div className="relative flex flex-col items-center">
            {/* Top Row */}
            <div className="flex items-center">
              {/* <img
                src={seat}
                alt="Player"
                className="w-90 h-90 mx-4 "
                onClick={() => handlePlayerClick("seat1")}
              /> */}
              <img src={table} alt="Table" className="w-80 h-90 mx-4" />
              {/* <img
                src={seat}
                alt="Player"
                className="w-90 h-90 mx-4"
                onClick={() => handlePlayerClick("seat2")}
              /> */}
            </div>
            {/* Bottom Player */}
            <div className="flex items-center mt-4">
              <img
                src={seat}
                alt="Player"
                className="w-15 h-24 mx-4 hover:opacity-75"
                onClick={() => handlePlayerClick("seat3")}
              />
            </div>
          </div>
        </div>
      </div>
      {selectedSeat && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-mainFont font-primary p-6  border-mainBackground border-4 rounded-2xl">
            <div className="text-lg font-bold mb-4 text-mainBackground">
              Do you want to join in this table?
            </div>
            <div className="flex justify-around">
              <button
                className=" w-12 h-12 bg-mainGreen text-mainBackground  rounded-2xl hover:bg-darkGreen hover:text-mainFont border-mainBackground border-4"
                onClick={() => handleConfirmation(true)}
              >
                Yes
              </button>
              <button
                className="bg-mainRed text-mainBackground w-12 h-12 rounded-2xl hover:bg-darkRed hover:text-mainFont border-mainBackground border-4 "
                onClick={() => handleConfirmation(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Room;
