// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Sidebar = () => {
  const logo =
    "https://thumbs.dreamstime.com/z/sewing-machine-cartoon-illustration-isolated-image-59013916.jpg";

  return (
    <>
      {/* Upper Navbar */}
      <Navbar
        style={{
          backgroundColor: "#6E41E7",
          width: "100%",
          position: "fixed",
          zIndex: 1,
        }}
      >
        <Container>
          <Navbar.Brand
            href="/auth/register"
            className="d-flex align-items-center justify-content-between"
          >
            <img src={logo} alt="Apna Tailor Logo" height="50px" width="50px" />
            <h3 className="ms-2 text-light" style={{ marginTop: "6px" }}>
              Apna Tailor
            </h3>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Sidebar */}
      {/* <Nav className="flex-column mt-3">
        <Nav.Item>
          <Link to="/profile">Profile</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/experience">Experience</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/kycStep1">kycStep1</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/kycStep2">Experience</Link>
        </Nav.Item>
      </Nav> */}
    </>
  );
};

export default Sidebar;
