import React from "react";
// import "./SocialLogin.css";
import google from "../../../Social icon/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate, useLocation } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="seperator-line w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="seperator-line w-50"></div>
      </div>

      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 mx-auto d-flex justify-start  my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" className="" />
          <span className="pl-12">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
