import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name:'React.Js',
      logo: <FaReact />,
      level: "Intermediate",
      count: 60,
    },
    {
      name:"Node.Js",
      logo: <FaNodeJs />,
      level: "Intermediate",
      count: 50,
    },
    {
      name:"Express.Js",
      logo: <SiExpress />,
      level: "Intermediate",
      count: 50,
    },
    {
      name:"MongoDB",
      logo: <SiMongodb />,
      level: "Intermediate",
      count: 50,
    },
  ];

  return (
    <section id="skills" className="text-white py-10 bg-gray-900 relative">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          MY <span className=" text-indigo-600">SKILLS</span>
        </h3>

        <div className="text-4xl my-10 flex flex-col justify-center items-center flex-wrap">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
            {skills?.map((skill, i) => (
              <>
                <div
                  key={i}
                  className="mx-6 my-3 border-2 group border-indigo-600 min-w-[10rem] max-w-[16rem] bg-gray-800 p-10 rounded-xl"
                >
                  <p className="text-2xl mb-3 font-semibold">{skill.name}</p>
                  <div
                    style={{
                      background: `conic-gradient(rgb(79, 70, 229) ${skill.count}%,#ddd 50%)`,
                    }}
                    className="w-32 h-32 flex items-center justify-center rounded-full"
                  >
                    <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-indigo-600">
                      {skill.logo}
                    </div>
                  </div>

                  <p className="text-xl mt-6">{skill.level}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
