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

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import Skill from "./index-sections/Skill";
import About from "./index-sections/About";
import Condition from "./index-sections/Condition";
import ShowWork from "./index-sections/ShowWork";
import From from "./index-sections/From.js"
import Edit from "./index-sections/Edit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./index-sections/Home";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      {/* <IndexHeader /> */}
      {/* <div id="home" className="main"> */}
      
      <div id="home" className="main">
          
        <Router>
          <Switch>

          <Route  path = "/index">
          <Home/>
            </Route>

            <Route  path = "/About">
            <About/>
            </Route>

            <Route exact path = "/Condition">
            <Condition/>
            </Route>

            <Route exact path = "/From">
            <From/>
            </Route>

            <Route exact path = "/ShowWork">
            <ShowWork/>
            </Route>

            <Route  exact path = "/Edit">
              <Edit/>
            </Route>

          </Switch>
        </Router>
        {/* <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />
        <DemoFooter /> */}
      </div>
    </>
  );
}

export default Index;
