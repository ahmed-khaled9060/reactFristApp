import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
export default function NavbarMain() {
  const [isScroll, setisScroll] = useState(false);
  const handleUserScroll = useCallback(() => {
    window.scrollY > 30 ? setisScroll(true) : setisScroll(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleUserScroll);
  }, [handleUserScroll]);
  return (
    <>
      <Navbar
        bg={`dark`}
        expand="lg"
        className={`bg-body-tertiary fixed-top nav_bar ${
          isScroll ? "py-1" : "py-4"
        }`}
      >
        <Container>
          <Link
            to={"/"}
            className="fw-bold fs-2 text-white text-decoration-none"
          >
            START FRAMEWORK
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to={"/About"}
                className=" link-nav text-white text-decoration-none p-2 mx-2 fw-bold mb-3 mb-lg-0"
              >
                {" "}
                ABOUT
              </NavLink>
              <NavLink
                to={"/portfolio"}
                className=" link-nav text-white text-decoration-none p-2 mx-2 fw-bold mb-3 mb-lg-0"
              >
                PORTFOLIO
              </NavLink>
              <NavLink
                to={"/Contact"}
                className=" link-nav text-white text-decoration-none p-2 mx-2 fw-bold mb-3 mb-lg-0"
              >
                CONTACT
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
