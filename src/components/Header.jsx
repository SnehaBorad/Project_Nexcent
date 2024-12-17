import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { nav } from "../constants";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary pt-1">
    <Container data-aos="fade-down">
      <Navbar.Brand
        href="#home"
        className="align-items-center gap-2 d-flex navbar-brand"
      >
        <img src="/logo.svg" alt="logo" width={35} height={24} />
        <span className=" fs-2 fw-bold"> Nexcent</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mx-auto">
          {nav.map((link) => (
            <Nav.Link key={link.name} href={link.href}>
              {link.name}
            </Nav.Link>
          ))}
        </Nav>
        <div className=" d-flex gap-1 justify-content-end align-items-center">
          <Button variant="outline-success">login</Button>
          <Button variant="success ms-1">Signup</Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
