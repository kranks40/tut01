import React, { useState } from "react";

const Content = () => {
  const [names, setNames] = useState('Oketo');

  const handleNameChange = (e) => {
    e.preventDefault();
    const names = ["Oketo", "Melissa", "Durwin", "Mellia", "Azalea"];
    const int = Math.floor(Math.random() * 5);
    setNames(names[int]);
  };

  const handleClick = () => {
    console.log("You clicked me");
  };

  return (
    <main className="content">
      <p>Hello {names} </p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleNameChange}>Change Name</button>
    </main>
  );
};

export default Content;
