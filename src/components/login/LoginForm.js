import React, { useState } from "react";
import "./login.css";
import TextField from "@material-ui/core/TextField";
import { Avatar, Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import propTypes from "prop-types";

const LoginForm = (props) => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signin(details);
  };

  return (
    <form className="login-body" onSubmit={handleSubmit}>
      {/* username field */}
      <div className="body-input">
        <div>
          <Avatar style={{ background: "gray" }} />
        </div>
        <TextField
          type="text"
          name="username"
          onChange={(event) =>
            setDetails({ ...details, username: event.target.value })
          }
          required
          id="standard-required"
          label="username/email"
        />
      </div>

      {/* password field */}
      <div className="body-input">
        <div>
          <Avatar style={{ background: "gray" }}>
            <LockIcon />
          </Avatar>
        </div>
        <TextField
          type="password"
          name="password"
          required
          id="standard-required"
          label="password"
        />
      </div>

      {/* submit button */}
      <Button
        variant="contained"
        style={{ width: "45%" }}
        color="primary"
        type="submit"
      >
        login
      </Button>

      <div className="span">Have no Account?</div>
      <div
        style={{
          width: "40%",
          padding: "0 .4em",
          margin: "auto",
          marginTop: "2.5em",
        }}
      >
        <Button
          variant="contained"
          style={{
            background: "#3b5998",
            margin: "2px 0 5px 5px",
          }}
          color="primary"
        >
          facebook
        </Button>
        <Button
          variant="contained"
          style={{
            background: "#00acee",
            margin: "2px 0 5px 5px",
            color: "#fcfcfc",
          }}
        >
          twitter
        </Button>
      </div>
      <div className="footer">
        <a href="login.js">Forgot Password?</a>
      </div>
    </form>
  );
};

export default LoginForm;
