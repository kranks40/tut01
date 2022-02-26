import React from "react";

const Footer = () => {
  const handleFooter = () => {
    const today = new Date();
    return today.getFullYear();
  };

  return (
    <footer className="footer">
      <p>Copyright &copy; {handleFooter()} </p>
    </footer>
  );
};

export default Footer;
