import { TagCloud } from "react-tagcloud";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export default function WordCloud() {
  const data = [
    { value: "jQuery", count: 25 },
    { value: "MongoDB", count: 18 },
    { value: "JavaScript", count: 38 },
    { value: "React", count: 30 },
    { value: "Nodejs", count: 28 },
    { value: "Express.js", count: 25 },
    { value: "HTML5", count: 33 },
    { value: "CSS3", count: 20 },
    { value: "Webpack", count: 22 },
    { value: "Babel.js", count: 7 },
    { value: "ECMAScript", count: 25 },
    { value: "Jest", count: 15 },
    { value: "Mocha", count: 17 },
    { value: "React Native", count: 27 },
    { value: "Angular.js", count: 30 },
    { value: "TypeScript", count: 15 },
    { value: "Flow", count: 30 },
    { value: "NPM", count: 11 },
  ];

  const options = {
    luminosity: "light",
    hue: "blue",
  };

  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <MouseParallaxChild factorX={0.3} factorY={0.5}>
        <TagCloud
          minSize={12}
          maxSize={55}
          tags={data}
          colorOptions={options}
          className="myTagCloud w-full text-center"
        />
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.7} factorY={0.8}>
        <img src="example2.jpg" alt="" />
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
