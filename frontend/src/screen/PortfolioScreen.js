import ScrollAnimation from "react-animate-on-scroll";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Moment from "react-moment";
import {
  deletePortfolio,
  listPortfolioByClientId,
} from "../actions/portfolioActions";
import { getUserDetails } from "../actions/userActions";
import { listSellPortfolioByClientId } from "../actions/sellPortfolioActions";

const PortfolioScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  
  const userId = userInfo._id;
  
  const userDetails = useSelector((state) => state.userDetails);
  const {  user } = userDetails;
  // console.log(user);


  const portfolioList = useSelector((state) => state.portfolioListByClientId);
  const { loading, error, clientPortfolios } = portfolioList;

  const sellportfolioList = useSelector((state) => state.sellportfolioListByClientId);
  const {  clientSellPortfolios } = sellportfolioList;
  // console.log(clientSellPortfolios);

  useEffect(() => {
    if (userInfo) {
      dispatch(listPortfolioByClientId(userInfo._id));
      dispatch(listSellPortfolioByClientId(userInfo._id));
    } else {
      history.push("/");
    }
    if(user._id !== userId) 
    dispatch(getUserDetails(userId));
     
  
  }, [dispatch, history, userInfo]);

  return (
    <div className="pb-24">
      {/* main cover */}
      <div
        className="relative py-10  overflow-hidden w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url(about.jpg)" }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-green-900 opacity-50"></div>
        <main className="px-5 lg:px-8  z-10 sm:max-w-3xl sm:mx-auto">
          <div className="text-center">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <h2 className="text-3xl mt-10 capitalize tracking-tight leading-10 font-medium sm:text-3xl text-white md:text-4xl">
                Your Stock Payment and P & L details
              </h2>
            </ScrollAnimation>
          </div>
        </main>
      </div>
      {/* main cover */}

      {/* details start */}
      <div>
        <div className="bg-primary-500 flex rounded-b-3xl flex-row justify-between items-center">
          <h1 className="text-lg text-white font-semibold font-sans  capitalize px-5 py-3">
            {userInfo.name}
          </h1>
          <h1 className="text-sm text-white font-normal font-sans  uppercase px-5 py-3">
            {userInfo.clientId}
          </h1>
        </div>
        <div className=" mt-4 items-center">
          <h1 className="text-xl text-center text-primary-500 font-semibold font-sans  uppercase px-5 py-3">
            stock trading details
          </h1>
          {/* <h1 className="text-sm text-white font-normal font-sans  uppercase px-5 py-3">JKD456</h1> */}
        </div>

        {/* table  */}

        <div className="mb-6 px-1 overflow-y-auto max-h-60">
          <table class="mt-2 overflow-y-auto max-h-48 w-full ">
            <thead class=" text-white bg-primary-500">
              <tr>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  SR <br /> .no
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  Date
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  stock <br /> name
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  buy <br /> price
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  buy
                  <br /> quatity
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  sell
                  <br /> quatity
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  sell
                  <br /> price
                </th>
              </tr>
            </thead>
            <tbody class="">
              {clientPortfolios &&
                clientPortfolios.map((portfolio, index) => (
                  <tr>
                    <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                      {++index}
                    </td>
                    <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                      <Moment format="L">{portfolio.date}</Moment>
                    </td>
                    <td class="  py-3 w-24 pl-1 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                      {portfolio.stockName}
                    </td>
                    <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                      {portfolio.buyPrice}
                    </td>
                    <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                      {portfolio.buyQty}
                    </td>
                    <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                      {portfolio.sellPrice}
                    </td>
                    <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                      {portfolio.sellQty}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* table 2  */}

        <div className="mb-6 px-1 overflow-y-auto max-h-60">
          <table class="mt-2 overflow-hidden w-full ">
            <thead class=" text-white bg-primary-500">
              <tr>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  SR <br /> .no
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  Date
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  stock <br /> name
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  Sell <br /> price
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  Sell
                  <br /> quatity
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  Buy
                  <br /> quatity
                </th>
                <th class="   truncate w-24 pl-2 capitalize text-left py-3 text-wrap   font-brand  font-bold text-xs border-gray-700 border">
                  buy
                  <br /> price
                </th>
              </tr>
            </thead>
            <tbody class="">
              {clientSellPortfolios && clientSellPortfolios.map((sellportfolio ,index) => (
              <tr key={sellportfolio._id}>
                <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                  {++index}
                </td>
                <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                <Moment format="L">{sellportfolio.date}</Moment>
                </td>
                <td class="  py-3 w-24 pl-1 text-center p-0 text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                  {sellportfolio.stockName}
                </td>
                <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                  {sellportfolio.sellPrice}
                </td>
                <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                  {sellportfolio.sellQty}
                </td>
                <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                  {sellportfolio.buyQty}
                </td>
                <td class="  py-3 w-24 pl-1 text-center text-wrap border border-gray-700 text-xs font-brand tracking-wide">
                  {sellportfolio.buyPrice}
                </td>
              </tr>
              ))}

            </tbody>
          </table>
        </div>
        <div className=" mt-4 items-center">
          <h1 className="text-xl text-center text-primary-500 font-semibold font-sans  uppercase px-5 py-3">
            Account status
          </h1>
          {/* <h1 className="text-sm text-white font-normal font-sans  uppercase px-5 py-3">JKD456</h1> */}
        </div>

        <div className="max-w-7xl px-2 overflow-hidden mb-6">
          <table class="mt-2 ">
            <thead class=" text-white ">
              <tr>
                <th class=" text-wrap w-32  truncate text-black font-bold text-left py-2 px-4 uppercase font-brand tracking-wide  text-xs border-gray-700 border">
                  Client capital
                </th>
                <th class=" text-wrap w-32  truncate text-left py-2 px-4 uppercase font-brand tracking-wide font-bold bg-primary-500 text-xs border-gray-700 border">
                  Net profit
                </th>
                <th class=" text-wrap w-32  truncate text-left py-2 px-4 font-bold uppercase font-brand tracking-wide  text-xs bg-red-600 border-gray-700 border">
                  net loss
                </th>
              </tr>
            </thead>
            <tbody class="">
              <tr>
                <td class=" text-center w-32 py-2 font-bold  px-4 border border-gray-700 text-sm font-brand tracking-wide">
                  {user.capital}
                </td>
                <td class=" text-center w-32 font-bold text-primary-500 py-2 px-4 border border-gray-700 text-sm font-brand tracking-wide">
                  {user.netProfit}
                </td>
                <td class=" text-center w-32 py-2 px-4 border border-gray-700 text-sm font-bold text-red-600 font-brand tracking-wide">
                  {user.netLoss}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* details ends */}
    </div>
  );
};

export default PortfolioScreen;
