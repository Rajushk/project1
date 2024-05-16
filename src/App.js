import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  const [islogin, setIsLogin] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar islogin={islogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Home islogin={islogin} />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Signup setIsLogin={setIsLogin} />} />
        <Route path="/dashboard" element={
          <PrivateRoute islogin={islogin}>
            <Dashboard />
          </PrivateRoute>

        } />
      </Routes>
    </div>
  );
}

export default App;
