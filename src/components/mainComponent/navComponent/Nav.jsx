import React, { useState } from "react";
import './nav.css'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Функция для переключения состояния меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <nav className="main__nav nav">
            <div className="nav__logo logo">
                <img className="logo__image" src="img/logo.png" alt="logo" />
            </div>
            <div className="nav__burger burger" onClick={toggleMenu}>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
            <div className={`nav__menu menu ${isMenuOpen ? 'menu_open' : ''}`}>
                <ul className="menu__list">
                <li className="menu__item">
                    <a href="#" className="menu__link">Главное</a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">Мой плейлист</a>
                </li>
                <li className="menu__item">
                    <a href="../signin.html" className="menu__link">Войти</a>
                </li>
                </ul>
            </div>
            </nav>
    )
}

export default Nav;