import React from "react";
import soundFile from ""; // Sound file for each sound

function SoundButton() {
  const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return <button onClick={playSound}>Play Sound</button>;
}

export default SoundButton;
