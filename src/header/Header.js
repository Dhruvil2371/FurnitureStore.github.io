import React from "react";
import "./Header.css";
import headerLogo from '../photos/logo-header.png'

const Header = (props) => {
  return (
    <header>
      <div className="presentational-cont">
        <div className="inner-cont">
          <ul className="header-contact">
            <li>Contact</li>
            <li>FAQ</li>
            <li className="ship">Ship to United State</li>
          </ul>
        </div>
        <div>
          <ul className="header-selection">
            <li>
              <select>
                <option>Furniture Store</option>
              </select>
            </li>
            <li>
              <select>
                <option>USD US-Dollar</option>
              </select>
            </li>
            <li>
              <select>
                <option>English</option>
              </select>
            </li>
            <li className="wish">Wish List</li>
            <li>Your Account</li>
          </ul>
        </div>
      </div >
      <hr></hr>
      <div className="presentational">
        {/* <figure> */}
          <img className="header-image"
            src={headerLogo}
            alt="unlimited-logo"
          />
        {/* </figure> */}
        <div className="main-outside-wrapper" >
          <div className="searchbar">
          <select>
            <option>All Categories</option>
          </select>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <form className="search" >
          <input
            type="text"
            placeholder="Search entire store here..."
            name="search"
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
          </form>
          </div>
          <div className="outside-wrapper">
          <div className="circle">
            <i className="fa fa-phone"></i>
            </div>
            <div className="inside-wrapper">
              <p>Need help? Call us now:</p>
              <p>(123) 455688719</p>
            </div>
          </div>
          <div className="outside-wrapper">
            <div className="circle">
            <i className="fa fa-shopping-cart"></i>
            </div>
            <div className="inside-wrapper">
              <p>My Cart</p>
              <p>$ 0.00</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul className="header-nav">
            <li>FURNITURE</li>
            <li>MATTRESSES</li>
            <li>RENOVATION</li>
            <li>LIGHTINHGS & RUGS</li>
            <li>CATEGORY</li>
            <li>DECOR & PILLOWS</li>
            <li>BED & BATH</li>
            <li>OUR BLOG</li>
            <li>CONTACT US</li>
            <li>HOME IDEAS</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
