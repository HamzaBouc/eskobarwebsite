import React from 'react';
import InstagramEmbed from '../Components/Instagramembed'; 


const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <hr className="footer-line" />
        <div className='sb_footer-links'>
          <div className='sb_footer-links-div'>
            <h3>Company</h3>
            <a href="/About us">
              <p>About us</p>
            </a>
            <a href="../Components/History.jsx">
              <p>History</p>
            </a>
            <a href="../Components/Vapes">
              <p>Vapes</p>
            </a>
            <a href="../Components/Blog.js">
              <p>Blog</p>
            </a>
          </div>

          <div className='sb_footer-links-div'>
            <h3>Support</h3>
            <a href="../Components/ID verification">
              <p>ID Verification</p>
            </a>
            <a href="../Components/Contact.jsx">
              <p>Contact</p>
            </a>
          </div>

          <div className='sb_footer-links-div'>
            <h3> Follow Us</h3>
            <a href="/src/Components/Newsletter.jsx">
              <p>Newsletter</p>
            </a>
          </div>

          <div className='sb_footer-links-div'>
            <h3> Join us on </h3>
            <div className='Socialicon'>
            <InstagramEmbed />
            </div>
          </div>
        </div>
        <hr></hr>

        <div className='sb_footer-below'>
          <div className='sb_footer-copyright'>
            <p>
              @{new Date().getFullYear()} Eskobar. All right reserved.
            </p>
          </div>
          <div className='sb_footer-below-links'>
            <a href="/Terms"><div><p> Terms & Conditions</p></div></a>
            <a href="/Privacy"><div><p> Privacy</p></div></a>
            <a href="/Security"><div><p> Security</p></div></a>
            <a href="/cookie"><div><p> Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
