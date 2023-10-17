import React, { useState } from "react";
import { Icon } from "crayon-ui-kit";
export default function ResetPassMail(props) {
  const [reset, setReset] = useState(true);
  const [formData, setFormData] = useState({
    password: "",
    reEnterPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const containsUppercase = (str) => /[A-Z]/.test(str);
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const validationErrors = {};
    if (formData.password.length < 5) {
      validationErrors.password = "Password must be at least 5 characters long";
    }
    if (!containsUppercase(formData.password)) {
      validationErrors.password = "Password must contain at least one uppercase letter";
    }
    if (formData.password !== formData.reEnterPassword) {
      validationErrors.reEnterPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length === 0) {
      setReset(false);
      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };
  const Reseted = () => {
    return (
      <div>
        <h6>Reseted Successfully</h6>
      </div>
    );
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
  const { password, reEnterPassword } = formData;
  const isSubmitDisabled = password === "" || reEnterPassword === "";

  return (
    <div>
      {reset ? (
        <div>
          <h6 className="h6 fw-normal">
            <span>
              <Icon color="#000" name="clock-outline" />
            </span>{" "}
            Welcome {props.data} Set Reset Credentials
          </h6>
          <form onSubmit={handleSubmit}>
            <div className="mb-2 shadow-sm" style={fullInput}>
              <label style={labelc} for="password">
                New Password
              </label>
              <input
                type="password"
                id="floatingPassword"
                name="password"
                value={formData.password}
                placeholder="Password"
                style={inputc}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <br />
            <div className="mb-2 shadow-sm" style={fullInput}>
              <label style={labelc} for="Re-Enter Password">
                Re-Enter Password
              </label>
              <input
                type="password"
                id="floatingConfirmPassword"
                name="reEnterPassword"
                value={formData.reEnterPassword}
                placeholder="Re-Enter Credentials"
                style={inputc}
                onChange={handleChange}
              />

              {errors.reEnterPassword && (
                <div className="error">{errors.reEnterPassword}</div>
              )}
            </div>
            <br />
            <button
              className="btn btn-dark"
              disabled={isSubmitDisabled}
              style={{ marginLeft: "270px", width: "100px" }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <Reseted />
      )}
    </div>
  );
}
