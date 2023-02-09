import React from "react";
import "./footer.css";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section id="footer" className="bg-gray-800 text-center text-white p-8">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font=bold text-2xl font-semibold md:text-3xl text-indigo-600">
            Suyog Vinod Chaudhari
          </h3>
          <div className="flex flex-row text-2xl p-2 md:text-3xl md:hidden">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/suyog_chaudhari_57/"
              className="m-1 "
            >
              <FaInstagram />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/suyog.chaudhari.520/"
              className="m-1"
            >
              <FaFacebook />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/suyog57/"
              className="m-1 "
            >
              <FaLinkedin />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Suyog57"
              className="m-1 "
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex flex-row text-xl md:text-2xl md:mt-2">
            <p className="flex justify-center items-center">
              {" "}
              <FaCopyright />
            </p>
            <a
            rel="noreferrer"
              target="_blank"
              href="https://github.com/Suyog57"
              className="ml-2"
            >
              Created by Suyog
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
