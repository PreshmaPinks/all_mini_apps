import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./components/weatherApp/index";
import Home from "./components/home";
import Signup from "./components/login-registration/signup";
import Login from "./components/login-registration/login";
import Protected from "./components/login-registration/protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home />}></Route> */}

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<Protected />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/weatherapp" element={<WeatherApp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
