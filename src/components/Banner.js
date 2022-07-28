import React from "react";
import "./banner.css";

function Banner() {
  const aboutMe = [
    {
      circle: '',
      title: "Projects",
      text: "Walk through my design experience, skills and design process.",
    },
    {
        circle: '',
      title: "Non-Digital Artwork",
      text: "View some of my non-digital art projects and hobbies outside of the graphic design scope.",
    },
    {
        circle: '',
      title: "About Me",
      text: "Learn more about me and see why I’d be a great addition to your already awesome team of designers!",
    },
  ];

  return (
    <div className="banner">
      <div className="logo-Container">
        <img className="logo" alt="logo" src="/Images/PortLogo.png" />
      </div>

      <div className="aboutMe-Container">
        {aboutMe.map(({ title, text, circle}) => (
            <div className="banner-texts">
            <div className="circle">{circle}</div>
            <div className="aboutMe">
                <h3>{title}</h3>
                <br />
                <h5>{text}</h5>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
