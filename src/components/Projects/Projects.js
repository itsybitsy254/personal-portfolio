import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/Barn.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Barn Monitor"
              description="This is a powerful and easy-to-use mobile application designed to empower farmers by simplifying the management of their agricultural operations. With FarmTrack, farmers can efficiently track their crop production, livestock performance, and sales in real time, all from one centralized platform."
              ghLink="https://github.com/ImeldaHope/BarnMonitor.git"
              demoLink="https://barnmonitor.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
