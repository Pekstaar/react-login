import React, { useState } from "react";
import "./login.css";
import TextField from "@material-ui/core/TextField";
import { Avatar, Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

const LoginForm = ({ signin, error }) => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(details);
    setDetails({ ...details, username: "", password: "" });
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <h2>Login</h2>
      </div>

      <form className="login-body" onSubmit={handleSubmit}>
        {error !== "" ? (
          <div className="error">{error}</div>
        ) : (
          <div style={{ height:"2.5em", margin: "0 auto" }} />
        )}

        {/* username field */}
        <div className="body-input">
          <div>
            <Avatar style={{ background: "gray" }} />
          </div>
          <TextField
            type="text"
            name="username"
            value={details.username}
            onChange={(event) =>
              setDetails({
                ...details,
                [event.target.name]: event.target.value,
              })
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
            value={details.password}
            onChange={(event) =>
              setDetails({
                ...details,
                [event.target.name]: event.target.value,
              })
            }
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
    </div>
  );
};

export default LoginForm;
