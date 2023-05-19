import React from "react";

function homePage() {
  return (
    <div>
      <header>
        <h1>Welcome to the Star Wars Galaxy!</h1>
      </header>
      <main>
        <h2>About Star Wars</h2>
        <p>
          Star Wars is a popular science fiction franchise set in a galaxy far,
          far away. It includes epic battles, iconic characters, and a rich,
          immersive universe.
        </p>
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Star Wars Website. All rights
          reserved
        </p>
      </footer>
    </div>
  );
}

export default homePage;
