import React, { useState } from "react";
import { Icon } from "crayon-ui-kit";
export default function Login(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
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
  const handleForgotSign = (e) => {
    e.preventDefault();
    props.updateLog(true);
    props.updateDel(true);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (userData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(validationErrors).length === 0) {
      setUserData({
        email: "",
        password: "",
      });
      console.log("Form submitted:", userData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleForgot = () => {
    props.updateLog(false);
  };

  const formWrapper = {
    margin: "10px",
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

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
  };
  const checkbox = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-2 shadow-sm" style={fullInput}>
          <label style={labelc} for="email">
            Login
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            placeholder="Email Id"
            style={inputc}
            onChange={handleOnChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <br />
        <div className="mb-2 shadow-sm" style={fullInput}>
          <label style={labelc} for="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            placeholder="Credentials"
            style={inputc}
            onChange={handleOnChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <br />
        <div className="form-check text-start">
          <input
            className="form-check-input mt-3"
            type="checkbox"
            style={{ backgroundColor: "black" }}
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label mt-2" htmlFor="flexCheckDefault">
            Remember me
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
        <br />
      </form>
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
            Request Access
          </span>
        </p>
        
      </div>
    </div>
  );
}
