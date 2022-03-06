import React from "react";

const Footer = ({ items }) => {
  return (
    <footer className="footer">
      <p>
        {items.length} {items.length === 1 ? "Item in List": "Items in List"}
      </p>
    </footer>
  );
};

export default Footer;
