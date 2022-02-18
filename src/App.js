import { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { getUserAuth } from "./actions";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={[<Header />, <Home />]} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
