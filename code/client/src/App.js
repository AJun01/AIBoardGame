//App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Room from "./pages/Room";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<h1>Home Page</h1>} />
        <Route path="/" element={<Login />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
