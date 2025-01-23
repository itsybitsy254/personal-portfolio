import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vitalis Muthomi </span>
            a passionate tech enthusiast and freelancer based in <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I hold a Bachelor of Science in <span className="purple">Information Technology </span>from Mount Kenya University and further honed my skills through a <span className="purple">Software Engineering</span> course at Moringa School. 
            <br />Beyond coding, I thrive on exploring creativity and innovation in various forms. Whether I’m immersing myself in the excitement of gaming, sharing insights through engaging tech blogs, or navigating the dynamic world of forex trading, 
            <br />I’m constantly fueled by curiosity and a drive to learn. Each of these pursuits inspires me to approach challenges with fresh perspectives and boundless energy.
            <br />
            <br />
            People I look UP to!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Elon Musk
            </li>
            <li className="about-activity">
              <ImPointRight /> Dennis Ritchie
            </li>
            <li className="about-activity">
              <ImPointRight /> Takashi Kotegawa(BNF)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tommorrow is not promised, Do it Today!"{" "}
          </p>
          <footer className="blockquote-footer">@ft._viterlis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
