import React, { useState } from "react";
import { PageDiv, Login } from "./Styles";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUser = (e) => {
    setUserName(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  function login() {
    navigate("/");
    window.location.reload();
  }

  const HandleSubmit = (e) => {
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        login();
        console.log("Token:", data.token);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
    setPassword("");
    setUserName("");
    e.preventDefault();
  };

  return (
    <PageDiv>
      <Login onSubmit={HandleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={handleUser}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePass}
          required
        />
        <button type="submit">Login</button>
        <div className="register">
          <h4>Not a member?</h4>
          <h3 onClick={() => navigate("/Register")}>Create an account</h3>
        </div>
      </Login>
    </PageDiv>
  );
}

export default LoginPage;
