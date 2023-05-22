import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import AppUser from "./AppUser";
import AppLogin from "./AppLogin";

import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
const CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENT;
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        {localStorage.getItem("login") == "admin" ||
        localStorage.getItem("login") == "user" ? (
          <AppUser />
        ) : (
          <AppLogin />
        )}
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
