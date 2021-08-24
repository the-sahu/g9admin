import React, {useEffect} from 'react'

import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
   
    useEffect(() => {
        // console. (userInfo.isAdmin);
      }, []);

    return (
        <div>
            {
                userInfo.isAdmin ? 
                <div>
                <h>Welcome to dashboard</h>
                </div>
                : 
                <div>
                <h>Welcome to abhishek</h>
                </div>
            }
        </div>
    )
}

export default Dashboard
