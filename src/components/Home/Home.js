import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="relative -z-1 bg-top bg-center pb-[30px] pt-[30px] bg-Main_bg" id="home">
        <Particle />
        <Container className="px-0 pt-[9rem] pb-[2rem] text-white text-left">
          <Row>
            <Col md={7} className="pt-[80px]">
              <h1 className="text-[2.5em] pl-[45px] pb-[15px]">
                WELCOME !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-[2.5em] pl-[45px]">
                I'M
                <strong className="text-Main_color"> DENE MARK</strong>
              </h1>

              <div className = "p-[50px] text-left">
                <Type />
              </div>
            </Col>

            <Col md={5} className = "pb-[20px]">
              <img
                src={homeLogo}
                alt="home pic"
                className="max-w-full h-auto max-h-[450px]"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
