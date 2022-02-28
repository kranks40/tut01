import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
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
    <main className="content">
      {/* check if item.length is empty or has data. If there is data then */}
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={
                  item.checked
                    ? { textDecoration: "double line-through" }
                    : null
                }
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            color: "#2590D7",
            textTransform: "capitalize",
            background: "#D0F1FD",
            margin: "2rem",
            padding: " 0.5rem 1rem",
          }}
        >
          Your List is empty
        </p>
      )}
    </main>
  );
};

export default Content;
