import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



var backgrounds = {
  particles,
  stars,
  blocks,
  triangles,
  balls,
  bubbles,
  sus
};

function Background() {
  var [localBackground] = useLocalBackground();

  var realBackground =
    localBackground in backgrounds && backgrounds[localBackground];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    realBackground && (
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{ display: realBackground ? "initial" : "none" }}
        options={realBackground}
      />
    )
  );
}

export default Background;
