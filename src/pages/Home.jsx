import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
        <div className="cakes-grid">
          <div className="cake-card">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Наполеон" />
            <div className="cake-card-content">
              <h3>Наполеон</h3>
              <p>Классический многослойный торт с нежным заварным кремом</p>
              <Link to="/napoleon">Подробнее</Link>
            </div>
          </div>
          <div className="cake-card">
            <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Медовик" />
            <div className="cake-card-content">
              <h3>Медовик</h3>
              <p>Ароматный медовый торт с кремом из сметаны</p>
              <Link to="/medovik">Подробнее</Link>
            </div>
          </div>
          <div className="cake-card">
            <img src="https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Чизкейк" />
            <div className="cake-card-content">
              <h3>Чизкейк</h3>
              <p>Нежный сырный торт с ягодным топпингом</p>
              <Link to="/cheesecake">Подробнее</Link>
            </div>
          </div>
        </div>
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
