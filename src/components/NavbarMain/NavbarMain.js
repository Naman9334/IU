import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
const NavbarMain = () => {

  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState([ true, false, false, false ]);
  const [expand, setExpand] = useState(false);

  const closeNav = ()=>{
    setExpand(false);
  }

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav;
    temp = temp.map((x) => (x = false));
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));

  };



  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#010d30",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.7)",
        }}
        variant="dark"
        expand="lg"
        sticky="top"
        onToggle={() => {
          setExpand((prevState) => !prevState);
        }}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            Innovator United
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>


              {/* Home Section */}

              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${
                  activeNav[0] ? styles.active : ""
                }`}
                style={{ marginTop: "8px" }}
                onClick={() => {
                  handleActiveNav(0);
                  closeNav();
                }}
              >
                <b>Home</b>
              </NavLink>


              {/* About Section */}

              <NavLink
                to="/aboutUs"
                className={`${styles.nav_text} nav-link ${
                  activeNav[1] ? styles.active : ""
                }`}
                style={{ marginTop: "8px" }}
                onClick={() => {
                  handleActiveNav(1);
                  closeNav();
                }}
              >
                <b>About</b>
              </NavLink>


              {/* Career Section */}
              <NavDropdown
                show={show}
                // onMouseEnter={showDropdown}
                // onMouseLeave={hideDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link
                    to="/career"
                    style={{ textDecoration: "none" }}
                    className={styles.dropicon}
                    onClick={() => {
                      handleActiveNav(4);
                      closeNav();
                    }}
                  >
                    <span
                      className={`${styles.nav_text} my-auto ${
                        activeNav[4] ? styles.active : ""
                      }`}
                    >
                      <b>Career</b>
                    </span>
                  </Link>
                }
                id="basic-nav-dropdown"
              >
                {/* <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/career/job-openings"
                    onClick={() => {
                      handleActiveNav(5);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Job Openings
                  </NavLink>
                </NavDropdown.Item> */}


                {/* <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/career/internships"
                    onClick={() => {
                      handleActiveNav(5);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Internships
                  </NavLink>
                </NavDropdown.Item> */}
                
              </NavDropdown>


              {/* Services Section */}


              <NavLink
                to="/services"
                className={` ${styles.nav_text} nav-link ${
                  activeNav[2] ? styles.active : ""
                }`}
                style={{ marginTop: "8px" }}
                onClick={() => {
                  handleActiveNav(2);
                  closeNav();
                }}
              >
                <b>Services</b>
              </NavLink>


              {/* Contact Section */}

              <NavLink
                to="/contactUs"
                className={` ${styles.nav_text} nav-link ${
                  activeNav[3] ? styles.active : ""
                }`}
                style={{ marginTop: "8px" }}
                onClick={() => {
                  handleActiveNav(3);
                  closeNav();
                }}
              >
                <b>Contact Us</b>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
