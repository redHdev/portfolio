import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "bg-nav_color transition ease-out duration-[300] backdrop-filter" : "fixed transition ease-out duration-[300] px-[0.3em] py-[2em] text-[1.2em]"}
    >
      <Container>
        <Navbar.Brand href="/" className="flex">
          <img src={logo} className="w-auto h-[20px] mt-2" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="mt-2" onClick={() => updateExpanded(false)}>
                <AiOutlineHome className="mb-[2px] mr-1 !inline"/> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className="mt-2"
              >
                <AiOutlineUser className="mb-[2px] mr-1 !inline" /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className = "mt-2"
              >
                <AiOutlineFundProjectionScreen
                  className="mb-[2px] mr-1 !inline"
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className = "mt-2"
              >
                <CgFileDocument className="mb-[2px] mr-1 !inline" /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-[1.1em] pt-[17px]">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="leading-[1.4em] bg-[#934cce5e] px-[0.25em] py-[1.1em] align-center"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
