import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hi, I am</h2>
            <h1 className="i-name">Suyog V. Chaudhari</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Competitive Programmer</div>
                <div className="i-title-item">DSA Enthusiast</div>
              </div>
            </div>

            <p className="i-desc">
              I have keen interest in website development and competitive
              programming.
            </p>
          </div>
        </div>

        <div className="i-right">
          <div className="i-bg"></div>
          <img src="../../../images/codebout1.png" className="i-img" />
        </div>
      </div>
    </>
  );
};

export default Intro;
