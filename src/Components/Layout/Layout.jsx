import Navbar from "../Navbar/NavbarMain";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      <div
        className={`min-vh-100 d-flex justify-content-center align-items-center ${
          pathname == "/" || pathname == "/About" ? `bg-main` : null
        }`}
      >
        <Container>
          <Outlet />
        </Container>
      </div>

      <Footer />
    </>
  );
}
