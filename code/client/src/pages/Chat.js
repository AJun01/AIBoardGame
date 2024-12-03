import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function Chat() {
  const today = new Date().toLocaleDateString();
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const [cumulativeChoice, setCumulativeChioce] = useState("");

  const handleGenreSelect = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleOKclick = async () => {
    if (!selectedGenre) {
      alert("Plz select a genre before proceeding!");
      return;
    }
    console.log(`Selected Genre: ${selectedGenre}`);
    try {
      const response = await fetch("http://localhost:8080/api/v1/gametype", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ game_type: selectedGenre }),
      });
      if (!response.ok) {
        console.error("Response error:", response.status, response.statusText);
        alert("Error communicating with server.");
        return;
      }
      const genreMessage = await response.text();
      console.log("Genre response received: ", genreMessage);

      setMessage((prevMessage) => [
        ...prevMessage,
        { text: genreMessage, sender: "System" },
      ]);
      setIsChatOpen(false);
    } catch (error) {
      console.error("Fetch failed", error.message);
      alert("Failed to connect to the server");
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "You" };
    setMessage((prevMessages) => [...prevMessages, newMessage]);

    const updatedChoice = cumulativeChoice
        ? `${cumulativeChoice};${input.trim()}`
        : input.trim();
    setCumulativeChioce(updatedChoice);

    setInput("");
    try {
      const response = await fetch("http://localhost:8080/api/v1/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice: updatedChoice }),
      });

      if (!response.ok) {
        console.error(
            "Failed to send message:",
            response.status,
            response.statusText
        );
        alert("Error communicating with server!");
        return;
      }

      const serverMessage = await response.text();
      console.log("Server response:", serverMessage);

      // 显示服务器返回的消息
      setMessage((prevMessages) => [
        ...prevMessages,
        { text: serverMessage, sender: "System" },
      ]);
    } catch (error) {
      console.error("Fetch failed:", error.message);
      alert("Failed to connect to the server.");
    }
  };

  return (
      <div className="bg-mainBackground flex flex-col items-center justify-center min-h-screen">
        <div className="fixed top-10 left-10 text-mainFont font-primary">
          <div className="text-5xl font-bold">Game Room</div>
          <div className="ml-3 mt-3">{today}</div>
        </div>

        {/* Messages List */}
        <div className="flex-1 flex flex-col overflow-y-auto p-4 space-y-3 mt-24 mb-16 justify-end w-3/4 font-secondary">
          {message.map((message, index) => (
              <div
                  key={index}
                  className={`p-3 rounded-xl ${
                      message.sender === "You"
                          ? "bg-mainFont text-mainBackground self-end"
                          : "bg-mainBackground border-mainFont border-2 text-mainFont self-start"
                  }`}
              >
                {/* Wrap messages with pre and Markdown */}
                <pre className="whitespace-pre-wrap text-sm">
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </pre>
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
              className="bg-mainFont placeholder-mainBackground font-secondary pl-6 w-[90%] focus:outline-none"
          />

          <div className="pr-6">
            <button
                onClick={handleSendMessage}
                className="bg-mainBackground text-white px-6 hover:bg-mainBlue hover:border-mainBackground font-primary border-mainGreen border-4 rounded-3xl"
            >
              Send
            </button>
          </div>
        </div>

        {isChatOpen && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-mainBackground font-primary p-6 rounded-2xl shadow-lg border-mainGreen border-4">
                <div className="text-xl font-bold mb-4 text-mainFont">
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