import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">Кафе Соня</Link>
        <div className="header-right">
          <nav>
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/cakes">Тортики</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
              <li><Link to="/history">История</Link></li>
            </ul>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Переключить тему">
            {theme === 'light' ? (
              <span className="theme-icon">🌙</span>
            ) : (
              <span className="theme-icon">☀️</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
