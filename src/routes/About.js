import Chart from "../components/Chart";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../components/Context";
import WordCloud from "../components/WordCloud";
import { chartData } from "../data/temp";
export default function About() {
  const { darkMode } = useContext(GlobalContext);

  useEffect(() => {}, []);

  return (
    <main className="page">
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-white">
        <div className="flex flex-col justify-center pb-10">
          <div className="title text-5xl text-center dark:text-white">About.</div>
          <div className="pb-5">
            Hi, I'm Byul Kim, a recent graduate with a passion for web development, based in Vancouver, BC
          </div>
          <div className="flex justify-center">
            <button className="flex items-center rounded bg-blue-400  px-3 py-2 dark:bg-cyan-400">
              Download Resume
            </button>
          </div>
        </div>
        <div>
          {darkMode ? (
            <img className="" src="https://i.imgur.com/KAVlh5Z.jpg" alt="dark-profile-img" />
          ) : (
            <img src="https://i.imgur.com/zC1s0t2.jpg" alt="light-profile-img" />
          )}
        </div>
      </section>

      <section className=" ">
        <div className="title text-center">Skills</div>
        <Chart data={chartData} />
        <div className="text-gray-500 font-bold text-2xl">Frontend</div>
        HTML, CSS, Sass, Javascript, Bootstrap, jQuery, Tailwind
        <div className="text-gray-500 font-bold text-2xl">Backend</div>
        Node.JS, ASP.NET, Python, SQL, MongoDB
        <WordCloud />
      </section>
    </main>
  );
}
