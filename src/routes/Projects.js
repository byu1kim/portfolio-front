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
    document.querySelectorAll(".tagBtn").forEach((btn) => btn.classList.remove("borders"));
    setFilters(tags);
  };

  return (
    <main className="page">
      <div className="text-4xl">Projects</div>
      <div className="flex pt-8">
        <button onClick={clearFilter}>Clear</button>
        {tags
          ? tags.map((tag, index) => (
              <button
                key={index}
                className="tagBtn bg-gray-200 rounded px-2 mr-1"
                onClick={(e) => {
                  e.currentTarget.classList.toggle("borders");
                  addFilter(tag);
                }}
              >
                {tag}
              </button>
            ))
          : ""}
      </div>

      <section className="pt-8 grid gird-cols-2 md:grid-cols-2 gap-5">
        {projects
          ? projects.map((item) =>
              item.tags.some((tag) => filters.includes(tag.name)) ? (
                <div key={item.id} className="shadow-lg shadow-gray-300 rounded-xl mb-8 relative text-white">
                  <Link to={`/projects/${item.id}`}>
                    <img src={`${item.mobile.thumbUrl}`} alt={`${item.title}`} className="rounded-xl" />
                    <div className="md:opacity-0 bottom-0 h-3/4 w-full absolute bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5 rounded-xl md:hover:opacity-100 ">
                      <div className="uppercase font-bold">{item.title}</div>
                      <div>{item.summary}</div>
                    </div>
                  </Link>
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
