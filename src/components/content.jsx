// content.jsx
import { Link } from 'react-router-dom';
import { useAnimals } from './animalContext';
import "../components/css/style.css";

function Content({ title = "Недавно найденные животные", showButton = true }) {
  const { animals, loading, error } = useAnimals();

  // Если идет загрузка
  if (loading) {
    return (
      <div className="container py-5">
        <h2 className="section-title">{title}</h2>
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Загрузка...</span>
          </div>
          <p className="mt-3">Загрузка животных...</p>
        </div>
      </div>
    );
  }

  // Если есть ошибка
  if (error) {
    return (
      <div className="container py-5">
        <h2 className="section-title">{title}</h2>
        <div className="text-center py-5">
          <i className="bi bi-exclamation-triangle display-1 text-danger mb-4"></i>
          <h3>Ошибка загрузки</h3>
          <p className="text-muted">{error}</p>
          <button className="btn btn-primary mt-3">Попробовать снова</button>
        </div>
      </div>
    );
  }

  // Если животных нет
  if (animals.length === 0) {
    return (
      <div className="container py-5">
        <h2 className="section-title">{title}</h2>
        <div className="text-center py-5">
          <i className="bi bi-search display-1 text-muted mb-4"></i>
          <h3>Животные не найдены</h3>
          <p className="text-muted">Попробуйте изменить параметры поиска</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="section-title">{title}</h2>
      <div className="row g-4">
        {animals.map((animal) => (
          <div className="col-md-6 col-lg-4" key={animal.id}>
            <div className="card pet-card h-100 border-0 shadow-sm hover-shadow">
              {/* Изображение животного */}
              <div className="position-relative overflow-hidden rounded-top" style={{ height: 200 }}>
                {animal.photos ? (
                  <img
                    src={`http://pets.сделай.site/${animal.photos}`}
                    className="w-100 h-100"
                    alt={animal.name}
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                    }}
                  />
                ) : (
                  <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                    <i className="bi bi-image text-muted" style={{ fontSize: '3rem' }}></i>
                  </div>
                )}
                {/* Бейдж срочности */}
                {animal.urgent && (
                  <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                    <i className="bi bi-exclamation-triangle me-1"></i>СРОЧНО!
                  </span>
                )}
              </div>

              <div className="card-body p-4">
                {/* Заголовок с иконкой */}
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                    <i className={`bi ${animal.kind === 'собака' ? 'bi-robot' : 'bi-heart'} text-primary`}></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-1">{animal.name}</h5>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-light text-dark me-2">
                        <i className="bi bi-tag me-1"></i>{animal.kind}
                      </span>
                      <span className="text-muted small">
                        <i className="bi bi-geo-alt me-1"></i>{animal.district}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Описание */}
                <p className="card-text text-muted mb-4">{animal.description}</p>

                {/* Информация внизу */}
                <div className="border-top pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-calendar text-primary me-2"></i>
                      <small className="text-muted">{animal.date}</small>
                    </div>
                    {/* Кнопка "Подробнее" показываем только если showButton = true */}
                    {showButton && (
                      <Link to={`/animal/${animal.id}`} className="btn btn-sm btn-outline-primary">
                        Подробнее
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопку "Смотреть всех животных" показываем только если showButton = true */}
      {showButton && title === "Недавно найденные животные" && (
        <div className="text-center mt-5">
          <Link className="btn btn-primary btn-lg px-5" to="/search">
            <i className="bi bi-search me-2"></i>Смотреть всех животных
          </Link>
        </div>
      )}
    </div>
  );
}

export default Content;