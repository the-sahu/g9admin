import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails,  register, updateUser } from "../../actions/userActions";
import { USER_UPDATE_RESET } from "../../constants/userConstants";


const ClientsEdit = ({ history, match }) => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientId, setClientId] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [demate, setDemate] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankName, setBankName] = useState("");
  const [capital, setCapital] = useState("");
  const [netProfit, setNetProfit] = useState("");
  const [netLoss, setnetLoss] = useState("");
  const [segments, setSegments] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const userId = match.params.id;
  // console.log(userId);
  const userRegister = useSelector((state) => state.userRegister)
  const {
        loading: loadingCreate,
        error: createError ,
        success : successCreate,
        client : createdUser
  } = userRegister
  
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  // console.log(user);

  
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  
  useEffect(() => {
    if (!userInfo) {
        history.push("/login");
      }
      if (createdUser) {
        history.push("/client");
      }
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push("/client");
    } else {
      if (user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setClientId(user.clientId);
        setPhone(user.phone);
        setPan(user.pan);
        setDemate(user.demate);
        setBankAccount(user.bankAccount);
        setBankName(user.bankName);
        setCapital(user.capital);
        setNetProfit(user.netProfit);
        setnetLoss(user.netLoss);
        setSegments(user.segments);
        setImage(user.image);
        // console.log(description);
      }
    }
    // console.log(tags);
    // console.log(editorJsInstance);
  }, [dispatch, history, userId, user,successCreate,userInfo, successUpdate]);

  const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
  })
  

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axiosInstance.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
if(userId){
    dispatch(
      updateUser({
        _id: userId,
        name,
        email,
        password,
        clientId,
        phone,
        pan,
        demate,
        bankAccount,
        bankName,
        capital,
        netLoss,
        netProfit,
        segments,
        image,
        
      })
    );
}
else {
    dispatch(
      register(
        {name,
          email, 
          password,
          clientId,
          phone,
          pan,
          demate,
          bankAccount,
          bankName,
          capital,
          netProfit,
          netLoss,
          segments,
          image}
      )
    )
    console.log(name,
        email, 
        password,
        clientId,
        phone,
        pan,
      demate,
      bankAccount,
      segments,
      image);
  }
  
  };

    return (
        <div className=" bg-green-50 pb-24">
      <div className="py-5">
        <h1 className="text-center text-xl md:text-3xl text-primary-500 font-semibold">
          Clients
        </h1>
        <div className="h-px max-w-md my-2 bg-primary-300 mx-auto"></div>
      </div>
      <div className="max-w-4xl mx-auto px-5 bg-white shadow py-5">
        <div>
          <div className="md:max-w-4xl  mx-auto ">
            <div className=" md:mt-5 md:col-span-2">
              <form onSubmit={submitHandler}>
                <div className=" sm:rounded-md ">
                  <div className=" flex items-start space-x-10 justify-between">
                    <div className=" mb-4 md:w-1/2 w-full flex flex-col space-y-3 justify-between items-start">
                      <div className="rounded-md w-full ">
                        <label>Name</label>
                        <input
                          type="text"
                          
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter name.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>ClientId</label>
                        <input
                          type="text"
                          
                          value={clientId}
                          onChange={(e) => setClientId(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter clientID.."
                        />
                      </div>
                      
                      <div className="rounded-md w-full ">
                        <label>Email</label>
                        <input
                          type="email"
                          name="name"
                          id="name"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter Email.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Password</label>
                        <input
                          type="text"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter password.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Contact Number</label>
                        <input
                          type="number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter number.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Pan number</label>
                        <input
                          type="text"
                          value={pan}
                          onChange={(e) => setPan(e.target.value)}

                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter pan number.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Demate</label>
                        <input
                          type="text"
                        value={demate}
                      onChange={(e) => setDemate(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter demate number.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Account number</label>
                        <input
                          type="number"
                          value={bankAccount}
                          onChange={(e) => setBankAccount(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter bank account number.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Bank Name</label>
                        <input
                          type="text"
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter bank account name.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Segments</label>
                        <input
                          type="text"
                          value={segments}
                          onChange={(e) => setSegments(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter segments.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Capital Amount</label>
                        <input
                          type="number"
                          value={capital}
                          onChange={(e) => setCapital(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter capital amounts.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Net Profit</label>
                        <input
                          type="number"
                          value={netProfit}
                          onChange={(e) => setNetProfit(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter netprofit amounts.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Net Loss</label>
                        <input
                          type="number"
                          value={netLoss}
                          onChange={(e) => setnetLoss(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter netLoss amounts.."
                        />
                      </div>

                <label className=" text-sm font-medium  text-gray-700">
                  Profile photo
                </label>
                <div className="flex justify-center items-center   w-full pt-5 pb-6 border-2 bg-white h-48 border-gray-300 border-dashed rounded-md">
                {!image ? (
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <input
                          type="text"
                          placeholder="Enter image url"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                         className="sr-only"
                        />
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            onChange={uploadFileHandler}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG &amp; JPG to 2MB
                      </p>
                      <p className="text-xs text-gray-500">
                        Size: 400X400 pixels
                      </p>
                    </div>
                     ) : (
                        <div className="h-48 w-full pb-6 ">
                          <div
                            className="bg-gray-100 cursor-pointer p-2 w-8 h-8 "
                            onClick={(e) => setImage("")}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 pr-2 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                          </div>
                          <img
                            src={image}
                            className="h-full w-full  mx-auto object-cover object-center"
                          />
                        </div>
                      )}

                </div>

                    </div>
                  </div>
                
                  <div className=" py-1 font-bold flex items-end justify-end ">
                    <button className="flex items-center px-5 py-2 text-base font-medium leading-6 text-center text-white transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none">
                      Save
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

export default ClientsEdit
