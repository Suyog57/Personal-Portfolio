import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/me1.JPG";

const About = () => {
  const onButtonClick = () => {
    console.log("f");
    window.location.href =
      "https://drive.google.com/file/d/1cVUiejI7C8Eqk4OoyVna6vpIarUVzh-l/view?usp=drive_link";
  };

  return (
    <>
      <section id="about" className="py-10 text-white bg-gray-800">
        <div className="text-center mt-8 h-full">
          <h3 className="text-4xl font-semibold">
            ABOUT <span className=" text-indigo-600">ME</span>
          </h3>

          <div className="flex lg:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 py-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="my-3">
                <p className="text-justify leading-7 w-11/12 mx-auto">
                  I am Suyog Vinod Chaudhari, currently a final year student
                  pursuing B.tech in Electrical and Electronics engineering at
                  IIT Patna. My main interests have been inclined towards
                  problem solving and website development. In addition, I
                  possess a commendable proficiency in Data Structures and
                  Algorithms (DSA).
                </p>

                <br />
                <p className="text-2xl font-bold w-11/12 text-justify mx-auto mt-3">
                  Web Development, CP, DSA
                </p>
                <br />
                <br />
                <div className="rounded-full flex justify-center md:justify-start md:w-11/12 md:mx-auto md:text-justify">
                  <a
                  target="_blank"
                    className="bg-indigo-600 rounded-full p-4 font-semibold hover:bg-blue-500"
                    href="https://drive.google.com/file/d/1cVUiejI7C8Eqk4OoyVna6vpIarUVzh-l/view?usp=drive_link"
                  >
                    View Resume
                  </a>
                  
                </div>
              </div>
            </div>

            <div className="flex-1  md:mt-0 mt-6 flex justify-center items-center">
              <div className=" lg:w-96 h-full relative w-11/12 max-w-sm aboutImg">
                <img
                  src={aboutImg}
                  className="w-full object-cover bg-cyan-600 rounded-xl"
                  alt="me"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
