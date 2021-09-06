import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
   
    useEffect(() => {
        // console.log(userInfo.isAdmin);
      }, []);
    
    return (
        <div>
            <div className="px-2 w-full fixed bottom-0 bg-white border-t-2 border-primary-500 z-50 rounded-t-3xl">
            <div className="flex">
                {
                    userInfo.isAdmin ? <div className="flex-1 group">
                    <Link to="/withdrawrequest" className="flex items-end justify-center text-center mx-auto px-0 pt-2 w-full text-gray-800 group-hover:text-primary-600">
                        <span className="block px-1 pt-1 pb-1">
                            {/* <i className="far fa-home "></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-primary-500 text-center mx-auto w-8 text-2xl pt-1 mb-1 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                            <span className="block text-sm text-black font-semibold  pb-2">Withdrawl Request</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-primary-600 rounded-full"></span>
                        </span>
                    </Link>
                </div> : <div className="flex-1 group">
                    <a href="https://www1.nseindia.com/" target="_blank" className="flex items-end justify-center text-center mx-auto px-0 pt-2 w-full text-gray-800 group-hover:text-primary-600">
                        <span className="block px-1 pt-1 pb-1">
                            {/* <i className="far fa-home "></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-primary-500 text-center mx-auto w-8 text-2xl pt-1 mb-1 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                            <span className="block text-sm text-black font-semibold  pb-2">Live Market</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-primary-600 rounded-full"></span>
                        </span>
                    </a>
                </div>
                }
                {userInfo.isAdmin && 
                <div className="flex-1 group">
                <Link to="/adminsellportfolio" className="flex items-end justify-center text-center mx-auto px-0 pt-2 w-full text-gray-800 group-hover:text-primary-600">
                    <span className="block px-1 pt-1 pb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-primary-500 text-center mx-auto w-8 text-2xl pt-1 mb-1 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                        <span className="block text-sm text-black font-semibold pb-2">Sell Portfolio</span>
                        <span className="block w-5 mx-auto h-1 group-hover:bg-primary-600 rounded-full"></span>
                    </span>
                </Link>
            </div>
                }
                {userInfo.isAdmin ? 
                <div className="flex-1 group">
                    <Link to="/adminportfolio" className="flex items-end justify-center text-center mx-auto px-0 pt-2 w-full text-gray-800 group-hover:text-primary-600">
                        <span className="block px-1 pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-primary-500 text-center mx-auto w-8 text-2xl pt-1 mb-1 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                            <span className="block text-sm text-black font-semibold pb-2">Buy Portfolio</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-primary-600 rounded-full"></span>
                        </span>
                    </Link>
                </div>
                
            :
                <div className="flex-1 group">
                    <Link to="/portfolio" className="flex items-end justify-center text-center mx-auto px-0 pt-2 w-full text-gray-800 group-hover:text-primary-600">
                        <span className="block px-1 pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-primary-500 text-center mx-auto w-8 text-2xl pt-1 mb-1 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                            <span className="block text-sm text-black font-semibold pb-2">Portfolio</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-primary-600 rounded-full"></span>
                        </span>
                    </Link>
                </div>
            }
                {userInfo.isAdmin ? 
                <div className="flex-1 group">
                    <Link to="/fundslist" className="flex items-end justify-center text-center mx-auto px-0 pt-2 w-full text-gray-800 group-hover:text-primary-600">
                        <span className="block px-1 pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-primary-500 text-center mx-auto w-8 text-2xl pt-1 mb-1 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <span className="block text-sm text-black font-semibold pb-2">Funds Request</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-primary-600 rounded-full"></span>
                        </span>
                    </Link>
                </div>
                :
                <div className="flex-1 group">
                    <Link to="/demate" className="flex items-end justify-center text-center mx-auto px-0 pt-2 w-full text-gray-800 group-hover:text-primary-600">
                        <span className="block px-1 pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-primary-500 text-center mx-auto w-8 text-2xl pt-1 mb-1 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                            <span className="block text-sm text-black font-semibold pb-2">Demat</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-primary-600 rounded-full"></span>
                        </span>
                    </Link>
                </div>
            }

                {
                    userInfo.isAdmin ? 
                <div className="flex-1 group">
                    <Link to="/client" className="flex items-end justify-center text-center mx-auto px-0 pt-2 w-full text-gray-800 group-hover:text-primary-600">
                        <span className="block px-1 pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-primary-500 text-center mx-auto w-8 text-2xl pt-1 mb-1 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <span className="block text-sm text-black font-semibold pb-2"> All Clients  </span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-primary-600 rounded-full"></span>
                        </span>
                    </Link>
                </div>
                :
                <div className="flex-1 group">
                    <Link to="/profile" className="flex items-end justify-center text-center mx-auto px-0 pt-2 w-full text-gray-800 group-hover:text-primary-600">
                        <span className="block px-1 pt-1 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-primary-500 text-center mx-auto w-8 text-2xl pt-1 mb-1 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <span className="block text-sm text-black font-semibold pb-2"> Profile  </span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-primary-600 rounded-full"></span>
                        </span>
                    </Link>
                </div>
                }
            </div>
            </div>
        </div>
    )
}

export default Footer
