import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Home = () => {
  const navigate = useNavigate();

  const takeMeToWeatherApp = () => {
    navigate("/weatherapp");
  };

  const handleLogOut = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home">
      <h1 onClick={takeMeToWeatherApp}>uu</h1>
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
};

export default Home;
