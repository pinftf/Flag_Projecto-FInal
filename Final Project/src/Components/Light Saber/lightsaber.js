import React from "react";

function lightsaber({ color }) {
  const style = {
    width: "200px",
    height: "5px",
    backgroundColor: color,
    borderRadius: "50px",
    margin: "10px",
    boxShadow: "0 0 10px 5px ${color}",
  };
  return <div style={style}></div>;
}

export default lightsaber;
