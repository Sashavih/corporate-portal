import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './User.scss';
import profile from '../../static/user.png';

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <span class="loader"></span>;
  }

  return (
    isAuthenticated && (
      <>
      {/* <h2 className="title">{user.nickname}</h2> */}
      <img 
      src={profile} 
      alt="profile-pic"
      className="profile-pic"></img>
        {/* <p >{user.email}</p> */}
        </>
    )
  );
};

export default User;