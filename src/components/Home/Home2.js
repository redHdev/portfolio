import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="relative pb-[70px] pt-[70px]" id="about">
      <Container>
        {/* <Row>
          <Col md={8} className="text-white pt-[100px] pb-[20px] text-center">
            <h1 className = "text-[2.6em]">
              LET ME <span className="text-Main_color"> INTRODUCE </span> MYSELF
            </h1>
            <p className="pt-[50px] text-[1.2em] text-left">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="text-Main_color"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="text-Main_color">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="text-Main_color">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="text-Main_color">Node.js</b> and
              <i>
                <b className="text-Main_color">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="text-Main_color"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="justify-center pt-[9em]">
            <Tilt>
              <img src={myImg} className="max-w-full h-auto" alt="avatar" />
            </Tilt>
          </Col>
        </Row> */}
        <Row>
          <Col md={12} className="!text-center pt-[25px] text-white">
            <h1>CONTACT TO ME</h1>
            <p>
              Feel free to <span className="text-Main_color">connect </span>with me
            </p>
            <ul className="!justify-center pt-[15px] inline-block relative">
              <li className="inline-block pr-[15px] pl-[15px]">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="text-Main_color relative inline-block w-[40px] h-[40px] text-center pt-[2px] pl-[2px] text-[2.2em] leading-[2em] bg-white rounded-[1em] duration-[0.5s]"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="inline-block pr-[15px] pl-[15px]">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="text-Main_color relative inline-block w-[40px] h-[40px] text-center pt-[2px] pl-[2px] text-[2.2em] leading-[2em] bg-white rounded-[1em] duration-[0.5s]"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="inline-block pr-[15px] pl-[15px]">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-Main_color relative inline-block w-[40px] h-[40px] text-center pt-[5px] pl-[6px] text-[1.8em] leading-[2em] bg-white rounded-[1em] duration-[0.5s]"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="inline-block pr-[15px] pl-[15px]">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="text-Main_color relative inline-block w-[40px] h-[40px] text-center pt-[2px] pl-[2px] text-[2.2em] leading-[2em] bg-white rounded-[1em] duration-[0.5s]"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
