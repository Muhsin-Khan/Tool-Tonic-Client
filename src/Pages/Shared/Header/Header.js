import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../../Logo/logo.png";
import auth from "../../../firebase.init";


const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <>
    <Navbar className="header" collapseOnSelect expand="lg" sticky="top">
        <Container className="header-nav">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height={30} alt="" className="h-8 d-flex contents-center items-center" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="" as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="allproducts">
                All Tools
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="dashboard">
                    Dashboard
                  </Nav.Link>
                 
                </>
              )}

              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>

              
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              <Nav.Link as={Link} to="myportfolio">
                My Portfolio
              </Nav.Link>
              <span className="d-flex justify-content-center align-items-center ms-2 me-1 users-name">{user?.displayName && user?.displayName}</span>
              {user ? (
                <button
                  className="signOut-button btn btn-link text-white fw-bold text-decoration-none ms-3 me-3 mb-1"
                  onClick={handleSignout}
                >Sign Out </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
              {user ? (
                ""
              ) : (
                <Nav.Link as={Link} to="signup">
                  Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Header;