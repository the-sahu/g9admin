import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWithdrawFund, withdrawList } from '../../actions/withdrawFundActions'


const WithdrawRequestScreen = ({history}) => {

    
  const dispatch = useDispatch()

  const withdrawFundList = useSelector((state) => state.withdrawFundList)
  const {funds} = withdrawFundList
  console.log(funds);
  
  const userDelete = useSelector((state) => state.userDelete)
  const { success:successDelete} = userDelete


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  useEffect(() => {
    // dispatch({type:CAREER_CREATE_RESET})
    
    if (userInfo) {
      dispatch(withdrawList())
    }
    else{
    history.push("/login");
    }
  }, [dispatch,history,userInfo,successDelete])


  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
        dispatch(deleteWithdrawFund(id));
      }
    
  };

    return (
        <div className="bg-primary-50 pb-24">
            <h1 className="text-xl text-center pt-5 font-semibold">All Fund add Request</h1>
        {/* table section start */}
        <div className="mb-6 px-1 overflow-x-auto w-full">
          <table class="mt-10 overflow-x-auto  mx-auto">
                <thead class=" text-white bg-primary-500">
                    <tr>
                        
                        
                        <th
                            class="   truncate w-24 px-4 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                        ClientId
                        </th>
                        <th
                            class="   truncate w-24 px-4 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                        OTP
                        </th>
                        <th
                            class="   truncate w-24 px-4 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                        Mobile number
                        </th>
                        <th
                            class="   truncate w-24 px-4 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                        Account Number
                        </th>
                        <th
                            class="   truncate w-24 px-4 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                        Amount
                        </th>
                        <th
                            class="   truncate w-24 px-4 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                        Action
                        </th>
                       
                        
                    </tr>
                </thead>
                <tbody class="w-full">
                    {funds && funds.map((fund) => (
                    <tr key={fund._id}>
                        
                        <td
                            class="  py-3 w-24 pl-1 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                        {fund.clientId}
                        </td>
                        <td
                            class="  py-3 w-24 pl-1 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                        {fund.otp}
                        </td>
                        <td
                            class="  py-3 w-24 pl-1 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                        {fund.number}
                        </td>
                        <td
                            class="  py-3 w-24 pl-1 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                        {fund.bankAccount}
                        </td>
                        <td
                            class="  py-3 w-24 pl-1 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                        {fund.amount}
                        </td>
                        <td
                            class=" flex justify-between py-3 w-24 px-4 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                        
                        
                        <button  onClick={() => deleteHandler(fund._id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-center   text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        </button>
                            
                        
                        </td>
                      
                       
                    </tr>

                    ))}
                        

                   
                </tbody>
            </table>
        </div>
        {/* table section ends */}

        </div>
    )
}

export default WithdrawRequestScreen
