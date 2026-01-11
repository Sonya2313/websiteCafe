import React, { useState, useEffect } from 'react';

const Cheesecake = () => {
  const cakeId = 'cheesecake';
  const [cake, setCake] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCake = async () => {
      try {
        const response = await fetch(`/cakes/${cakeId}`);
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        setCake(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCake();
  }, [cakeId]);

  const handleOrder = () => {
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
  };

  if (loading) {
    return (
      <section className="section">
        <p>Загрузка...</p>
      </section>
    );
  }

  if (error || !cake) {
    return (
      <section className="section">
        <p>Ошибка: {error || 'Торт не найден'}</p>
      </section>
    );
  }

  return (
    <>
      <div className="cake-detail">
        <img src={cake.image} alt={cake.name} />
        <div className="cake-info">
          <h1>{cake.name}</h1>
          <p>{cake.fullDescription}</p>
          <p><strong>Цена: {cake.price} руб.</strong></p>
          <button className="order-btn" onClick={handleOrder}>Заказать</button>
        </div>
      </div>

      <section className="section">
        <h2>Рецепт приготовления</h2>
        <p>{cake.recipe.description}</p>
        <table className="recipe-table">
          <thead>
            <tr>
              <th>Ингредиент</th>
              <th>Количество</th>
              <th>Примечание</th>
            </tr>
          </thead>
          <tbody>
            {cake.recipe.ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td>{ingredient.name}</td>
                <td>{ingredient.amount}</td>
                <td>{ingredient.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <strong>Приготовление:</strong> {cake.recipe.instructions}
        </p>
      </section>
    </>
  );
};

export default Cheesecake;
