import React from "react";
import AnimatedCursor from "react-animated-cursor";
function AnimCursor() {
  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color="0,71,171"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}

export default AnimCursor;
