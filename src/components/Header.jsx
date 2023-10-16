import React from "react";
import { MayaLogo } from "crayon-ui-kit";

export default function Header(){
    return (
      <div
      style={{
        position: "absolute",
        top: "10%",
        left: "8%",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <MayaLogo />

      <br />

      <p>
        {" "}
        AI powered personalization engine dedicated to understand human
        taste.
      </p>
    </div>
    )
  }