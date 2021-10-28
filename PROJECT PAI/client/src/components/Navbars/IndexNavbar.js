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
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  // const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  // const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  // const toggleNavbarCollapse = () => {
  //   setNavbarCollapse(!navbarCollapse);
  //   document.documentElement.classList.toggle("nav-open");
  // };

  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 299 ||
  //       document.body.scrollTop > 299
  //     ) {
  //       setNavbarColor("navbar");
  //     } else if (
  //       document.documentElement.scrollTop > 299 ||
  //       document.body.scrollTop > 299
  //     ) {
  //       setNavbarColor("navbar-transparent");
  //     }
  //   };

  //   window.addEventListener("scroll", updateNavbarColor);

  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor);
  //   };
  // });
  return (
    <Navbar className={classnames("fixed-top")} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            
            title="Coded by Creative Folk"
          >
            Home
          </NavbarBrand>

          <NavbarBrand
            data-placement="bottom"
            href="/about"
            // target="_blank"
            title="Coded by Creative Folk"
          >
            About
          </NavbarBrand>

          <NavbarBrand
            data-placement="bottom"
            href="/condition"
            // target="_blank"
            title="Coded by Creative Folk"
          >
            Condition
          </NavbarBrand>

          <NavbarBrand
            data-placement="bottom"
            href="/from"
            // target="_blank"
            title="Coded by Creative Folk"
          >
            Register
          </NavbarBrand>

          <NavbarBrand
            data-placement="bottom"
            href="/ShowWork"
            // target="_blank"
            title="Coded by Creative Ptoy"
          >
            ChowWork
          </NavbarBrand>
          
          


          

         


          {/* <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button> */}
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          // isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/home?lang=en"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/xza1234567/"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/fo1k.0725/"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>

              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                // target="_blank"
                title="For Admin"
              >
                <i className="fa fa-user"/>
                <p className="d-lg-none">admin</p>
                
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
