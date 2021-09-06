import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Moment from "react-moment";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
  deleteSellPortfolio,
  listSellPortfolioByClientId,
} from "../../actions/sellPortfolioActions";

const ClientSellPortfolioList = ({ history, match }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const clientId = match.params.clientId;

  const sellportfolioList = useSelector((state) => state.sellportfolioListByClientId);
  const { loading, error, clientSellPortfolios } = sellportfolioList;
  console.log(clientSellPortfolios);

  const sellportfolioDelete = useSelector((state) => state.sellportfolioDelete);
  const { success: successDelete } = sellportfolioDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    // dispatch({type:CAREER_CREATE_RESET})
    console.log(clientId);

    if (userInfo) {
      dispatch(listSellPortfolioByClientId(clientId));
    } else {
      history.push("/");
    }
  }, [dispatch, history, userInfo, successDelete]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const deleteHandler = (id) => {
    dispatch(deleteSellPortfolio(id));
  };

  return (
    <div className="bg-primary-50 pb-24">
      <div className="px-5 py-5">
        <Link
          to={`/adminselladdportfolio/${clientId}`}
          class="flex items-center w-32  justify-center px-2 h-10  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black  focus:shadow-outline focus:outline-none"
          aria-label="Sign up"
          title="Sign up"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          New
        </Link>
      </div>

      {/* table section start */}
      <div className="mb-6 px-1 overflow-x-auto w-full">
        <table class="mt-2 overflow-x-auto  mx-auto">
          <thead class=" text-white bg-primary-500">
            <tr>
              <th class="   truncate w-24 pl-2 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                Stock Name
              </th>
              <th class="   truncate w-24 pl-2 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                Date
              </th>
              <th class="   truncate w-24 pl-2 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="w-full">
            {clientSellPortfolios &&
              clientSellPortfolios.map((client) => (
                <tr key={client._id}>
                  <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                    {client.stockName}
                  </td>
                  <td class="  py-3 w-24 pl-1 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                    <Moment format="L">{client.date}</Moment>
                  </td>
                  <td class=" flex justify-between py-3 w-24 px-4 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                    <Link to={`edit/${client._id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </Link>

                
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => deleteHandler(client._id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* table section ends */}
    </div>
  );
};

export default ClientSellPortfolioList;
