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
         <h1 className="title">Корпоративный портал</h1>
  <StyledBtn
   action={handleChange} 
   text={'ВОЙТИ'} />
  </div>
)};

export default Login;