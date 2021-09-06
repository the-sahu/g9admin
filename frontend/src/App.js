

import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ClientsEdit from './screen/adminScreens/ClientsEdit';
import ClientsList from './screen/adminScreens/ClientsList';
import FundRequestScreen from './screen/adminScreens/FundRequestScreen';
import PortfolioList from './screen/adminScreens/PortfolioList';
import PortfolioEdit from './screen/adminScreens/PortfolioEdit';
import ClientPortfolioList from './screen/adminScreens/ClientPortfolioList';
import Dashboard from './screen/Dashboard';
import DemateScreen from './screen/DemateScreen';
import LoginScreen from './screen/LoginScreen';
import PortfolioScreen from './screen/PortfolioScreen';
import ProfileScreen from './screen/ProfileScreen';
import QrCode from './screen/QrCode';
import Withdraw from './screen/Withdraw';
import WithdrawRequestScreen from './screen/adminScreens/WithdrawRequestScreen';
import SellPortfolioList from './screen/adminScreens/SellPortfolioList';
import ClientSellPortfolioList from './screen/adminScreens/ClientSellPortfolioList';
import SellPortfolioEdit from './screen/adminScreens/SellPortfolioEdit';

const defaultScreens = () => (
  <>
    <Header />
      <Route path="/fundslist"  component={FundRequestScreen} exact/>
      <Route path="/withdrawrequest"  component={WithdrawRequestScreen} exact/>
      <Route path="/client"  component={ClientsList} exact/>
      <Route path="/client/:id/edit"  component={ClientsEdit} exact/>

      <Route path="/adminsellportfolio" component={SellPortfolioList} exact />
      <Route path="/adminportfolio" component={PortfolioList} exact />
    <Route
      path="/adminsellportfolio/:clientId"
      component={ClientSellPortfolioList}
      exact
    />
    <Route
      path="/adminportfolio/:clientId"
      component={ClientPortfolioList}
      exact
    />
    <Route
      path="/adminsellportfolio/:clientId/edit/:id"
      component={SellPortfolioEdit}
      exact
    />
    <Route
      path="/adminportfolio/:clientId/edit/:id"
      component={PortfolioEdit}
      exact
    />
    <Route
      path="/adminaddportfolio/:clientId"
      component={PortfolioEdit}
      exact
    />
    <Route
      path="/adminselladdportfolio/:clientId"
      component={SellPortfolioEdit}
      exact
    />
    
      <Route path="/addclients"  component={ClientsEdit} exact/>
   
    <Route path="/dashboard"  component={Dashboard} exact/>
    <Route path="/demate"  component={DemateScreen} exact/>
      <Route path="/profile"  component={ProfileScreen} exact/>
      <Route path="/portfolio"  component={PortfolioScreen} exact/>


    <Footer />
  </>
);
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/qrcode" component={QrCode} />
        <Route exact path="/withdraw" component={Withdraw} />
        <Route exact path="/login" component={LoginScreen} />
        {/* <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
        <Route
          exact
          path="/passwordreset/:resetToken"
          component={PasswordResetScreen}
        /> */}
        <Route component={defaultScreens} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;

