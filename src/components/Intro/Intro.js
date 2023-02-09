import React from "react";
import "./Intro.css";
import introImg from "../../assets/images/codebout1.png";
import Typical from "react-typical";

const Intro = () => {
  return (
    <>
      <section
        id="intro"
        className="flex flex-col md:flex-row bg-gray-900 text-white p-14"
      >
        <div className="flex-1 flex justify-center items-center">
          <div className=" rounded-lg bg-indigo-600 h-44 w-44 md:h-56 md:w-56 lg:h-96 lg:w-96 rotate-45 absolute"></div>
          <img
            src={introImg}
            className="mx-auto  md:w-11/12 lg:mr-0 h-full object-cover z-10"
          />
        </div>

        <div className="flex-1 mt-12 md:my-auto flex justify-center items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold leading-10 mb-4 md:text-4xl">
              <span className="text-5xl font-bold text-indigo-600 md:text-7xl">
                Hello!
              </span>
              <br />
              <br />
              My Name is <span className="">Suyog </span>
            </h1>
            <h3 className="text-xl mt-8 mb-4 font-semibold md:text-2xl">
              I am interested in
              <span className="text-indigo-600">
                <Typical
                  steps={[
                    "Competitive Programming",
                    3000,
                    "Web Development",
                    3000,
                    "DSA",
                    3000,
                  ]}
                  wrapper="p"
                  loop={Infinity}
                />
              </span>
            </h3>
            <a href="#contact" rel="noreferrer">
              <button className="mt-8 text-xl bg-indigo-600 rounded-full">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
