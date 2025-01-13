import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-4 py-3 fw-bold  text-black text-center">
      <div className="container">
        <p>Design and Developed by Saugat Baral &copy; {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer