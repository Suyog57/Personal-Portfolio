import React from "react";
import "./About.css";
import {BrowserRouter as Router, Link} from 'react-router-dom';

const About = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Suyog_Vinod_Chaudhari_2001EE77.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Suyog_Vinod_Chaudhari_2001EE77.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div className="a">
        <div className="a-left">
          <img src="../../images/me1.JPG" className="a-img"></img>
        </div>

        <div className="a-right">
          <div className="a-right-wrapper">
            <h1 className="a-title">About Me</h1>
            <h2 className="a-sub">Web Development, CP, DSA</h2>
            <h3 className="a-desc">
              I am Suyog Vinod Chaudhari, currently a junior year student
              pursuing B.tech in Electrical and Electronics engineering from IIT
              Patna. My main interests lie in problem solving and website
              development. I have quite good knowledge of DSA.
            </h3>
            <div className="a-buts">
              <button className="a-but" onClick={onButtonClick}>
                Download CV
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
