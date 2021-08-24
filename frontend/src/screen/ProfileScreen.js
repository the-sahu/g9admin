import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ProfileScreen = () => {

    const [open, setOpen] = useState(false);
    
    const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

    return (
        <div className="pb-24">
            <div className="flex border-b-4 border-primary-500 shadow-md px-4  py-4 flex-row justify-between items-center">
                <div>
                    <h1 className="text-xl font-sans font-semibold">Sachin Patil</h1>
                    <h1 className="text-sm">UCLS123</h1>
                </div>
                <div>
                    <img src="Sumit_sahu.jpg" className="rounded-full w-24 h-24 object-cover" alt="" />
                </div>
            </div>
            <div className="border-b-2 border-primary-500 pb-3">
            <p className="text-lg text-primary-500 font-semibold px-4  pt-4">Personal Details</p>
                
                <div className="flex justify-between px-4  py-3">
                    <p className="text-lg">Email</p>
                    <p className="text-base font-semibold">test@test.com</p>
                </div>
                <div className="flex justify-between px-4 py-3">
                    <p className="text-lg">Phone</p>
                    <p className="text-base font-semibold">+91 12345-56789</p>
                </div>
                <div className="flex justify-between px-4 py-3">
                    <p className="text-lg">PAN</p>
                    <p className="text-base font-semibold">DCF65FCF</p>
                </div>
                <div className="flex justify-between px-4 py-3">
                    <p className="text-lg">DEMATE</p>
                    <p className="text-base font-semibold">12345678989</p>
                </div>
            </div>
            <div className="border-b-2 border-primary-500 pb-3">
                    <p className="text-lg text-primary-500 font-semibold px-4 py-4 ">Bank Accounts</p>
                
                <div className="flex justify-between px-4  ">
                    <p className="text-lg">State Bank Of India</p>
                    <p className="text-base font-semibold">13245</p>
                </div>
            </div>
            <div className="border-b-2 border-primary-500 pb-3">
                    <p className="text-lg text-primary-500 font-semibold px-4 py-4 ">Segments</p>
                
                <div className="flex justify-between px-4  ">
                    <p className="text-lg">NSE, BSE, Nifty, banknifty, MCX, option, future</p>
                    {/* <p className="text-base font-semibold">13245</p> */}
                </div>
            </div>

            {/* withdraw and funds add buttons start */}
            <div className="grid grid-cols-2 gap-4 pt-5 px-4 pb-5">
                <div>
                    <Link
                        onClick={onOpenModal}
                        class="flex items-center  justify-center px-2 h-10  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-500 hover:bg-primary-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >

                         Add Funds 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 ml-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        
                      </Link>
                </div>

                    <Modal open={open} onClose={onCloseModal} center >
                        <div className=" w-full bg-transparent">
                           
                        {/* form start */}
                        
                            <div className="   flex flex-col justify-center sm:py-12">
                                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-xl sm:rounded-3xl">
                                    </div>
                                    <div className="relative px-4 py-10   rounded-3xl sm:rounded-3xl sm:p-20">
                                        <div className="max-w-md mx-auto">
                                            <div>
                                            <h2 className=" capitalize text-white font-semibold">Please fill this is form to Funds Add</h2>
                                            </div>
                                            <div className="divide-y divide-gray-200">
                                                <div className="py-5 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7">
                                                    <div className="">
                                                        <label for="name" className="  pb-5 text-black text-sm  transition-all ">Name</label>
                                                        <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Full Name" />
                                                    </div>
                                                    <div className="">
                                                        <label for="name" className="  pb-5 text-black text-sm  transition-all ">Clint ID</label>
                                                        <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="e.g. DJ153S" />
                                                    </div>
                                                    <div className="">
                                                        <label for="number" className="  pb-5 text-black text-sm  transition-all ">Contact Number</label>
                                                        <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="13246-79845 " />
                                                    </div>
                                                    <div className="">
                                                        <label for="number" className="  pb-5 text-black text-sm  transition-all ">Account Number</label>
                                                        <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Enter Ac No. " />
                                                    </div>
                                                    <div className="">
                                                        <label for="number" className="  pb-5 text-black text-sm  transition-all ">Amount</label>
                                                        <input autocomplete="off" id="name" name="name" type="text" className="peer rounded-lg pl-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Enter amount " />
                                                    </div>
                                                    <Link to="/qrcode">
                                                    <div  className="relative pt-2">
                                                        <button className="flex items-center  justify-center px-2 w-32 mx-auto h-10  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black  focus:shadow-outline focus:outline-none">Submit</button>
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* form ends */}

                         </div>
                    </Modal>

                    {/* add funds form end */}
                <div>
                    <Link
                        to="/withdraw"
                        class="flex items-center  justify-center px-2 h-10  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black  focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >

                        Withdraw 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 ml-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        
                      </Link>
                </div>
            </div>
            {/* withdraw and funds add buttons ends */}
        </div>
    )
}

export default ProfileScreen
