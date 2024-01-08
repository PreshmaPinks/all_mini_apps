import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e && e.preventdefault();

    console.log("email", email, password);

    // Check if the user is already logged in
    const currentUser = auth.currentUser;
    if (currentUser) {
      navigate("/");
      return;
    }

    console.log("");

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //     navigate("/");
    //   })
    //   .catch((error) => console.log(error));

    const timeout = setTimeout(() => {
      // Cancel the asynchronous operation if it has not completed within 10 seconds.
      console.log("Asynchronous operation timed out.");
    }, 10000);

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("email", email, "password", password);
      const user = userCredentials.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      clearTimeout(timeout);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>signUp</h1>
      <form onSubmit={() => handleSubmit()} className="signup-form">
        <input
          type="email"
          placeholder="your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" className="signup-button">
          signup
        </button>
      </form>
      <p>
        login?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
