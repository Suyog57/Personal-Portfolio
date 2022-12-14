import React from "react";
import "./footer.css";
import * as Unicons from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <>
      <div className="f">
        <h1 className="name"> Suyog Vinod Chaudhari</h1>
        <div className="icons">
          <a target='_blank' href="https://www.instagram.com/suyog_chaudhari_57/" className="f-item">
            <img src="../../images/ins.png" />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/suyog57/" className="f-item">
            <img src="../../images/lin.png" />
          </a>
          <a target='_blank' href="https://www.facebook.com/suyog.chaudhari.520/" className="f-item">
            <img src="../../images/fb.png" />
          </a>
        </div>
        
        <div className="f-bottom">
          <p className="f-text">
          Ⓒ Created by <a target='_blank' href="https://github.com/Suyog57">Suyog</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
