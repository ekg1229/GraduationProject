// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from "react-router-dom";

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import Signin from './pages/examples/Signin';
import Signup from './pages/examples/Signup';
import { Routes } from './routes';
import DashboardOverview from './pages/dashboard/DashboardOverview';
import DashboardLiveState from './pages/dashboard/DashboardLiveState';
import DashboardStat from './pages/dashboard/DashboardStat';
import ResetPassword from './pages/examples/ResetPassword';
import DashboardInfo from './pages/dashboard/DashboardInfo';

ReactDOM.render(
  <BrowserRouter>

    <Switch>
    <Route path="/login" exact component={Signin}/> 
    <Route path="/register" exact component={Signup}/>
    <Route path="/profile" exact component={ResetPassword}/>

    <Route path="/dashboard" exact component={DashboardOverview}/>
    <Route path="/liveState" exact component={DashboardLiveState}/>
    <Route path="/stat" exact component={DashboardStat}/>
    <Route path="/help" exact component={DashboardInfo}/>

    <Route path="/profile" exact component={ResetPassword} />
    </Switch>


    

  </BrowserRouter>,
  document.getElementById("root")
);



/*    <Route path="/">
    <Redirect to="/login" />
    </Route>  
    
*/