import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import UserProfile from "./components/profile";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome!</p>
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
}

export default App;
