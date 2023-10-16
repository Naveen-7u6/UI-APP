import React from "react";
export default function Slide(props) {
  const divStyle = {
    position: "relative",
    backgroundImage: `url(${props.image})`,
    height: "100vh",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
  };
  return (
    <div style={divStyle}>
      <div
        style={{
          position: "absolute",
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h5>Engage Studio </h5>
        <p>AI Powered Personalization engine dedicated to understanding human </p>
      </div>
    </div>
  );
}
