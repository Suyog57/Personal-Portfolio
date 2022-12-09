import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const subMitted=()=>{
    window.confirm('Email sent successfully, Thank You.')
  }
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
      <div className="c" id='contact'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact Me</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src="../../images/mail.png" className="info-img"></img>
                suyogchaudhari57@gmail.com
              </div>
            </div>
            <iframe
            width="80%"
            height="70%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=indian+institute+of+technology+patna&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          </div>

          <div className="c-right">
            <p className="c-desc">
              <b>Want to get in touch?</b> Submit the form below, I will surely
              get back to you.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name"></input>
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
              ></input>
              <input type="text" placeholder="Email" name="user_email"></input>
              <textarea placeholder="Message" rows="5" name='Message'></textarea>
              <button onClick={subMitted}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
