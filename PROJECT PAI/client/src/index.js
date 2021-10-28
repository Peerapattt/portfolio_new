/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Home from "views/index-sections/Home";
import About from "views/index-sections/About";
import Condition from "views/index-sections/Condition";
import ShowWork from "views/index-sections/ShowWork";
import From from "views/index-sections/From.js"
import Edit from "views/index-sections/Edit";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      
      <Route  path = "/index">
            <Home/>
            <IndexNavbar />
            </Route>
            

            <Route  path = "/About">
            <About/>
            <IndexNavbar />
            </Route>

            <Route exact path = "/Condition">
            <Condition/>
            <IndexNavbar />
            </Route>

            <Route exact path = "/From">
            <From/>
            <IndexNavbar />
            </Route>

            <Route exact path = "/ShowWork">
            <ShowWork/>
            <IndexNavbar />
            </Route>

            <Route  exact path = "/Edit">
              <Edit/>
            </Route>
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
