import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.error('Ошибка загрузки тортов:', err);
        setLoading(false);
      }
    };

    fetchCakes();
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-title">Пекарня - кондитерская</div>
          <h1>Добро пожаловать в Кафе Соня</h1>
          <p>Место, где каждый кусочек торта рассказывает свою историю</p>
        </div>
      </div>

      <section className="section">
        <h2 className="title-center-1">О нашем кафе</h2>
        <p>
          Кафе Соня — это уютное место в самом сердце города, где традиции встречаются с современностью. 
          Мы создаем торты с любовью, используя только натуральные ингредиенты и проверенные временем рецепты.
        </p>
        <p>
          Наша команда мастеров-кондитеров ежедневно работает над тем, чтобы каждый посетитель получил 
          незабываемые впечатления от наших десертов. Мы верим, что хороший торт может сделать любой день особенным.
        </p>
      </section>

      <section className="section">
        <h2 className="title-center-2">Наши фирменные тортики</h2>
        <p>
          В нашем меню представлены три легендарных торта, каждый из которых имеет свою уникальную историю 
          и неповторимый вкус. От классического Наполеона до нежного Чизкейка — у нас найдется торт для каждого.
        </p>
        {loading ? (
          <p>Загрузка тортиков...</p>
        ) : (
          <div className="cakes-grid">
            {cakes.map((cake) => (
              <div key={cake.id} className="cake-card">
                <img src={cake.image} alt={cake.name} />
                <div className="cake-card-content">
                  <h3>{cake.name}</h3>
                  <p>{cake.description}</p>
                  <Link to={`/${cake.id}`}>Подробнее</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="section">
        <h2 className="title-center-3">Почему выбирают нас</h2>
        <p>
          Мы используем только свежие и качественные ингредиенты, каждый торт готовится вручную с особой 
          тщательностью. Наши кондитеры постоянно совершенствуют свои навыки, чтобы радовать вас новыми 
          вкусовыми сочетаниями, сохраняя при этом классические рецепты.
        </p>
      </section>
    </>
  );
};

export default Home;
