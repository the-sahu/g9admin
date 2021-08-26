import React , {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from '../actions/userActions';

const Dashboard = ({ history, match }) => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const {  userInfo } = userLogin;
   
  
    const userId = userInfo._id;
  
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    
    useEffect(() => {
        if (!userInfo) {
            history.push("/login");
          }
          
          else {
              if(user._id !== userId) 
              dispatch(getUserDetails(userId));
              
          }
          console.log(user);
      // console.log(tags);
      
    }, [dispatch, userId, user,userInfo]);
  

    return (
        <div>
            {
                userInfo.isAdmin ? 
                <div className="mx-auto py-24  text-center   ">
                <div>
                    <img src="sumit_sahu.jpg" className="mb-5  object-cover shadow-2xl h-48 rounded-full mx-auto w-48" alt=""/>
                </div>
                    <h className="text-xl  capitalize mt-5 font-bold">Welcome  Sachin</h>
            </div>
                : 
                <div className="mx-auto py-24  text-center   ">
                    <div>
                        <img src={user.image} className="mb-5 shadow-2xl h-48 rounded-full object-cover mx-auto w-48" alt=""/>
                    </div>
                <h className="text-xl  capitalize mt-5 font-bold">Welcome  {user.name}</h>
                </div>
            }
        </div>
    )
}

export default Dashboard
