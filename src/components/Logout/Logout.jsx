import React from "react";
import StyledBtn from "../StyledBtn/StyledBtn";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const handleChange = ()=>{
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  return (
   <StyledBtn action={handleChange} text={'LOG OUT'} />
  );
};

export default LogoutButton;