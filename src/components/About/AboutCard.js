import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammed Hashir </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I am currently pursuing B.Tech in Computer Science and Engineering at Government Engineering College, Thrissur
        
            <br />
            <br />
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "I code beautifully simple things, and I love what I do."{" "}
          </p>
          <footer className="blockquote-footer">Hashir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
