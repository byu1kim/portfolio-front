import { useContext, useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../components/SlickArrows";
import { GlobalContext } from "../components/Context";

export default function Detail() {
  const { id } = useParams();
  const { projects } = useContext(GlobalContext);

  let project;

  useEffect(() => {
    if (project) {
      document.title = project.title;
    }
  }, [project]);

  if (projects) {
    project = projects.find((item) => item.id == id);
    if (!project) {
      return <Navigate to="/*" replace="true" />;
    }
  }

  const settings = {
    dots: true,
    arrows: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: (i) => <div className="w-1.5 h-1.5 bg-gray-300 rounded-full dark:bg-gray-500"></div>,
  };

  return (
    <main className="page p-10 pt-14 ">
      <div className="py-5 hover:text-cyan-500">
        <Link to="/projects">
          <i className="fa-solid fa-arrow-left"></i> Back to Projects
        </Link>
      </div>
      <hr />

      {project && (
        <>
          <div className="mt-10 mb-3 title md:text-5xl lg:text-5xl text-center"> {project.title}</div>
          <div className="mb-5 font-color text-center pb-5 text-lg md:text-xl">{project.summary}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="mb-5">
              <Slider {...settings} className="">
                <img src={project.thumb} alt={project.title} className="bg-rose-100" />
                {project.images.map((i) => (
                  <img src={i} key={i} alt={project.title} />
                ))}
              </Slider>
            </div>

            {/* */}
            <div className="">
              <div className="sub-title">Detail</div>
              <div className="pt-3" dangerouslySetInnerHTML={{ __html: project.detail }} />
              <div className="pt-8 sub-title">Technologies</div>
              <div className="pt-3 flex flex-wrap gap-3 text-sm">
                {project.tags.map((item) => (
                  <div key={item.id} className="bg-gray-300 rounded font-bold px-2 text-black">
                    {item.name}
                  </div>
                ))}
              </div>
              <div className="pt-8 sub-title">Website</div>
              <div className="pt-3 hover:text-rose-500 dark:hover:text-rose-300">
                <a href={project.website}>{project.website}</a>
              </div>
              <div className="pt-8 sub-title">Github</div>
              <div className="pt-3 hover:text-rose-500 dark:hover:text-rose-300">
                <a href={project.github}>{project.github}</a>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
