import { useEffect, useContext } from "react";
import { GlobalContext } from "../components/Context";
import { Fade } from "react-awesome-reveal";
import { skills } from "../data/temp";

export default function About() {
  const { darkMode } = useContext(GlobalContext);

  useEffect(() => {}, []);

  return (
    // grid grid-cols-1 sm:grid-cols-2
    <main className="page">
      <section className="pt-14 h-screen overflow-hidden">
        <div className="title center h-1/6 ">About.</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 h-5/6">
          <div className="center px-10 mb-10 sm:mb-0">
            <div className="text-center">
              A recent graduate with passion for web development, based in Vancouver, BC
            </div>
            <div className="pt-10">
              <button className="btns">Download Resume</button>
            </div>
          </div>
          <div className="px-10 sm:px-0">
            {darkMode ? (
              <img className="" src="https://i.imgur.com/KAVlh5Z.jpg" alt="dark-profile-img" />
            ) : (
              <img className="object-cover h-full" src="https://i.imgur.com/zC1s0t2.jpg" alt="light-profile-img" />
            )}
          </div>
        </div>
      </section>

      <section className="p-10">
        <div className="sub-title">About me</div>
        <Fade>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam, culpa perferendis tenetur eum
            recusandae totam deserunt amet repudiandae quos ad fugiat cumque distinctio quidem! Impedit minus ad culpa
            cupiditate!
          </p>
        </Fade>
        <Fade>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam, culpa perferendis tenetur eum
            recusandae totam deserunt amet repudiandae quos ad fugiat cumque distinctio quidem! Impedit minus ad culpa
            cupiditate!
          </p>
        </Fade>
      </section>

      <section className="p-10">
        <div className="sub-title">Skills</div>
        {skills.map((skill) => (
          <div className="flex mb-5">
            <div className="w-full capitalize font-bold sm:w-1/4">{skill.category}</div>
            <div className="w-full grid sm:w-3/4 sm:grid-cols-2 md:grid-cols-4">
              {skill.skills.map((item) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="p-10">
        <div className="sub-title">Get in touch</div>
        <div class="subtitle">Email</div>
        <div>caxbelle@gmail.com</div>
        <div class="subtitle">Github</div>
        <div>
          <a href="https://github.com/byu1kim">https://github.com/byu1kim</a>
        </div>
        <div class="subtitle">LinkedIn</div>
        <div>
          <a href="https://www.linkedin.com/in/byul-kim-523362250">https://www.linkedin.com/in/byul-kim-523362250</a>
        </div>
        <div class="subtitle">Instagram</div>
        <div>
          <a href="https://instagram.com/byu1kim">https://intagram.com/byu1kim</a>
        </div>
        <div class="subtitle">Youtube</div>
        <div>
          <a href="https://www.youtube.com/@byulkim3356">https://www.youtube.com/@byulkim3356/</a>
        </div>
      </section>
    </main>
  );
}
