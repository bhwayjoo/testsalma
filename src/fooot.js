import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright © Your Website {currentYear}</p>
        <div className="text-center">
          <a href="#" className="text-white me-3">Privacy Policy</a>
          <a href="#" className="text-white me-3">Terms of Service</a>
          <a href="#" className="text-white">Contact Us</a>
        </div>
        <div className="text-center mt-3">
          <a href="#" className="text-white me-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white me-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
