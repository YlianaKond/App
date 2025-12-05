// ApiExample.jsx
import React, { useState, useEffect } from 'react';

function ApiExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect для выполнения запроса при монтировании компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Пример запроса к API
        const response = await fetch('http://pets.сделай.site/api/pets');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result.data.orders || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Ошибка загрузки данных:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Функция очистки (если нужно отменить запросы при размонтировании)
    return () => {
      // Здесь можно отменить запросы
    };
  }, []); // Пустой массив зависимостей = выполнить только при монтировании

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
        <p>Загрузка данных...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger my-4">
        <h4>Ошибка!</h4>
        <p>{error}</p>
        <button 
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h3>Данные с API (useEffect пример)</h3>
      <div className="row">
        {data.slice(0, 3).map((pet, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">{pet.description}</p>
                <p className="text-muted small">
                  <i className="bi bi-geo-alt me-1"></i>
                  {pet.district}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <p className="text-muted">
          Всего загружено {data.length} записей с помощью useEffect
        </p>
      </div>
    </div>
  );
}

export default ApiExample;