import * as data from "../data/temp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function Projects() {
  const tags = data.tags.map((tag) => (tag = tag.name));
  const [projects, setProjects] = useState(data.projects);
  const [filters, setFilters] = useState(tags);

  const addFilter = (tag) => {
    // If filter array and Tags array are same, that's initial (same as clear button)
    if (filters.length === tags.length) {
      setFilters([tag]);
    } else {
      // Remove filter selection
      if (filters.includes(tag)) {
        const deletedFilter = filters.filter((item) => item !== tag);
        // If nothing to filter, set initial Filter
        if (deletedFilter.length === 0) {
          setFilters(tags);
        } else {
          setFilters(deletedFilter);
        }
      } else {
        setFilters([tag, ...filters]);
      }
    }
  };

  const clearFilter = () => {
    document.querySelectorAll(".tagBtn").forEach((btn) => btn.classList.remove("tag"));
    setFilters(tags);
  };

  return (
    <main className="page p-10 pt-14">
      <div className="title center m-10">Projects.</div>
      <div className="flex-wrap center gap-3 mt-2">
        <button onClick={clearFilter} className="hover:text-rose-500 dark:hover:text-rose-300">
          Clear
        </button>
        <div className="text-center ">
          {tags
            ? tags.splice(0, 5).map((tag, index) => (
                <button
                  key={index}
                  className="tagBtn btns2 px-2 mr-1"
                  onClick={(e) => {
                    e.currentTarget.classList.toggle("tag");
                    addFilter(tag);
                  }}
                >
                  {tag}
                </button>
              ))
            : ""}
        </div>
      </div>

      <section className="pt-8 grid md:grid-cols-2 gap-5">
        {projects
          ? projects.map((item) =>
              item.tags.some((tag) => filters.includes(tag.name)) ? (
                <div key={item.id} className="relative mb-5">
                  <Fade>
                    <Link to={`/projects/${item.id}`}>
                      <img
                        src={`${item.thumb}`}
                        alt={`${item.title}`}
                        className="bg-gray-200 shadow-lg md:bg-transparent md:shadow-none dark:bg-gray-700 dark:md:bg-transparent"
                      />
                      <div className="text-sha md:absolute md:h-full md:w-full md:z-30 md:top-0 md:center md:bg-white/80 md:dark:bg-gray-900/80 md:opacity-0 md:hover:opacity-100">
                        <div className="font-bold text-xl pt-5">{item.title}</div>
                        <div className="text-md">{item.summary}</div>
                        <div className="text-rose-400 mt-2 text-xs dark:text-rose-500">
                          {item.tags.map((t, index) => (
                            <span
                              key={index}
                              className="opacity-70 mr-2 border border-rose-400 px-1 bg-white dark:bg-gray-900 dark:border-rose-500"
                            >
                              {t.name}
                            </span>
                          ))}
                        </div>
                        <button className="btns3 mt-7 hidden md:block">View Project</button>
                      </div>
                    </Link>
                  </Fade>
                </div>
              ) : (
                ""
              )
            )
          : "Project is Empty"}
      </section>
    </main>
  );
}
