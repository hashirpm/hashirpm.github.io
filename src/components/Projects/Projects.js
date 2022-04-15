import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
            
         
              title="secureX"
              description="Blockchain based evidence management system for Indian Courts developed using Ethereum Smart
              Contracts, ReactJS and Interplanetary File System "
              link="https://github.com/hashirpm/secureX"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
          
         
              title="NFT Marketplace"
              description="An NFT Marketplace React dApp with basic functionalities such as acquire and mint NFTs using ERC721 Smart Contract and Interplanetary File System IPFS"
              link="https://github.com/hashirpm/nft-marketplace"
            />
          </Col>

      

          <Col md={4} className="project-card">
            <ProjectCard
            
              title="Github Resume"
              description="An Instant Resume Generator using GitHub API where you can create your resume just by providing Github username"
              link="https://github.com/hashirpm/github-resume"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             
              title="Shop Scan"
              description="Mobile application for marking user footprints at shops developed using Flutter and Firebase"
              link="https://github.com/hashirpm/shop-scan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
              title="Food-Tank"
              description="A web-app that connects food that connects food donors and acceptors to tackle food wastage"
              link="https://github.com/hashirpm/foodtank-web"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
              title="Block it"
              description="A chrome extension to block websites from your browsers during a time frame"
              link="https://github.com/hashirpm/block-it"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
           
              title="Github Random"
              description="A CLI application to see random GitHub repositories developed using Github API and NodeJS"
              link="https://github.com/hashirpm/github-random"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
           
              title="Plasmo"
              description="Mobile application for connecting COVID-19 patients and the patients recently recovered from COVID-19 willing to donate their plasma for effective treatment"
              link="https://github.com/hashirpm/plasmo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
              title="Discord Together Bot"
              description="A Discord bot to connect people in a server and play music and games among the members of the server."
              link="https://github.com/hashirpm/discord-together-bot"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
