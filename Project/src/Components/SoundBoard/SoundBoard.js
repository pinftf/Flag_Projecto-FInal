import React from "react";
import SoundButton from "./SoundButton";

function Soundboard() {
  return (
    <>
      <h1>Star Wars Soundboard</h1>
      <div className="sound-buttons">
        <SoundButton />
        {/*SoundButton components for each sound */}
      </div>
    </>
  );
}

export default SoundBoard;
