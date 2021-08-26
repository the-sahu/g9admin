import React , {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom';
import { getUserDetails } from '../actions/userActions';

const QrCode = ({ history, match }) => {

  const dispatch = useDispatch();
  
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
//   console.log(userInfo);
  
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
        <div >
             <div className="bg-primary-50">
            {/* <!-- component --> */}

  <div className="py-10">
      <div className="flex flex-row items-start justify-between  mx-auto px-5 border-b-2 uppercase border-primary-500">
          
          <Link to="/profile">
            <div>
          <img src="logo.png" className="w-20 h-auto" />
          </div>
          </Link>
          <div>
            <p className="text-left pl-4 font-semibold text-lg w-full pb-1 ">Scan the QR Code for make payment</p>
          </div>
      </div>
        <div className="mt-5">    
            <img src={user.image} className="mx-auto rounded-lg w-24 h-24 object-cover" alt="" />
            <p className="text-center text-xs capitalize pt-2">ClientID :- {user.clientId}</p>
        </div>
      
        <div>   
        
            <img src="qr1.jpg" className="mx-auto p-5 h-full w-full" alt="" />
           
            <p className="text-center text-xs capitalize pt-2">All related banks payments are accepted*</p>
        </div>
        
        <div>   
            <img src="bankslogos1.png" className="mx-auto p-5 h-full w-full" alt="" />
        </div>

  </div>
</div>
        </div>
    )
}

export default QrCode
