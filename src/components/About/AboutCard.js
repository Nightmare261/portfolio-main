import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, This is<span className="blue"> Jyothi Lakshmi N</span>
            <span className="blue"> from Coimbatore, TamilNadu, India.</span>
            <br /><span className="purple">I am a pre-final year student in Kumaraguru College Of Technology and currently pursuing my degree in B.Tech Artificial Intelligence and Data Science</span>
            <br />
            Now I am learning and exploring various Machine Learning tools, ai tools and I am also interested in Cyber Security.
            <br />
            <br />
            Apart from my academics I am passionate about various stuffs like watching movies, playing cards, reading story books. I am also a research scholar.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content creator
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring generative AI technologies 
            </li>
          </ul>

          <p style={{ color: "rgb(126, 155, 172)" }}>
            "Exploring never ends"{" "}
          </p>
          <footer className="blockquote-footer">Jyothi Lakshmi N</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
