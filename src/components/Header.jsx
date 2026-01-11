import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">Кафе Соня</Link>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/cakes">Тортики</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/history">История</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
