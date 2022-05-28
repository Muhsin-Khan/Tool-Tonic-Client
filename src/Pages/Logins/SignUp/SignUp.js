import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import "./Signup.css";

import SocialLogin from "../SocialLogin/SocialLogin";

import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../Hooks/useToken";

const SignUp = () => {
  
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
   
    const [updateProfile, updating, error] = useUpdateProfile(auth);

  // const [token] = useToken(user);
  // console.log(user)

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
    return <Loading></Loading>
}

  if (user) {
    navigate("/home");
  }

  

  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
    updateProfile(name);

    // console.log(name, email, password)

    // .then(result =>{
    //   const user = result.user;

    //   // console.log('getting...', user)
      
    // })
    
    // .catch(error=>{
    //   console.error(error)
    // })
    
  };
  return (
    <div className="signup-form body">
      <h3 className="mt-4 mb-3" style={{ textAlign: "center" }}>Sign Up</h3>
      
      {/* Sigun up form starts..... */}
      <form onSubmit={handleSignup}>
        <input type="text" name="name"  placeholder="Your Name" />
        <input type="email" name="email"  placeholder="Email Address" />
        <input type="password" name="password" placeholder="Password" />
        <input
          className="w-50 mx-auto btn btn-primary"
          type="submit"
          value="Sign Up"
        />
      </form>
      {/* Sigun up form ends..... */}

      
      {/* Login link For toggling to login page.......  */}
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-danger text-decoration-none pe-auto"
        >
          Please Login
        </Link>
      </p>

      {/* Social Login button........to login by social account (Google) */}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;