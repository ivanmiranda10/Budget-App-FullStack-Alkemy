import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../Auth0/profile";
import LoginButton from "../Auth0/login";
import LogoutButton from "../Auth0/logout";

const LandingPage = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Bienvenido {isAuthenticated ? user.name : "!"}</h1>
      <header>
        {isAuthenticated ? (
          <>
            <UserProfile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
};

export default LandingPage;
