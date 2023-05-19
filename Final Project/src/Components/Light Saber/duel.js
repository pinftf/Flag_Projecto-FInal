import React, { useState } from "react";
import player from "./player";

function duel() {
  const [player1Health, setPlayer1Health] = useState(100);
  const [player2Health, setPlayer2Health] = useState(100);

  const handleAttack = (attacker, defender) => {
    const damage = Math.floor(Math.random() * 10) + 1;
    defender === "player1"
      ? setPlayer1Health(player1Health - damage)
      : setPlayer2Health(player2Health - damage);
  };
  return (
    <div>
      <h1>Lightsaber Duel</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Player name="Luke Skywalker" color="blue" health={player1Health} />
        <Player name="Darth Vader" color="red" health={player2Health} />
      </div>
      <button onClick={() => handleAttack("player1", "player2")}>
        Luke Skywalker Attacks
      </button>
      <button onClick={() => handleAttack("player2", "player1")}>
        Darth Vader Attacks
      </button>
    </div>
  );
}

export default duel;
