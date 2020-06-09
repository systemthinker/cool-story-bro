import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import './index.css'

export default function Navigation() {
  const token = useSelector(selectToken);
  

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const seeMyPageIfLoggedIn = token ? <NavbarItem className="active" path="/myhomepage" linkText="My Home Page" /> :null

  return (
    <Navbar bg="x" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Cool Story Bro
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          {seeMyPageIfLoggedIn}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
