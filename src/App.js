import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountUpDown from "./components/pages/CountUpDown";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Todo from "./components/pages/Todo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countapp" element={<CountUpDown />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
