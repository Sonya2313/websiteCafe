import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cakes = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await fetch('/cakes');
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        setCakes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCakes();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <p>Загрузка тортиков...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <p>Ошибка: {error}</p>
      </section>
    );
  }

  return (
    <>
      <section className="section">
        <h2>Наши тортики</h2>
        <p>
          В нашем кафе представлены три фирменных торта, каждый из которых приготовлен по особому рецепту 
          и с любовью. Мы используем только натуральные ингредиенты и традиционные технологии приготовления.
        </p>
      </section>

      <div className="cakes-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.image} alt={cake.name} />
            <div className="cake-card-content">
              <h3>{cake.name}</h3>
              <p>{cake.description}</p>
              <p><strong>Цена: {cake.price} руб.</strong></p>
              <Link to={`/${cake.id}`}>Подробнее и заказать</Link>
            </div>
          </div>
        ))}
      </div>

      <section className="section">
        <h2>Как заказать</h2>
        <p>
          Вы можете заказать любой из наших тортов, перейдя на страницу конкретного торта и нажав кнопку "Заказать". 
          Мы принимаем заказы за 24 часа до желаемой даты получения. Доставка доступна по всему городу.
        </p>
      </section>
    </>
  );
};

export default Cakes;
