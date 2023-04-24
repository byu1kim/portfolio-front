import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../components/Context";
import { skills } from "../data/temp";
import myPDF from "../data/byul_resume.pdf";

export default function About() {
  const { darkMode } = useContext(GlobalContext);
  const [skills, setSkills] = useState();

  useEffect(() => {
    async function getSkills() {
      const result = await fetch("https://portfolio23-a3204-default-rtdb.firebaseio.com/skills.json").then((res) =>
        res.json()
      );
      setSkills(result);
    }
    getSkills();
  }, []);

  return (
    // grid grid-cols-1 sm:grid-cols-2
    <main className="page px-10">
      <section className="pt-14 min-h-screen md:h-screen md:overflow-hidden">
        <div className="title center py-5 mt-5 h-1/6">About Me.</div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-0 h-5/6">
          <div className="px-10 md:px-0 md:order-2">
            {darkMode ? (
              <img
                className="object-cover w-full h-full"
                src="https://i.imgur.com/KAVlh5Z.jpg"
                alt="dark-profile-img"
              />
            ) : (
              <img
                className="object-cover w-full h-full"
                src="https://i.imgur.com/zC1s0t2.jpg"
                alt="light-profile-img"
              />
            )}
          </div>
          <div className="center md:order-1">
            <div className="mb-3 self-start">
              <p className="mb-3">
                Hi, I'm Byul, a recent graduate with passion for web development. I may not consider myself as coding
                genius or nothing, but I believe that if I keep putting in the hours, I'll become a better developer.
              </p>
              <p className="mb-3">
                For me, the key is consistency. I make it a habit to be coding something all the time. I actually dig it
                when I run into errors or bugs. They can be a pain, but they also teach me a ton about how to improve my
                skills.
              </p>
              <p>Feel free to visit my social network channels to learn more about me!</p>
            </div>
            <div>
              <div className="flex gap-5 text-2xl mt-3">
                <a href="https://github.com/byu1kim">
                  <i className="fa-brands fa-github text-point"></i>
                </a>
                <a href="https://www.linkedin.com/in/byul-kim-523362250">
                  <i className="fa-brands fa-linkedin text-point"></i>{" "}
                </a>
                <a href="https://instagram.com/byu1kim">
                  <i className="fa-brands fa-instagram text-point"></i>{" "}
                </a>
                <a href="https://www.youtube.com/@byulkim3356">
                  <i className="fa-brands fa-youtube text-point"></i>{" "}
                </a>
              </div>
            </div>
            <div className="mt-5 mb-10">
              <button className="btns3">
                <a href={myPDF} download="byul_resume.pdf">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="sub-title my-5">Skills</div>
        {skills &&
          skills.map((skill, index) => (
            <div key={index} className="flex mb-5">
              <div className="w-full capitalize font-bold sm:w-1/4">{skill.category}</div>
              <div className="w-full grid sm:w-3/4 sm:grid-cols-2 md:grid-cols-4">
                {skill.skills.map((item, index) => (
                  <div key={index}>{item.name}</div>
                ))}
              </div>
            </div>
          ))}
      </section>

      <section className="mt-10">
        <div className="sub-title my-5">Get in touch</div>

        <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
          <div>
            <div className="flex mb-5">
              <i className="fa-solid fa-envelope icon"></i>
              <div className="self-center px-5">
                <div className="font-bold">Email</div>
                <div>bkim98@my.bcit.ca</div>
              </div>
            </div>

            <div className="flex">
              <i className="fa-solid fa-location-dot icon px-3.5"></i>
              <div className="self-center px-5">
                <div className="font-bold">Location</div>
                <div>Vancouver, BC</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
