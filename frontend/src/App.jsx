import "./App.css";
import NewUser from "./components/newuser/NewUser";
import LoginUser from "./components/loginUser/LoginUser";
import SecureData from "./components/secureData/SecureData";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="register" element={<NewUser />} />
        <Route path="login" element={<LoginUser />} />
        <Route path="secure" element={<SecureData />} />
      </Routes>
    </div>
  );
}

export default App;
