import React from "react";

const player = ({ name, color, health }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Health: {health}</p>
      <Lightsaber color={color} />
    </div>
  );
};

export default player;
