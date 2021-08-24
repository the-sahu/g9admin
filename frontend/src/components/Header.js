import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
  
    const logoutHandler = () => {
      dispatch(logout());
    };  
    return (
        <div>
            <div className="px-3 flex flex-row justify-between py-2 shadow">
                <div>
                    <Link to="/dashboard">
                    <img src="logo.png" className="h-12" alt=""/>
                    </Link>
                </div>
                
                    <button
                        onClick={logoutHandler}
                        class="flex items-center  justify-center px-2 h-10  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-400 hover:bg-primary-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >

                        Logout 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 ml-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        
                      </button>
                     

            </div>
        </div>
    )
}

export default Header
