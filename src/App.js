import Header from "./Header";
import Content from "./Content";
import React, { useState } from "react";

import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Pizza",
    },
    {
      id: 2,
      checked: false,
      item: "Sugar",
    },
    {
      id: 3,
      checked: false,
      item: "Rice",
    },
    {
      id: 4,
      checked: false,
      item: "Flour",
    },
    {
      id: 5,
      checked: false,
      item: "Milk",
    },
  ]);

  const handleCheck = (id) => {
    // items.map referring to item in the list.compare item.id with the id that was passed in the function.return a new id if it was called
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Groceries Listing" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
