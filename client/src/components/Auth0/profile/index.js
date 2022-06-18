import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    console.log(user);
  }, []);
  if (isLoading) return <div>Loading...</div>;
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <p>Email: {user.email}</p>
      </div>
    )
  );
};

export default UserProfile;
