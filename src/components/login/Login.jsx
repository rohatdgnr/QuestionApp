import Lottie from "lottie-react";
import React, { useContext } from "react";
import animationData from "../../animation.json";
import { appContext } from "../../context/AppContext";
import "./Login.css";

function Login() {
  const { setIsAppVisible } = useContext(appContext);

  function buttonClicked() {
    setIsAppVisible((prev) => !prev);
  }

  return (
    <div className="login">
      <Lottie animationData={animationData} loop={true} className="login-animation" />
      <p className="login-para">
        Welcome To The Question Game
      </p>
      <button onClick={buttonClicked} id="start">
        Start
      </button>
    </div>
  );
}

export default Login;
