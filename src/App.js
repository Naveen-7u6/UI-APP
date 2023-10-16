import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import ResetPass from "./components/ResetPass";
import ResetPassMail from "./components/ResetPassMail";

function App() {
  const [reg, setReg] = useState(false);
  const [log, setLog] = useState(false);
  const [del, setDel] = useState(false);
  const [forsts, setForsts] = useState(true);
  const [regUserData, setRegUserData] = useState({});

  const updateForsts = (data) => {
    setForsts(data);
  };

  const updateDel = (data) => {
    setDel(data);
  };

  const updateLog = (data) => {
    setLog(data);
  };

  const updateReg = (data) => {
    setReg(data);
  };
  const updateUserReg = (data) => {
    setRegUserData(data);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
