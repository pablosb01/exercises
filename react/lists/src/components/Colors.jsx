import React from "react";
import Color from "./Color";

function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color color={color.name} />
      ))}
    </ul>
  );
}

export default Colors;
