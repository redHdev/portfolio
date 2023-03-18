import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="relative pt-[150px] pb-[30px] text-white bg-section_background_color from-gray-800 via-gray-900 to-indigo-900">
      <Particle />
      <Container>
        <Row className="justify-center p-[10px]">
          <Col
            md={7}
            className = "justify-center pt-[30px] pb-[30px]"
          >
            <h1 className="text-[3em] pb-[20px]">
              ABOUT <strong className="text-Main_color">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className = "pt-[120px] pb-[50px] md:pt-[0px]"
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >
            <img src={laptopImg} alt="about" className="max-w-full h-auto" />
          </Col>
        </Row>
        <h1 className="text-white text-[2.3em] font-medium pt-[10px] mb-[20px]">
          Professional <strong className="text-Main_color">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="text-white text-[2.3em] font-medium pt-[10px]">
          <strong className="text-Main_color">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
