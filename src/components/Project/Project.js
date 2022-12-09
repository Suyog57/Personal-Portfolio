import React from "react";
import "./Project.css";

const Project = (props) => {
  const {img, link}=props
  return (
    <>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target='_blank'>
          <img src={process.env.PUBLIC_URL+img} className='p-img'/>
        </a>
      </div>
    </>
  );
};

export default Project;
