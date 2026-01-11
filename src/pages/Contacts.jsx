import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо за ваш отзыв! Мы ценим ваше мнение.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="section">
        <h2>Контакты</h2>
        <div className="contact-info">
          <h2>Как нас найти</h2>
          <p><strong>Адрес:</strong> Ул. Кондитерская, д. 15, Минск, Беларусь</p>
          <p><strong>Телефон:</strong> +375 (29) 123-45-67</p>
          <p><strong>Email:</strong> info@sonya-cafe.by</p>
          <p><strong>Режим работы:</strong> Понедельник - Воскресенье: 9:00 - 21:00</p>
          <p><strong>Социальные сети:</strong></p>
          <p>Instagram: @sonya_cafe</p>
          <p>Facebook: Кафе Соня</p>
          <p>VK: vk.com/sonya_cafe</p>
        </div>

        <div className="contact-form">
          <h2>Оставить отзыв</h2>
          <p>Мы будем рады узнать ваше мнение о нашем кафе и наших тортах!</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Телефон:</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Ваш отзыв:</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="order-btn">Отправить отзыв</button>
          </form>
        </div>
      </section>

      <section className="section">
        <h2>Как добраться</h2>
        <p>
          Наше кафе расположено в центре города, недалеко от главной площади. Ближайшая остановка общественного 
          транспорта находится в 100 метрах от кафе. Также есть парковка для автомобилей.
        </p>
        <p>
          Если у вас возникли вопросы или вы хотите сделать заказ, пожалуйста, свяжитесь с нами по телефону 
          или через форму обратной связи. Мы всегда рады помочь вам!
        </p>
      </section>
    </>
  );
};

export default Contacts;
