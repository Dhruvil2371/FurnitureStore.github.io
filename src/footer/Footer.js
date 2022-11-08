import React from "react";
import "./footer.css";
import card from '../photos/card.png'
import footer from '../photos/footer.png'

const Footer = (props) => {
  return (
    <footer>
        <div className="footer">
        <img src={footer} alt='fot'></img>
      <div className="footer-cont">
        <div>
        <h6>INFORMATION</h6>
        <ul>
          <li>
            Privacy and Cookie Policy
            <br></br>
            About Us
            <br></br>
            Search Terms
            <br></br>
            Advanced Search
            <br></br>
            Orders and Returns
            <br></br>
            Contact Us
          </li>
        </ul>
      </div>
      <div>
        <h6>CUSTOMER SUPPORT</h6>
        <ul>
          <li>Help & FAQs
          <br></br>
Contact Us
<br></br>
Returns
<br></br>
Order History
<br></br>
Sample Links</li>
        </ul>
      </div>
      <div>
        <h6>CONTACT US</h6>
        <ul>
          <li>Montergade 19 1140
            <br></br>
Copenhagen, Denmark
<br></br>
+45 878-xx-xx</li>
        </ul>
      </div>
      <div className='sub'>
        <h6>SUBSCRIBE US</h6>
        <input type='search' placeholder='Enter your email address'/>
        <img src={card} alt='card'/>
      </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
