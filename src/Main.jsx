import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Forgot from "./components/Forgot";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Slide from "./components/Slide";
import RegDone from "./components/RegDone";
import Login from "./components/Login";
import ForgotMail from "./components/ForgotMail";

function Main() {
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
  const imagediv = {
    height: "100vh",
  };
  const images = [ "image2.jpg", "image3.jpg", "image4.png"];

  return (
    <div className="container-fluid m-0 p-0">
      <div className="row m-0 p-0">
        <div
          className="col-md-8 d-none d-md-block m-0 p-0 image"
          style={imagediv}
        >
          <Slide style={{ height: "100vh" }} images={images} />
        </div>
        <div className="col-md-4 col-sm-12 p-0 m-0" style={imagediv}>
          <Header />
          <div style={{ position: "absolute", top: "35%", left: "8%" }}>
            {del ? (
              <></>
            ) : reg ? (
              <RegDone
                updateLog={updateLog}
                updateDel={updateDel}
                updateReg={updateReg}
                regUserData={regUserData}
              />
            ) : (
              <Registration
                updateUserReg={updateUserReg}
                updateReg={updateReg}
              />
            )}
            {del ? (
              log ? (
                <Login
                  updateLog={updateLog}
                  updateDel={updateDel}
                  updateReg={updateReg}
                />
              ) : forsts ? (
                <Forgot updateForsts={updateForsts} updateLog={updateLog} />
              ) : (
                <ForgotMail regUserData={regUserData} updateLog={updateLog} />
              )
            ) : (
              <></>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Main;
