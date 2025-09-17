import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const InvitacionesNavbar = ({ showNavbar, setShowNavbar }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // subiendo
        setShowNavbar(true);
      } else {
        // bajando
        setShowNavbar(false);
      }

      setLastScrollY(window.scrollY);
      if (expanded) {
        setExpanded(false);
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, expanded]);
  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(nextExpand) => setExpanded(nextExpand)}
      className={`transition-navbar ${
        expanded ? "navbar-expanded" : "navbar-transparent"
      } ${showNavbar ? "navbar-visible" : "navbar-hidden"} 4`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          href="#inicio"
          className="text-white text-shadow fw-bold font-paris d-flex display-5"
        >
          Arlet & Homero
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio" className="text-white display-5">
              Inicio
            </Nav.Link>
            <Nav.Link href="#fecha" className="text-white display-5">
              Fecha
            </Nav.Link>
            <Nav.Link href="#itinerario" className="text-white display-5">
              Itinerario
            </Nav.Link>
            <Nav.Link href="#ubicaciones-Misa" className="text-white display-5">
              Ceremonia Religiosa
            </Nav.Link>
            <Nav.Link
              href="#ubicaciones-Recepción"
              className="text-white display-5"
            >
              Recepción
            </Nav.Link>
            <Nav.Link href="#mesa" className="text-white display-5">
              Mesa de regalos
            </Nav.Link>
            <Nav.Link href="#confirmar" className="text-white display-5">
              Confirmar Asistencia
            </Nav.Link>
            <Nav.Link href="#vestimenta" className="text-white display-5">
              Código de vestimenta
            </Nav.Link>
            <Nav.Link href="#hoteles" className="text-white display-5">
              Recomendación Hospedaje
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default InvitacionesNavbar;
