import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/auction.png";
import chatify from "../../Assets/Projects/chatify.png";


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
              title="Online Banner Shop"
              description="Online Led Banner Shop,where we can customized the led banner and purchase accordingly"
              ghLink="https://github.com/roshan472/Mini-project.git"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Auction.com"
              description="Online Football players Auction system,where we can auction different player for a particular match"
              ghLink="https://github.com/roshan472/mainProject.git"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
