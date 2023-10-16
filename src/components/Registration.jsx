import React, { useState } from "react";
import { Icon } from "crayon-ui-kit";
export default function Registration(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = userData;

  const isSubmitDisabled = name === "" || email === "" || message === "";
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
    if (!userData.name || !userData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userData.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!userData.message || !userData.message.trim()) {
      validationErrors.message = "Message is required";
    }
    if (Object.keys(validationErrors).length === 0) {
      props.updateReg(true);
      props.updateUserReg(userData);
      setUserData({
        name: "",
        email: "",
        request: "",
      });
      console.log("Form submitted:", userData);
    } else {
      setErrors(validationErrors);
    }
  };
  const formWrapper = {
    margin: "10px",
  };
  const fullInput = {
    display: "inline-block",
    border: '1px solid #ccc',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)', 
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
      <h6 class="h6 fw-normal">
        <span>
          <Icon color="#000" name="add-user" />
        </span>{" "}
        Request for access
      </h6>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-2 shadow-sm" style={fullInput}>
          <label style={labelc} for="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={userData.name}
            placeholder="Full Name"
            style={inputc}
            onChange={handleOnChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <br />
        <div className="mb-2 shadow-sm" style={fullInput}>
          <label style={labelc} for="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            placeholder="@hdfc.com"
            style={inputc}
            onChange={handleOnChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <br />
        <div className="mb-2 shadow-sm" style={fullInput}>
          <label style={labelc} for="message">
            Message
          </label>
          <textarea
            name="message"
            value={userData.message}
            placeholder="Breif your requirments & Approval"
            style={{
              height: "60px",
              outline: "none",
              border: "none",
              marginTop: "5px",
              marginLeft: "13px",
              display: "block",
              lineHeight: "1.2em",
              fontSize: "10pt",
              width: "330px",
            }}
            onChange={handleOnChange}
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <br />
        <div className="form-check text-start" style={checkbox}>
          <input
            className="form-check-input mt-3"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label mt-2">Send me an email copy</label>
          <button
            className="btn btn-dark"
            disabled={isSubmitDisabled}
            style={{ marginLeft: "75px", width: "90px" }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
