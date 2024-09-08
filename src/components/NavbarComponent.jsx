import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 10 || isExpanded) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <div>
  <Navbar
    expand="lg"
    className={changeColor ? "color-active" : ""}
    expanded={isExpanded}
    onToggle={handleToggle}
  >
    <Container>
      <Navbar.Brand href="#home" className="fs-3 fw-bold">
        Dwi Putra.
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={handleToggle}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center"> {/* Tambahkan ms-auto */}
          {navLinks.map((link) => (
            <div className="nav-link" key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                end
                onClick={handleNavLinkClick}
              >
                {link.text}
              </NavLink>
            </div>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
  );
};

export default NavbarComponent;
