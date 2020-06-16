import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { selectUser } from '../../store/user/selectors'

import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import SignUp from './SignUp'
import './index.css'

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
 
  

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const signUpControls = token ? null : <SignUp />;
  const seeMyPageIfLoggedIn = token ? <NavbarItem className="active" path={`/myhomepage/${user.id}`} linkText="My Home Page" /> :null

  return (
    <Navbar bg="blue" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Post Your Story
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          {seeMyPageIfLoggedIn}
          {loginLogoutControls}
          {signUpControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
