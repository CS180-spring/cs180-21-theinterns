import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LogoutPage, Title, LogoutButton } from "./Styles";
function Logout() {
  const navigate = useNavigate();

  function log() {
    navigate("/");
    window.location.reload();
  }

  function handleLogout() {
    fetch("http://localhost:4000/users/logout", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
    log();
  }

  return (
    <LogoutPage>
      <Title>Are you sure you want to log out?</Title>
      <LogoutButton onClick={handleLogout}>Click to Logout</LogoutButton>
    </LogoutPage>
  );
}

export default Logout;
