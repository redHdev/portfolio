import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/denemark.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/redHdev/portfolio/main/src/Assets/denemark.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="relative pt-[110px] pb-[30px] bg-section_background_color text-white">
        <Particle />
        <Row className="justify-center relative">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="!max-w-[250px]"
          >
            <AiOutlineDownload className="inline -mt-[3px]" />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="pt-[50px] pb-[50px] justify-center">
          <Document file={resumeLink} className="flex justify-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row className="justify-center relative">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="!max-w-[250px]"
          >
            <AiOutlineDownload className="inline -mt-[3px]" />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
