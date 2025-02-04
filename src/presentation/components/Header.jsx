//presentation/components/header
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__content container">
                
                <Link to="/" className='header__logo'>
                    <img src="" alt="logo" />
                </Link>

                <div id='hambugerMenu' className="header__toggle hide-for-disktop">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="header__nav hide_for_mobile">
                    <Link to="/about" className="header__link">About US</Link>
                    <Link to="/services" className="header__link">Services</Link>
                    <Link to="/useCases" className="header__link">Use Cases</Link>
                    <Link to="/pricing" className="header__link">Pricing</Link>
                    <Link to="/blog" className="header__link">Blog</Link>
                </div>
                <Link  to="/" className="button header__cta"></Link>
            </nav>
            <div className="header__menu has-fade">
                <Link to="/about" className="header__link">About US</Link>
                <Link to="/services" className="header__link">Services</Link>
                <Link to="/useCases" className="header__link">Use Cases</Link>
                <Link to="/pricing" className="header__link">Pricing</Link>
                <Link to="/blog" className="header__link">Blog</Link>
            </div>

            
        </header>
    )
}

export default Header;