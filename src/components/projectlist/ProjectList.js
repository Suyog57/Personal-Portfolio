import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/images/blog.jpg";
import project2 from "../../assets/images/empmanag.jpg";
import project3 from "../../assets/images/portfolio.jpg";
import project4 from "../../assets/images/expense.jpg";
import project5 from "../../assets/images/managesystem.jpg";
import project6 from "../../assets/images/bot.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const ProjectList = () => {
  const projects = [
    {
      img: project5,
      name: "Doctor Appointment System",
      github_link: "",
      live_link: "https://appointment-system-pegasus57.vercel.app/login",
    },
    {
      img: project6,
      name: "ChatGPT Whatsapp Bot",
      github_link: "https://github.com/Suyog57/whatsapp-chatbot",
      live_link: "",
    },
    {
      img: project1,
      name: "Blog App",
      github_link: "https://github.com/Suyog57/Blog-app",
      live_link: "https://blog-app-pegasus57.vercel.app/",
    },

    {
      img: project2,
      name: "Employee Management System",
      github_link: "https://github.com/Suyog57/Employee-Management-System",
      live_link: "",
    },
    {
      img: project3,
      name: "Personal Portfolio",
      github_link: "https://github.com/Suyog57/Personal-Portfolio",
      live_link: "https://suyogchaudhari.netlify.app/",
    },
    {
      img: project4,
      name: "Expense Tracker",
      github_link: "https://github.com/Suyog57/Expense-Tracker",
      live_link: "https://expense-tracker-suyog.netlify.app/",
    },
  ];

  return (
    <>
      <section id="projects" className="text-white py-10 bg-gray-800 relative">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            MY <span className=" text-indigo-600">PROJECTS</span>
          </h3>
        </div>

        <div className="mb-10 mt-10 flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
          <div className="w-full flex justify-center items-center">
            <Swiper
              slidesPerview={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img
                      src={project_info.img}
                      alt=""
                      className="rounded-lg h-96 w-full"
                    />
                    <h3 className="text-xl my-4">{project_info.name}</h3>
                    <div className="flex gap-3">
                      <a
                        rel="noreferrer"
                        href={project_info.github_link}
                        target="_blank"
                        className="text-indigo-600 bg-black px-2 py-1 inline-block"
                      >
                        Github
                      </a>
                      <a
                        rel="noreferrer"
                        href={project_info.live_link}
                        target="_blank"
                        className="text-gray-500 bg-black px-2 py-1 inline-block"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectList;
