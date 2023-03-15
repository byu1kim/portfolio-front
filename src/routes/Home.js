import { projects } from "../data/temp";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

export default function Home() {
  // react reveal
  // react scroll
  // react scroll motion
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollContainer>
      <ScrollPage className="">
        <section className="z-20 h-screen font-black text-indigo-300 w-full flex flex-col justify-center items-center ">
          <div className="flex relative z-10">
            <span className="letter z-10 before:content-['I']">I</span>
            <span className="letter ">&nbsp;</span>
            <span className="letter before:content-['a']">a</span>
            <span className="letter before:content-['m']">m</span>
            <span className="letter ">&nbsp;</span>
            <span className="letter before:content-['B'] before:-rotate-12">B</span>
            <span className="letter before:content-['y']">y</span>
            <span className="letter before:content-['u']">u</span>
            <span className="letter before:content-['l']">l</span>

            {/* <div className="back-letter absolute text-rose-200 z-0">I&nbsp;am&nbsp;Byul,</div> */}
          </div>
          <div className="leading-7 flex relative">
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
          </div>
        </section>
      </ScrollPage>
      <ScrollPage className="z-20">
        <section className="">
          <div className="title">How do I pronounce your name?</div>
          <code> &#91; bjʌl &#93;</code>
          <div>It means Star in Korean</div>
          <button>More about me</button>
        </section>
      </ScrollPage>
      <ScrollPage className="z-20">
        <div className="title">Recent Projects</div>

        {/*   FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut, */}

        {/* Move( dx:number, dy:number, outDx:number, outDy:number ) */}
        {projects.map((project) => (
          <Animator animation={batch(Fade())}>
            <div>
              <div>{project.title}</div>
              <img src={`${project.desktop.thumbUrl}`} alt={project.title} />
            </div>
          </Animator>
        ))}
      </ScrollPage>
    </ScrollContainer>
  );
}
