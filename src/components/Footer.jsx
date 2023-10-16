import React from "react";
import { CrayonLogo } from "crayon-ui-kit";
export default function Footer() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "90%",
          left: "8%",
          border: "3px solid white",
          borderRadius: "10%",
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CrayonLogo name="MonogramLogo" size="38" />
      </div>
      <div style={{ width: "90px" }}>
        <p
          style={{
            fontSize: "12px",
            position: "absolute",
            top: "90%",
            left: "20%",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          © 2020 All Rights Reserved by crayon data ptv ltd and it's registered
          trademark maya.ai
        </p>
      </div>
    </div>
  );
}
