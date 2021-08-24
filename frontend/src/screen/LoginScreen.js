import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";



const LoginScreen = ({ location, history }) => {
  const [clientId, setclientId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  
  useEffect(() => {
    if ((userInfo)) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(clientId, password));
  };

    return (
        <div>
        <div>
            {/* <!-- component --> */}

  <div className="min-h-screen sm:flex sm:flex-row  mx-0 justify-center">
      <div className="flex-col flex  self-center pt-10 sm:max-w-5xl xl:max-w-2xl  z-10">
       <img  src="loginpng.jpg"/>
      </div>
      <div className="flex justify-center self-center  z-10">
        <div className="p-7 bg-white mx-auto shadow-lg rounded-2xl w-100 ">
        <img src="logo.png" className="w-auto mx-auto h-10"/>
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-center text-gray-800">Sign In </h3>
              {/* <p className="text-gray-500">Please sign in to your account.</p> */}
            </div>
            <form onSubmit={submitHandler}>
            <div className="space-y-5">
              <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">UserID</label>
              <input 
              value={clientId}
              required
              onChange={(e) => setclientId(e.target.value)}
              className=" w-full text-base px-4 py-2 border  border-primary-500 rounded-lg focus:outline-none focus:border-primary-800" type="" placeholder=" e.g. ED456S" />
              </div>
                          <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input 
              type="password"
              required
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              className="w-full content-center text-base px-4 py-2 border  border-primary-500 rounded-lg focus:outline-none focus:border-primary-800" type="" placeholder="*********" />
            </div>

            <div>
              
              
              <button type="submit"
               className="w-full flex justify-center bg-primary-500  hover:bg-primary-600 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
              
            </div>
            </div>
            </form>
        </div>
      </div>
  </div>
</div>
        </div>
    )
}

export default LoginScreen
