import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

function Navbar() {
const [nav,setnav] = useState(false);
const changeBackground =() => {
    if (window.scrollY >= 50) {
        setnav(true);
    }
else{
    setnav(false);
}

}
window.addEventListener('scroll',changeBackground);
  return (
    <nav className ={nav ? "nav active" : "nav"}> 
    <Link to='Header' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt=''/>
    </Link>
    <input className='menu-btn' type='checkbox' id='menu-btn'/>
    <label className='menu-icon' for='menu-btn' >
        <span className='nav-icon'></span>

    </label>
    <ul className='menu'>
        <li><Link to='features' smooth ={true} duration={1000}>Features</Link></li>
        <li><Link to='history'smooth ={true} duration={1000}>History</Link></li>
        <li><Link to='Vapes'smooth ={true} duration={1000}>Vapes</Link></li>
        <li><Link to='slider'smooth ={true} duration={1000}>Blog</Link></li>
        <li><Link to='contact'smooth ={true} duration={1000}>Contact</Link></li>
        <li><Link to='#'smooth ={true} duration={1000}>Id verification</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar