import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiJirasoftware
} from "react-icons/si";

function Toolstack() {
  return (
    <Row className="justify-center pb-[50px]">
      <Col xs={4} md={2} className="text-[4.5em] h-[100px] !w-[200px] m-[10px] !px-[60px] py-[10px] opacity-95 border-[1.7px] border-solid border-border_color !align-middle !text-center rounded-[5px] shadow-tech_icon overflow-hidden transition ease-in duration-400 md:m-[10px] hover:scale-[1.05] cursor-pointer overflow-hidden border-[2.2px] border-solid border-border_hover">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="text-[4.5em] h-[100px] !w-[200px] m-[10px] !px-[60px] py-[10px] opacity-95 border-[1.7px] border-solid border-border_color !align-middle !text-center rounded-[5px] shadow-tech_icon overflow-hidden transition ease-in duration-400 md:m-[10px] hover:scale-[1.05] cursor-pointer overflow-hidden border-[2.2px] border-solid border-border_hover">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="text-[4.5em] h-[100px] !w-[200px] m-[10px] !px-[60px] py-[10px] opacity-95 border-[1.7px] border-solid border-border_color !align-middle !text-center rounded-[5px] shadow-tech_icon overflow-hidden transition ease-in duration-400 md:m-[10px] hover:scale-[1.05] cursor-pointer overflow-hidden border-[2.2px] border-solid border-border_hover">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="text-[4.5em] h-[100px] !w-[200px] m-[10px] !px-[60px] py-[10px] opacity-95 border-[1.7px] border-solid border-border_color !align-middle !text-center rounded-[5px] shadow-tech_icon overflow-hidden transition ease-in duration-400 md:m-[10px] hover:scale-[1.05] cursor-pointer overflow-hidden border-[2.2px] border-solid border-border_hover">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="text-[4.5em] h-[100px] !w-[200px] m-[10px] !px-[60px] py-[10px] opacity-95 border-[1.7px] border-solid border-border_color !align-middle !text-center rounded-[5px] shadow-tech_icon overflow-hidden transition ease-in duration-400 md:m-[10px] hover:scale-[1.05] cursor-pointer overflow-hidden border-[2.2px] border-solid border-border_hover">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="text-[4.5em] h-[100px] !w-[200px] m-[10px] !px-[60px] py-[10px] opacity-95 border-[1.7px] border-solid border-border_color !align-middle !text-center rounded-[5px] shadow-tech_icon overflow-hidden transition ease-in duration-400 md:m-[10px] hover:scale-[1.05] cursor-pointer overflow-hidden border-[2.2px] border-solid border-border_hover">
        <SiJirasoftware />
      </Col>
    </Row>
  );
}

export default Toolstack;
