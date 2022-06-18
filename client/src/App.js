import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./components/Auth0/login";
// import LogoutButton from "./components/Auth0/logout";
// import UserProfile from "./components/Auth0/profile";
import LandingPage from "./components/Landing";

function App() {
  //   const { user } = useAuth0();
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
