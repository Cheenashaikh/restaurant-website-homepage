
import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./header.css";
import image from "../../assets/Untitled (3).jpg"



function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
 
 

    return (
        <div>
            <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
                <div className="content">
                    <div className="logo">
                        <img src="https://www.zeytin.pk/img/zett.png" alt="Logo"  />
                    </div>

                    <ul className="menu-list">
                        <div className="icon cancel-btn" onClick={toggleMenu}>
                            <li><i className="fas fa-times"></i></li>
                        </div>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Reservation</a></li>
                        <li><a href="#">Order Now</a></li>
                    </ul>
                    <div className="icon menu-btn" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>

            <div className="center-image" >
                <img src={image}  />
            </div>
            <div className="right-image">
                <img src="https://www.zeytin.pk/ext_iframe/envato/lucha/assets/images/slider/shape-img2.svg" />
            </div>
            <div className="left-image">
                <img src="https://www.zeytin.pk/ext_iframe/envato/lucha/assets/images/slider/shape-img2.svg" />
            </div>
        </div>
    );
}

export default Header;
