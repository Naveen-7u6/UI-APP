import React from "react";
import { Icon } from "crayon-ui-kit";
export default function RegDone(props) {
  const handleClick1 = (e) => {
    e.preventDefault();
    props.updateLog(false);
    props.updateDel(true);
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    props.updateDel(false);
    props.updateReg(false);
    
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.updateLog(true);
    props.updateDel(true);
  };
  const imagediv = {
    height: "100vh",
  };
  return (
    <div>
      <div>
        <div>
          <h6 class="h6 fw-normal">
            <span>
              <Icon color="#000" name="add-user" />
            </span>{" "}
            Request for access
          </h6>
        </div>
        <p style={{ marginLeft: "28px", paddingRight: "20px" }}>
          Thanks <b>{props.regUserData.name}</b> for you interest, We have{" "}
          <b> requested admin</b> to verify and approve. Watchout your email for
          email with magin link for us. <br /><br />You can also write to us at{" "}
          <b>admin@maya.ai</b>
        </p>
        <div>
          <p>
            <span
              onClick={handleClick1}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Lost your password
            </span>
          </p>
          <p>
            Not a Member Yet? &nbsp;
            <span
              onClick={handleClick2}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Signup
            </span>
          </p>
          <form onSubmit={handleOnSubmit}>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
