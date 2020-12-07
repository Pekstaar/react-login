import "./App.css";
import { useState } from "react";
import "./components/login/login.css";
import LoginForm from "./components/login/LoginForm";

function App() {
  const defaultUser = {
    username: "Admin",
    password: "admin123",
  };

  const [error, setError] = useState(["error1"]);

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

      console.log(user);
    } else {
      setError(error.push("invalid details"));
    }
  };
  return (
    <div className="App">
      {user.username !== "" && user.password !== "" ? (
        <div className="home">
          <h3>YOU LOGGED IN! Welcome {user.username}</h3>
        </div>
      ) : (
        <LoginForm signin={signin} />
      )}
    </div>
  );
}

export default App;
