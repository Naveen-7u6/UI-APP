import React, { useState } from "react";
import { Icon } from "crayon-ui-kit";
export default function Forgot(props) {
  const [userData, setUserData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleForgot = (data) => [props.updateLog(true)];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!validateEmail(userData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (Object.keys(validationErrors).length === 0) {
      props.updateForsts(false);
      setUserData({
        email: "",
      });
      console.log("Form submitted:", userData);
    } else {
      setErrors(validationErrors);
    }
  };
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
  };
  const fullInput = {
    display: "inline-block",
    border: "1px solid #ccc",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    opacity: "0.8",
    width: "350px",
  };
  const inputc = {
    outline: "none",
    border: "none",
    marginLeft: "12px",
    display: "block",
    lineHeight: "1.2em",
    fontSize: "10pt",
    height: "30px",
    width: "330px",
  };
  const labelc = {
    marginLeft: "12px",
    marginBottom: "-5px",
    display: "block",
    fontSize: "10pt",
    color: "black",
  };

  return (
    <div>
      <h6 class="h6 fw-normal">
        <span>
          <Icon color="#000" name="lock" />
        </span>{" "}
        Forgot Password
      </h6>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-2 shadow-sm" style={fullInput}>
          <label style={labelc} for="email">
            Email ID
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            placeholder="@hdfc.com"
            style={inputc}
            onChange={handleOnChange}
          />
        </div>
        {errors.email && <div className="error">{errors.email}</div>}
        <br />
        <div className="form-check text-start">
          <label
            onClick={handleForgot}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Go back to Login
          </label>
          <span>
            <button
              className="btn btn-dark"
              disabled={userData.password === "" || userData.email === ""}
              style={{ marginLeft: "125px", width: "100px" }}
              type="submit"
            >
              Sign In
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
