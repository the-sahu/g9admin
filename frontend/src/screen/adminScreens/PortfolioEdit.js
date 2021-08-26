import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPortfolioDetails,
  updatePortfolio,
  createPortfolio,
} from "../../actions/portfolioActions";
import { PORTFOLIO_UPDATE_RESET } from "../../constants/portfolioConstants";

const PortfolioEdit = ({ history, match }) => {
  const [date, setDate] = useState(new Date());
  const [stockName, setStockName] = useState("");
  const [buyPrice, setBuyPrice] = useState(0);
  const [buyQty, setBuyQty] = useState(0);
  const [sellQty, setSellQty] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);

  const dispatch = useDispatch();

  const portfolioId = match.params.id;
  const client = match.params.clientId;
  // console.log(portfolioId);

  const portfolioCreate = useSelector((state) => state.portfolioCreate);
  const {
    loading: loadingCreate,
    error: createError,
    success: successCreate,
    portfolio: createdPortfolio,
  } = portfolioCreate;

  const portfolioDetails = useSelector((state) => state.portfolioDetails);
  const { loading, error, portfolio } = portfolioDetails;
  // console.log(portfolio);

  const portfolioUpdate = useSelector((state) => state.portfolioUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = portfolioUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    if (createdPortfolio) {
      history.push("/admin/portfolio");
    }
    if (successUpdate) {
      dispatch({ type: PORTFOLIO_UPDATE_RESET });
      history.push("/admin/portfolio");
    } else {
      if (portfolio._id !== portfolioId) {
        dispatch(getPortfolioDetails(portfolioId));
      } else {
        setDate(portfolio.date);
        setStockName(portfolio.stockName);
        setBuyPrice(portfolio.buyPrice);
        setBuyQty(portfolio.buyQty);
        setSellQty(portfolio.sellQty);
        setSellPrice(portfolio.sellPrice);
      }
    }
    // console.log(tags);
    // console.log(editorJsInstance);
  }, [
    dispatch,
    history,
    portfolioId,
    portfolio,
    successCreate,
    userInfo,
    successUpdate,
  ]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (portfolioId) {
      dispatch(
        updatePortfolio({
          _id: portfolioId,
          date,
          stockName,
          buyPrice,
          buyQty,
          sellQty,
          sellPrice,
          client,
        })
      );
    } else {
      // console.log(
      //   date,
      //   stockName,
      //   buyPrice,
      //   buyQty,
      //   sellQty,
      //   sellPrice,
      //   client
      // );
      dispatch(
        createPortfolio({
          date,
          stockName,
          buyPrice,
          buyQty,
          sellQty,
          sellPrice,
          client,
        })
      );
    }
  };

  return (
    <div className=" bg-green-50 pb-24">
      <div className="py-5">
        <h1 className="text-center text-xl md:text-3xl text-primary-500 font-semibold">
          Portfolio
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
                        <label>Date</label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please Enter Stock Name"
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Stock Name</label>
                        <input
                          type="text"
                          value={stockName}
                          onChange={(e) => setStockName(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please Enter Stock Name"
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Buy Price</label>
                        <input
                          type="text"
                          value={buyPrice}
                          onChange={(e) => setBuyPrice(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter Buy Price.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Buy Qty</label>
                        <input
                          type="text"
                          value={buyQty}
                          onChange={(e) => setBuyQty(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please Enter Buy Quantity"
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Sell Price</label>
                        <input
                          type="text"
                          value={sellPrice}
                          onChange={(e) => setSellPrice(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter clientID.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label>Sell Qty</label>
                        <input
                          type="text"
                          value={sellQty}
                          onChange={(e) => setSellQty(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-gray-800 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                          placeholder="Please enter clientID.."
                        />
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
  );
};

export default PortfolioEdit;
