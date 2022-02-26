import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Oketo", "Melissa", "Durwin", "Mellia", "Azalea"];
        const int = Math.floor(Math.random() * 5);
        return names[int];
      };

  return (
    <main className="content">
      <p>Hello {handleNameChange()} </p>
    </main>
  )
}

export default Content
