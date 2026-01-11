import React from 'react';
import { Link } from 'react-router-dom';

const Cakes = () => {
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
        <div className="cake-card">
          <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Наполеон" />
          <div className="cake-card-content">
            <h3>Наполеон</h3>
            <p>
              Классический многослойный торт, состоящий из тонких слоев слоеного теста и нежного заварного крема. 
              Этот торт покоряет сердца уже много десятилетий своей воздушностью и изысканным вкусом.
            </p>
            <p><strong>Цена: 45 руб.</strong></p>
            <Link to="/napoleon">Подробнее и заказать</Link>
          </div>
        </div>

        <div className="cake-card">
          <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Медовик" />
          <div className="cake-card-content">
            <h3>Медовик</h3>
            <p>
              Ароматный медовый торт с нежным кремом из сметаны. Каждый слой пропитан медовым сиропом, 
              что делает торт особенно сочным и вкусным. Идеальное сочетание сладости меда и нежности крема.
            </p>
            <p><strong>Цена: 42 руб.</strong></p>
            <Link to="/medovik">Подробнее и заказать</Link>
          </div>
        </div>

        <div className="cake-card">
          <img src="https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Чизкейк" />
          <div className="cake-card-content">
            <h3>Чизкейк</h3>
            <p>
              Нежный сырный торт на основе творожного сыра с ягодным топпингом. Легкий и воздушный, 
              с идеальным балансом сладости и кислотности. Настоящее удовольствие для ценителей изысканных десертов.
            </p>
            <p><strong>Цена: 48 руб.</strong></p>
            <Link to="/cheesecake">Подробнее и заказать</Link>
          </div>
        </div>
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
