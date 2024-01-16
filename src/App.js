import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import User from "./components/User/User";
import { Route, Routes, Link } from "react-router-dom"
import Loader from "./components/Loader/Loader";


function App({pressed}) {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <Login />
        </div>
      ) : (
        <>
          <Header/>
          <Routes>
         <Route path="/" />
        <Route path="/header" element={<Header/>} />
        <Route path="/form"  element={<Form/>} />
        <Route path="/profile" element={<Profile/>} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
        </>
      )}
        
    </div>
  );
}

export default App;
