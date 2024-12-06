import React from 'react';

function Header() {
  return (
    <header className="bg-dark py-5" style={{ backgroundImage: 'url(path-to-your-image.jpg)', backgroundSize: 'cover' }}>
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in Style</h1>
          <p className="lead fw-normal text-white-50 mb-4">With this shop homepage template</p>
          <a href="#" className="btn btn-primary btn-lg">Shop Now</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
