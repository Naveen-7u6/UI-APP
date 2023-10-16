import React, { useState } from "react";
import { Icon } from "crayon-ui-kit";
import ResetPassMail from "./ResetPassMail";
import ResetPass from "./ResetPass";
export default function ForgotMail(props) {
  const [resetC, setResetC] = useState(false);
  const [resetCM, setResetCM] = useState(true);

  function handleClick1() {
    props.updateLog(true);
  }
  function handleOnSubmit1() {
    setResetC(true);
  }
  function handleOnSubmit2() {
    setResetCM(false);
  }

  return (
    <div>
      {resetCM?(resetC ? (
        <ResetPassMail data={props.regUserData.name}/>
      ) : (
        <div style={{ paddingRight: "20px" }}>
          <h6 class="h6 fw-normal">
            <span>
              <Icon color="#000" name="lock" />
            </span>{" "}
            Forgot Password
          </h6>
          <p style={{ marginLeft: "28px", marginTop: "2px" }}>
            Email has been sent to you inbox (<b>{props.regUserData.email}</b>)
            with magic link to reset your credential.
          </p>
          <br />
          <p style={{ marginLeft: "28px" }}>
            Reset magic link is valid for next 30 minutes.
          </p>
          <br />
          <br />
          <p style={{ marginLeft: "28px" }}>
            Go back to{" "}
            <span
              onClick={handleClick1}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Login
            </span>
          </p>
          <p>
            <form
              onSubmit={handleOnSubmit1}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <button type="submit">Reset Credentials via Mail</button>
            </form>
            <form
              onSubmit={handleOnSubmit2}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <button type="submit">Reset Credentials</button>
            </form>
          </p>
        </div>
      )):<ResetPass data={props.regUserData.name}/>}
    </div>
  );
}
