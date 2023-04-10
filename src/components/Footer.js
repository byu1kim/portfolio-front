import { useContext, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { GlobalContext } from "../components/Context";

export default function Footer() {
  const { darkMode } = useContext(GlobalContext);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {darkMode ? (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#111827",
              },
            },
            fpsLimit: 120,
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.1,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: false,
                  speed: 0.1,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 5,
                  opacity: 0,
                  speed: 1,
                },
                repulse: {
                  distance: 500,
                  duration: 1,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      ) : (
        ""
      )}
      <footer className="text-center p-5 z-20 relative bg-white dark:bg-gray-900">
        <div className="flex gap-2 justify-center m-2">
          <a href="/">
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a href="https://github.com/byu1kim">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/byul-kim-523362250">
            <i className="fa-brands fa-linkedin"></i>{" "}
          </a>

          <a href="https://instagram.com/byu1kim">
            <i className="fa-brands fa-instagram"></i>{" "}
          </a>

          <a href="https://www.youtube.com/@byulkim3356">
            <i className="fa-brands fa-youtube"></i>{" "}
          </a>
        </div>
        <div className="text-xs"> &copy; 2023 Byul Kim. All rights reserved.</div>
      </footer>
    </>
  );
}
