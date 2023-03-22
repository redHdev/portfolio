import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-footer_color">
      <Container className="py-3 pt-4">
        <Row>
          <Col md="4" className="align-center">
            <span className="text-[1em] text-white mt-[0.5em] mb-[0.5em]">Designed and Developed by Dene Mack</span>
          </Col>
          <Col md="4" className="align-center">
            <span className="text-[1em] text-white mt-[0.5em] mb-[0.5em]">Copyright © {year}, All rights reserved</span>
          </Col>
          <Col md="4" className="z-1 align-center">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/redHdev"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/redHdev"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/redHdev/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/redHdev"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
