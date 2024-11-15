import React, { useState, useRef, useEffect } from "react";

function Chat() {
  const today = new Date().toLocaleDateString();
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(true);

  const handleGenreSelect = (event) => {
    setSelectedGenre(event.target.value);
  };
  const handleOKclick = () => {
    if (selectedGenre) {
      console.log(`Selected Genre: ${selectedGenre}`);
      setIsChatOpen(false);
    } else {
      alert("Please select a genre before proceeding!!");
    }
  };

  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const handleSendMessage = () => {
    if (input.trim() === "") return;
    setMessage([...message, { text: input, sender: "You" }]);
    console.log(message);
    setInput("");
  };

  return (
    <div className="bg-mainBackground flex flex-col items-center justfy-center min-h-screen">
      <div className="absolute top-10 left-10 text-mainFont font-primary">
        <div className="text-5xl font-bold">Game Room</div>
        <div className="ml-3 mt-3">{today}</div>
      </div>
      {/* Messages List */}
      <div className="flex-1 flex flex-col overflow-y-auto p-4 space-y-3 mb-16 justify-end w-3/4 font-secondary">
        {message.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl ${
              message.sender === "You"
                ? "bg-mainFont text-mainBackground self-end"
                : "bg-mainBackground border-mainFont border-2 text-mainFont self-start"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Input box */}
      <div className="flex items-center justify-between fixed p-2 bottom-0 w-3/4 bg-mainFont mb-4 rounded-3xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here :)"
          className=" bg-mainFont placeholder-mainBackground font-secondary pl-6 w-[90%] focus:outline-none"
        />

        <div className="pr-6">
          <button
            onClick={handleSendMessage}
            className="bg-mainBackground text-white px-6  hover:bg-mainBlue hover:border-mainBackground font-primary border-mainGreen border-4 rounded-3xl "
          >
            Send
          </button>
        </div>
      </div>

      {isChatOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-mainBackground font-primary p-6 rounded-2xl shadow-lg border-mainGreen border-4">
            <div className="text-xl font-bold mb-4 text-mainFont ">
              What genre you want you play today?
            </div>
            <div className="flex items-center justify-around">
              <select
                className="bg-mainGreen rounded-xl text-mainBackground p-1"
                value={selectedGenre}
                onChange={handleGenreSelect}
              >
                <option value="" disabled>
                  Select a genre...
                </option>
                <option value="Detective">Detective</option>
                <option value="Puzzle">Puzzle</option>
              </select>
              <button
                className="bg-mainBackground w-12 h-12 border-mainBlue border-4 rounded-2xl text-mainGreen hover:text-mainBackground hover:bg-mainGreen"
                onClick={handleOKclick}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Chat;
