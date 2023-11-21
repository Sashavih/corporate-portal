import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Logout from "./components/Logout/Logout";
import User from "./components/User/User";
import Login from "./components/Login/Login";
import './components/User/User.scss';
import Form from "./components/Form/Form";


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <Login />
          <User/>
        </div>
      ) : (
        <div className="user-box">
            <User />
          <Logout />
          <h2 className="title">корпоративные командировки</h2>
        <Form/>
        </div>
      )}
    </div>
  );
}

export default App;
