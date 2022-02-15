import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={[<Header />, <Home />]} />
      </Routes>
    </div>
  );
};

export default App;
