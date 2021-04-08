import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
            </div>
            <div>
                깃헙링크이미지 전화번호 이메일
            </div>
        </header>
    )
}

export default Header;