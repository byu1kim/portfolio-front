import { projects } from "../data/temp";
import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  FadeOut,
  MoveIn,
  MoveOut,
  StickyIn,
  StickyOut,
  ZoomIn,
  ZoomOut,
  Sticky,
} from "react-scroll-motion";

export default function Home() {
  // react reveal
  // react scroll
  // react scroll motion

  return (
    <ScrollContainer className="page">
      <ScrollPage className="">
        <section className="z-20 h-screen font-black text-indigo-300 w-full flex flex-col justify-center items-center ">
          <div className="flex relative z-10">
            <Zoom tada cascade="true" damping={0.1}>
              <span className="letter z-10 before:content-['I']">I</span>
              <span className="letter ">&nbsp;</span>
              <span className="letter before:content-['a']">a</span>
              <span className="letter before:content-['m']">m</span>
              <span className="letter ">&nbsp;</span>
              <span className="letter before:content-['B'] before:-rotate-12">B</span>
              <span className="letter before:content-['y']">y</span>
              <span className="letter before:content-['u']">u</span>
              <span className="letter before:content-['l']">l</span>
            </Zoom>
          </div>

          <div className="leading-7 flex relative yoyo animate__delay-2s">
            <Zoom cascade="true" damping={0.1} className="yoyo animate__delay-2s">
              <span className="letter"></span>
              <span className="letter"></span>
              <span className="letter"></span>
              <span className="letter"></span>
              <span className="letter"></span>
              <span className="letter"></span>
              <span className="letter"></span>
              <span className="letter"></span>
              <span className="letter"></span>
              <span className="letter before:content-['W']">W</span>
              <span className="letter before:content-['e']">e</span>
              <span className="letter before:content-['b']">b</span>
              <span className="letter">&nbsp;</span>
              <span className="letter before:content-['D']  before:-rotate-12">D</span>
              <span className="letter before:content-['e']">e</span>
              <span className="letter before:content-['v']">v</span>
              <span className="letter before:content-['e']">e</span>
              <span className="letter before:content-['l']">l</span>
              <span className="letter before:content-['o']">o</span>
              <span className="letter before:content-['p']">p</span>
              <span className="letter before:content-['e']">e</span>
              <span className="letter before:content-['r']">r</span>
              {/* <div className="back-letter absolute text-rose-200 z-0">Web&nbsp;Developer</div> */}
            </Zoom>
          </div>
        </section>
      </ScrollPage>
      <ScrollPage className="z-20">
        <Animator animation={batch(Sticky(), FadeIn())}>
          <div className="title">How do I pronounce your name?</div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Sticky())}>
          <code> &#91; bjʌl &#93;</code>
          <div>It means Star in Korean</div>
          <button>More about me</button>
        </Animator>
      </ScrollPage>
      <ScrollPage className="z-20">
        <Animator className="title" animation={batch(StickyIn(), FadeIn(), FadeOut(), MoveOut(0, -200))}>
          Recent Projects
        </Animator>
      </ScrollPage>

      {projects.map((project) => (
        <ScrollPage>
          <Fade>
            <div>{project.title}</div>
          </Fade>

          <img src={`${project.desktop.thumbUrl}`} alt={project.title} />
        </ScrollPage>
      ))}
    </ScrollContainer>
  );
}
