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
  const { darkMode } = useContext(GlobalContext);
  return (
    <ScrollContainer className="relative z-10 text-center font-color dark:darkmode">
      <ScrollPage className="">
        <section className="w-100 h-screen center font-extrabold tracking-tighter bg-cyan-500 dark:text-cyan-300 dark:bg-transparent">
          <div className="fs-0 text-sha text-white dark:text-cyan-300 max-w-xl">Byul Kim.</div>
          <div className="fs-1 text-sha text-gray-300 mt-3 dark:text-white">Web Developer</div>
          <div className="fixed bottom-0 p-5 z-0 down-arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          {darkMode ? <div></div> : ""}
        </section>
      </ScrollPage>

      {/* ABOUT ME */}
      <ScrollPage className="center">
        <Animator className=" " animation={batch(Fade(), Sticky(), MoveOut(0, -300))}>
          <div>
            <i className="fa-solid fa-star text-cyan-500 dark:text-cyan-300"></i>
          </div>
          <div className="w-screen p-5 fs-4">
            Hello! I'm Byul, a web developer based in Vancouver. <br /> I've built for myself, now let me build for you.
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage className="title">
        <Animator className="" animation={batch(Fade(), MoveIn(), Sticky(), MoveOut(0, -300))}>
          <div className="w-screen max-w-3xl p-5"> How do I pronounce your name?</div>
        </Animator>
      </ScrollPage>

      <ScrollPage className="z-20">
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -300))}>
          <div className="w-screen leading-10">
            <code> &#91; bjʌl &#93;</code>
            <div className="fs-3">It means Star in Korean</div>
            <div className="mt-10">
              <Link to="/about" className="btns">
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
          <div className="w-screen">
            <div className="font-bold fs-2 ">Byultube</div>
            <div className="fs-4 mt-2">Youtube Clone App built in Node.js</div>
            <div className="fs-5 mt-10 text-upper">
              <Link to="/about" className="btns">
                View Project
              </Link>
            </div>
          </div>
        </Animator>
        <Animator className="center" animation={batch(MoveIn(), MoveOut(), FadeOut())}>
          <div className="thumb relative w-100 max-w-2xl m-7 overflow-hidden shadow-md rounded-lg">
            <img src="https://i.imgur.com/MBArd5I.png" alt="byultube" className="w-100" />
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage className="">
        <Animator className="z-20" animation={batch(StickyIn(), FadeIn(), MoveOut())}>
          <div className="w-screen">
            <div className="font-bold fs-2 ">Movie App</div>
            <div className="fs-4 mt-2">Movie app built in React.js</div>
            <div className="fs-5 mt-10 text-upper">
              <Link to="/about" className="btns">
                View Project
              </Link>
            </div>
          </div>
        </Animator>
        <Animator className="center" animation={batch(MoveIn(), MoveOut(), FadeOut())}>
          <div className="thumb relative w-100 max-w-2xl m-7 overflow-hidden shadow-md rounded-lg">
            <img src="https://i.imgur.com/4pXB2BQ.png" alt="byulflix" className="w-100" />
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}
