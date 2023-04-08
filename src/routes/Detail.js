import * as data from "../data/temp";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../components/SlickArrows";

export default function Detail() {
  const { id } = useParams();

  const project = data.projects[id - 1];

  const settings = {
    customPaging: (i) => <img src={project.images[i]} alt={project.title} />,
    dots: true,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <main className="page p-10">
      <div className="pb-5 hover:text-blue-500">
        <Link to="/projects">
          <i className="fa-solid fa-arrow-left"></i> Back to Projects
        </Link>
      </div>
      <hr />
      <div>
        <div className="text-2xl font-bold pt-5">{project.title}</div>
        <div className="font-color pt-2">{project.summary}</div>
        <div className="pt-5">
          <Slider {...settings}>
            {project.images.map((i) => (
              <div>
                <img src={i} alt={project.title} />
              </div>
            ))}
          </Slider>
        </div>
        {/* */}
        <div className="pt-12 font-bold">Detail</div>
        <div className="pt-3">{project.detail}</div>
        <div className="pt-8 font-bold">Technologies</div>
        <div className="pt-3 flex capitalize text-sm">
          {project.tags.map((item) => (
            <div key={item.id} className="bg-gray-300 mr-2 rounded px-2 font-bold">
              {item.name}
            </div>
          ))}
        </div>
        <div className="pt-8 font-bold">Website</div>
        <div className="pt-3 ">
          <a href={project.website}>{project.website}</a>
        </div>

        <div className="pt-8 font-bold">Github</div>
        <div className="pt-3 ">
          <a href={project.github}>{project.github}</a>
        </div>
      </div>
    </main>
  );
}
