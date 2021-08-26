import React , {useEffect,useState,useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom';
import { getUserDetails } from '../actions/userActions';
import { createWithdrawFunds } from '../actions/withdrawFundActions';
const Withdraw = ({ history, match }) => {
    
  const dispatch = useDispatch();

  const [otp, setOtp] = useState("");
    const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  
  const formClientId = useRef()
    const clientBankAccount = useRef()

    const withdrawFundCreate = useSelector((state) => state.withdrawFundCreate)
    const {
          loading: loadingCreate,
          error: createError ,
          success : successCreate,
          funds 
    } = withdrawFundCreate
  
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
        if(successCreate){
            setAmount("");
            setOtp("");
            setNumber("");
        }
    // console.log(tags);
    
  }, [dispatch, userId, user,successCreate,userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

        const clientId = formClientId.current.value;
       const bankAccount= clientBankAccount.current.value;


    dispatch(
      createWithdrawFunds({
        clientId,
        otp,
        number,
        amount,
        bankAccount,
      })
    );
  };
    return (
        <div>
            {/* withdraw form start */}
            <div className=" px-4 my-auto mt-5">
            <div>
                <Link to="/profile"> 
                    <img src="logo.png" className="w-20 h-auto mx-auto" />
                </Link>
          </div>
            <div className="relative px-4 mt-2  bg-primary-50 shadow-lg my-auto py-10   rounded-3xl sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
               <form onSubmit={submitHandler}>
                    <div>
                    <h2 className="  text-primary-500 font-semibold">Please fill this form to Withdraw request....</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-5 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7">
                            
                            <div className="">
                                <label for="name" className="  pb-5 text-black text-sm  transition-all ">Clint ID</label>
                                <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-2 border-primary-500 text-gray-900 focus:outline-none " 
                                value={user.clientId} 
                                ref={formClientId}
                                 disabled placeholder="e.g. DJ153S" />
                            </div>
                            <div className="">
                                <label for="name" className="  pb-5 text-black text-sm  transition-all ">Enter OTP</label>
                                <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-2 border-primary-500 text-gray-900 focus:outline-none "
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="e.g. 1234" />
                            </div>
                            <div className="">
                                <label for="number" className="  pb-5 text-black text-sm  transition-all ">Contact Number</label>
                                <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-2 border-primary-500 text-gray-900 focus:outline-none "
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="13246-79845 " />
                            </div>
                            <div className="">
                                <label for="number" className="  pb-5 text-black text-sm  transition-all ">Account Number</label>
                                <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-2 border-primary-500 text-gray-900 focus:outline-none " 
                                value={user.bankAccount} 
                                ref={clientBankAccount}
                                disabled placeholder="Enter Ac No. " />
                            </div>
                            <div className="">
                                <label for="number" className="  pb-5 text-black text-sm  transition-all ">Amount</label>
                                <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-2 border-primary-500 text-gray-900 focus:outline-none focus:borer-rose-600"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount " />
                            </div>
                            {successCreate &&
                                <div>
                                <h2 className="  text-primary-500 ">Thank You for your request & Please wait sometime your request is in process ....</h2>
                                </div>
                            }
                            <div  className="relative pt-5">
                                <button className="flex items-center  justify-center px-2 w-32 mx-auto h-10  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-500  focus:shadow-outline focus:outline-none">Submit</button>
                            </div>
                            
                        </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
            {/* withdraw form ends */}
        </div>
    )
}

export default Withdraw
