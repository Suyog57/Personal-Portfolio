import React from "react";
import Project from "../Project/Project";
import "./projectlist.css";
import projects from "../../data.json";

const ProjectList = () => {
  return (
    <>
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">See my work</h1>
          <p className="pl-desc">
            Here are some of the projects I have worked upon.
          </p>
        </div>
        <div className="pl-list">
          {projects.map((item) => (
            <Project key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
