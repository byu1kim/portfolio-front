import * as data from "../data/temp";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  //pagination? infinite scrolling?
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
    <main className="page p-10">
      <div className="title center">Projects.</div>
      <div className="flex-wrap center gap-3 ">
        <button onClick={clearFilter} className="hover:text-rose-500 dark:text-rose-300">
          Clear
        </button>
        <div>
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

      <section className="pt-8 grid  md:grid-cols-2 gap-5">
        {projects
          ? projects.map((item) =>
              item.tags.some((tag) => filters.includes(tag.name)) ? (
                <>
                  <div key={item.id} className="  relative  ">
                    <Link to={`/projects/${item.id}`}>
                      <img src={`${item.thumb}`} alt={`${item.title}`} className=" " />
                      <div className="hidden md:flex md:opacity-0 bottom-0 h-full w-full absolute bg-white/50 center p-10 md:hover:opacity-100 ">
                        <div className="font-bold fs-3">{item.title}</div>
                        <div className="text-center">{item.summary}</div>
                        <button className="btns pt-7">View Project</button>
                      </div>
                      <div className="absolute bottom-0 h-full w-full p-3 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent md:hidden">
                        <div className="font-bold fs-4 text-white">{item.title}</div>
                        <div className="text-xs text-white">{item.summary}</div>
                        <div className="text-cyan-300">React, JS</div>
                      </div>
                    </Link>
                  </div>
                </>
              ) : (
                ""
              )
            )
          : "Project is Empty"}
      </section>
    </main>
  );
}
