import "./App.css";
import { useState } from "react";
import "./components/login/login.css";
import LoginForm from "./components/login/LoginForm";
import { Button } from "@material-ui/core";

function App() {
  const defaultUser = {
    username: "Admin",
    password: "admin123",
  };

  const [error, setError] = useState("");

  const [user, setuser] = useState({ username: "", password: "" });

  const signin = (details) => {
    if (
      details.username === defaultUser.username &&
      details.password === defaultUser.password
    ) {
      setuser({
        ...user,
        username: details.username,
        password: details.password,
      });
    } else {
      setError("invalid username/password!");
    }
  };

  const signOut = () => {
    setuser({ username: "", password: "" });
  };
  return (
    <div className="App">
      {user.username !== "" && user.password !== "" ? (
        <div className="home">
          <h3>YOU LOGGED IN! Welcome {user.username}</h3>
          <Button onClick={signOut} variant="contained">
            Logout
          </Button>
        </div>
      ) : (
        <LoginForm signin={signin} error={error} />
      )}
    </div>
  );
}

export default App;
