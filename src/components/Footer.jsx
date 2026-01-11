import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Кафе Соня</h3>
          <p>Ул. Кондитерская, д. 15</p>
          <p>Минск, Беларусь</p>
        </div>
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Телефон: +375 (29) 123-45-67</p>
          <p>Email: info@sonya-cafe.by</p>
        </div>
        <div className="footer-section">
          <h3>Режим работы</h3>
          <p>Пн-Вс: 9:00 - 21:00</p>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Кафе Соня. Все права защищены.</p>
          <p>УНП: 123456789 | Свидетельство о государственной регистрации №12345 от 01.01.2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
