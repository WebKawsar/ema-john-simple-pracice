import React from 'react';
import "./Header.css";
import logo from "../../images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Ema John Logo"/>
            </div>
            <div className="main-menu">
                <nav>
                    <ul>
                        <li>
                            <a href="/Shop">Shop</a>
                        </li>
                        <li>
                            <a href="/review">Order Review</a>
                        </li>
                        <li>
                            <a href="/manage">Manage Inventory</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;