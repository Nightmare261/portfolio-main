import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI and Data Science Student",
          "Data Visualization",
          "Python",
          "Ai Tools",
          "Machine Learning",
          "Deep Learning",
          "Cyber Security"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

