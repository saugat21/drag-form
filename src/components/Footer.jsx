import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-auto py-3  text-black text-center">
      <div className="container">
        <p>Design and Developed by Saugat Baral &copy; {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer