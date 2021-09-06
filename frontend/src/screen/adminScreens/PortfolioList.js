import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { deleteUser, listUsers } from "../../actions/userActions";

const PortfolioList = ({ history }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  console.log(users);

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    // dispatch({type:CAREER_CREATE_RESET})

    if (userInfo) {
      dispatch(listUsers());
    } else {
      history.push("/");
    }
  }, [dispatch, history, userInfo, successDelete]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="bg-primary-50 pb-24">
      {/* <div className="px-5 py-5">
        <Link
          to="/admin/addportfolio"
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
      </div> */}

      {/* table section start */}
      <div className="mb-6 px-1 overflow-x-auto w-full">
        <table class="mt-2 overflow-x-auto  mx-auto">
          <thead class=" text-white bg-primary-500">
            <tr>
              <th class="   truncate w-24 pl-2 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                Client Name
              </th>
              <th class="   truncate w-24 pl-2 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                ClientId
              </th>
              <th class="   truncate w-24 pl-2 uppercase text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-900 border">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="w-full">
            {users &&
              users.map((client) => (
                <tr key={client._id}>
                  <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                    {client.name}
                  </td>
                  <td class="  py-3 w-24 pl-1 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                    {client.clientId}
                  </td>
                  <td class=" flex justify-between py-3 w-24 px-4 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                    <Link to={`adminportfolio/${client._id}/`}>
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

export default PortfolioList;
