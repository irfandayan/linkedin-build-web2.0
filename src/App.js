import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
