export default function Home() {
  return (
    <main className="relative z-10 flex flex-col items-center mb-10">
      <section className="h-screen font-black text-indigo-300 w-full flex flex-col justify-center items-center ">
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
      <section className="">
        <div className="title">How do I pronounce your name?</div>
        <code> &#91; bjʌl &#93;</code>
        <div>It means Star in Korean</div>
        <button>More about me</button>
      </section>
      <section className="mb-10">
        <div className="title">Recent Projects</div>
        <div>View more projects.. use react scroll effects</div>
      </section>
    </main>
  );
}
