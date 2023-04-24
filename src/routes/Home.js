import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  FadeOut,
  Fade,
  MoveIn,
  MoveOut,
  StickyIn,
  Sticky,
} from "react-scroll-motion";
import { GlobalContext } from "../components/Context";

export default function Home() {
  const { darkMode, projects } = useContext(GlobalContext);

  return (
    <ScrollContainer className="relative z-10 text-center font-color dark:darkmode">
      <ScrollPage className="">
        <section className="w-full h-screen center font-extrabold tracking-tighter bg-cyan-500 dark:text-cyan-300 dark:bg-transparent">
          <div className="fs-0 w-full text-white dark:text-cyan-300 max-w-xl relative z-50">Byul Kim.</div>
          <div className="fs-1 text-gray-500 mt-3 dark:text-white relative z-50">Web Developer</div>
          <div className="fixed bottom-0 p-5 z-0 down-arrow ">
            <i className="fa-solid fa-chevron-down"></i>
          </div>

          {darkMode ? (
            <div></div>
          ) : (
            <div className="absolute w-full h-full">
              <Animator animation={batch(MoveOut(0, -100))} className="h-full absolute bottom-0 w-full z-10">
                <img src="https://i.imgur.com/cNlKnjh.png" alt="cloud" className="object-cover h-full w-full" />
              </Animator>
              <Animator animation={batch(MoveOut(0, 100))} className="h-full absolute bottom-0 w-full z-10">
                <img src="https://i.imgur.com/hpRbEPu.png" alt="cloud" className="object-cover h-full w-full" />
              </Animator>
              <Animator animation={batch(MoveOut(0, 50))} className="h-full absolute mt-20 w-full z-30">
                <div className="h-full bg-gradient-to-b from-transparent to-white absolute w-full"></div>
                <img src="https://i.imgur.com/lap9e9o.png" alt="cloud" className="object-cover h-full w-full" />
              </Animator>
            </div>
          )}
        </section>
      </ScrollPage>
      {/* ABOUT ME */}
      <ScrollPage className="center">
        <Animator className=" " animation={batch(Fade(), MoveOut(0, -300))}>
          <div>
            <i className="fa-solid fa-star text-rose-500 dark:text-cyan-300"></i>
          </div>
          <div className="w-screen p-5 fs-4">
            Hello! I'm Byul, a web developer based in Vancouver. <br /> I've built various applications for myself,
            <br /> Now let me build something for you.
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage className="title">
        <Animator className="" animation={batch(Fade(), MoveIn(), StickyIn(), MoveOut(0, -300))}>
          <div className="w-screen max-w-3xl p-5"> How do I pronounce your name?</div>
        </Animator>
      </ScrollPage>
      <ScrollPage className="z-20">
        <Animator animation={batch(Fade(), StickyIn(), MoveOut(0, -300))}>
          <div className="w-screen leading-10">
            <code className="fs-4"> &#91; bjʌl &#93;</code>
            <div className="fs-3">It means 'Star' in Korean</div>
            <div className="mt-10">
              <Link to="/about" className="btns3">
                More about me
              </Link>
            </div>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage className="title">
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -300))}>Recent Projects</Animator>
      </ScrollPage>

      {/* PROJECTS */}
      <ScrollPage className="">
        <Animator className="z-20" animation={batch(StickyIn(), FadeIn(), MoveOut())}>
          {projects && (
            <div className="w-screen">
              <div className="font-bold fs-2">{projects[0].title}</div>
              <div className="fs-4 mt-2">{projects[0].summary}</div>
              <div className="fs-5 mt-10 text-upper">
                <Link to={`/projects/${projects[0].id}`} className="btns3">
                  View Project
                </Link>
              </div>
            </div>
          )}
        </Animator>
        <Animator className="center" animation={batch(MoveIn(), MoveOut(0, -100), FadeOut())}>
          {projects && (
            <div className="thumb relative w-100 max-w-2xl m-7 overflow-hidden opacity-50">
              <img src={projects[0].thumb} alt={projects[0].title} className="w-100" />
            </div>
          )}
        </Animator>
      </ScrollPage>

      <ScrollPage className="">
        <Animator className="z-20" animation={batch(StickyIn(), FadeIn(), MoveOut())}>
          {projects && (
            <>
              <div className="w-screen">
                <div className="font-bold fs-2">{projects[1].title}</div>
                <div className="fs-4 mt-2">{projects[1].summary}</div>
                <div className="fs-5 mt-10 text-upper">
                  <Link to={`/projects/${projects[1].id}`} className="btns3">
                    View Project
                  </Link>
                </div>
              </div>
            </>
          )}
        </Animator>
        <Animator className="center" animation={batch(MoveIn(), MoveOut(0, -100), FadeOut())}>
          {projects && (
            <>
              <div className="thumb relative w-100 max-w-2xl m-7 overflow-hidden opacity-50">
                <img src={projects[1].thumb} alt={projects[1].title} className="w-100" />
              </div>
            </>
          )}
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}
