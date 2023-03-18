import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="justify-center pb-[10px]" style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="text-white text-[2.3em] font-bold pt-[10px] pb-[20px]">
        Days I <strong className="text-Main_color">Code</strong>
      </h1>
      <GitHubCalendar
        username="soumyajit4419"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
