import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SideBar from "../../pages/Home/SideBar/SideBar";

const NavigationBar = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div style={{ backgroundColor: "#ecebe1" }}>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <SideBar />
          <h3 style={{ cursor: "pointer" }} onClick={handleClick}>
            Travel Bea
          </h3>
        </div>

        <Navbar expand="md" className="mb-3">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                {user.email && (
                  <Nav.Link as={Link} to="/dashboard/dashboard_home">
                    Dashboard
                  </Nav.Link>
                )}
                {user.email ? (
                  <Nav.Link onClick={logout}>Log out</Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Log in
                  </Nav.Link>
                )}

                <Nav.Link>{user?.displayName}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;

/* <Navbar expand="md" className="mb-3">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                {user.email && (
                  <Nav.Link as={Link} to="/dashboard/dashboard_home">
                    Dashboard
                  </Nav.Link>
                )}
                {user.email ? (
                  <Nav.Link onClick={logout}>Log out</Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Log in
                  </Nav.Link>
                )}

                <Nav.Link>{user?.displayName}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */
