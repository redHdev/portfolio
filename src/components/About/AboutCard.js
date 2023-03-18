import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="text-white bg-transparent">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className = "text-justify">
            Hi !, I'm <span className="text-Main_color">Dene Mack </span>
            from <span className="text-Main_color"> Richmond, British Columbia, Canada.</span>
            <br />
            <br />I'm a full-stack engineer +8 years specializing in web and mobile development, learning all aspects of the language from prototype inheritance, closure, modern & classic architecture design patterns, and performance improvements.
            <br />
            <br />
            Out from work, <span className="text-Main_color">Fields</span> that I love to do!
          </p>
          <ul>
            <li className="list-none text-left pl-[1px] flex">
              <ImPointRight className="mr-2 mt-1" /> Travelling
            </li>
            <li className="list-none text-left pl-[1px] flex">
              <ImPointRight className="mr-2 mt-1" /> Playing Games
            </li>
            <li className="list-none text-left pl-[1px] flex">
              <ImPointRight className="mr-2 mt-1" /> Writing Tech Blogs
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
