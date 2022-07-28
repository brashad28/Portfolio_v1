import React from "react";
import "./aboutMe.css";

function AboutMe() {
  return (
    <div className="Me-container">
      <div className="aboutme-container">
        <img
          className="aboutMe-Photo"
          src="./Images/About_header.png"
          alt="aboutme"
        />
      </div>

      <div className="about-container">
        <div className="aboutme-text">
          <h4>
            Hi I’m Blake! I’m a UX/UI Designer with a background in Fashion and
            CRM. I can be described as human centered and passionate about
            pushing technology forward, with respect to human need. A question I
            ask myself before tackling a new project or design challenge is,
            “How will “xyz” make the user feel? or “What emotions will this
            feature evoke?”
          </h4>
          <br />
          <h4>
            Prior to User Experience, I spent several years in Fashion, focusing
            my talent on client experience managment, in luxury and
            comptemporary retail spaces. Most recently expanding my skill set at
            Columbia Univeristy School of Engineering -- creating digital art,
            conducting user research, developing wireframes and prototypes that
            tell user stories, impacting the way we connect through technology
            today.
          </h4>
        </div>

        <div>
          <div>
            <img
              className="photo"
              src="./Images/Untitled (139).jpg"
              alt="me-self"
            />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
