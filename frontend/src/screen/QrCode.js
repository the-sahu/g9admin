import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

const QrCode = () => {
    return (
        <div >
             <div className="bg-primary-50">
            {/* <!-- component --> */}

  <div className="py-10">
      <div className="flex flex-row items-start justify-between  mx-auto px-5 border-b-2 uppercase border-primary-500">
          <div>
        <img src="logo.png" className="w-20 h-auto" />
          </div>
          <div>
            <p className="text-left pl-4 font-semibold text-lg w-full pb-1 ">Scan the QR Code for make payment</p>
          </div>
      </div>
        <div className="mt-5">    
            <img src="Sumit_sahu.jpg" className="mx-auto rounded-lg w-24 h-24 object-cover" alt="" />
            <p className="text-center text-xs capitalize pt-2">ClientID :- EDF125</p>
        </div>
      
        <div>   
        
            <img src="qr.png" className="mx-auto p-5 h-full w-full" alt="" />
           
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
