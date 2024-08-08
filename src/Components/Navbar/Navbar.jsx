import React, { useContext, useRef, useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false);
    const [menu,setMenu] = useState("shop");
    const menuRef = useRef(null);
    const {getTotalCartItems} = useContext(ShopContext);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src={logo} alt='' />
                    <p>SHOPPER</p>
                </Link>
            </div>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <li onClick={()=>{setMenu("shop"); closeMenu();}}> <Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men"); closeMenu();}}>  <Link style={{textDecoration: 'none'}}  to='/men'>Men</Link>  {menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women"); closeMenu();}}>  <Link style={{textDecoration: 'none'}}  to='/women'>Women</Link>  {menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids"); closeMenu();}}>  <Link style={{textDecoration: 'none'}}  to='/kids'>Kids</Link>  {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div ref={menuRef} className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                ︽
            </div>
            <div className='nav-login-cart'>
                <Link to='/login'><button> Login </button></Link>
                <Link to='/cart'><img src={cart_icon} alt=''/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>
    )
}

export default Navbar