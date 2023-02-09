import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const subMitted = () => {
    window.confirm("Email sent successfully, Thank You.");
  };

  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hltawzd",
        "template_9kv6tmu",
        formRef.current,
        "VCRjFBilNS4d-yw8n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section
        id="contact"
        className="text-white py-6 px-3 bg-gray-900 md:py-8 md:pb-16"
      >
        <div className="text-center my-8">
          <h3 className="text-4xl font-semibold">
            CONTACT <span className="text-indigo-600">ME</span>
          </h3>

          <div
            className="mt-11 md:mt-14 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 rounded-lg mx-auto"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col flex-1 gap-1 md:gap-4 p-2"
            >
              <input
                className="w-full bg-gray-700 rounded-lg"
                type="text"
                placeholder="Your Name"
                name="user_name"
              />
              <input
                className="w-full bg-gray-700 rounded-lg"
                type="Email"
                placeholder="Your Email Address"
                name="user_email"
              />
              <textarea
                className="w-full bg-gray-700 rounded-lg"
                placeholder="Your Message"
                rows={10}
                name="Message"
              ></textarea>
              <div className="flex justify-center md:justify-start md:mt-2 md:pb-1">
                <button
                  onClick={subMitted}
                  className="bg-indigo-600 btn-primary w-fit rounded-full"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="flex flex-col md:items-center mb-4 md:mx-auto p-2 md:mt-8">
              <div className="flex justify-center mb-5 md:mx-auto md:mt-1">
                <p className="text-indigo-600 text-xl md:text-3xl">
                  <HiOutlineMail />
                </p>
                <p className=" ml-2 md:text-xl">suyogchaudhari57@gmail.com</p>
              </div>
              <div className="flex justify-center md:mt-4">
                <iframe src="https://www.google.com/maps/embed/v1/place?q=indian+institute+of+technology+patna&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
