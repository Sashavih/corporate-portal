import React from "react";
import './Login.scss';
import StyledBtn from "../StyledBtn/StyledBtn";
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
    const { loginWithRedirect } = useAuth0(); 
    const handleChange = () => {
        loginWithRedirect();
    }
  return (
    <div
     className="login-box">
  <StyledBtn
   action={handleChange} 
   text={'LOGIN'} />
  </div>
)};

export default Login;