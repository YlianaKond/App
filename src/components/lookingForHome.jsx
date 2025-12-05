import { Link } from 'react-router-dom';
import img9 from "./image/foto9.jfif";

function LookingForHome({ animals = [] }) {
    return (  
        <div className="container py-5">
            <div className="row align-items-center mb-5">
                <div className="col-lg-8">
                    <h1 className="display-5 fw-bold mb-3">Питомцы, которые ищут дом</h1>
                    <p className="lead mb-4">
                        Здесь собраны животные, которые ждут своих новых хозяев. 
                        Каждому из них нужна ваша забота и любовь.
                    </p>
                </div>
                <div className="col-lg-4 text-center">
                    <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                         style={{ width: 120, height: 120 }}>
                        <i className="bi bi-house-heart text-white" style={{ fontSize: '3rem' }} />
                    </div>
                    <h4>{animals.length} животных</h4>
                    <p className="text-muted">ждут новый дом</p>
                </div>
            </div>

            {/* Список животных */}
            <div className="row">
                {animals.map((animal, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={animal.id || index}>
                        <div className="card pet-card h-100 position-relative">
                            {animal.urgent && (
                                <span className="badge bg-danger status-badge">СРОЧНО!</span>
                            )}
                            {/* Используем изображение из пропса, если есть, иначе img9 */}
                            <img 
                                src={animal.image || img9} 
                                className="card-img-top" 
                                alt={animal.name} 
                                style={{ height: 250, objectFit: 'cover' }} 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = img9;
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{animal.name}</h5>
                                <p className="card-text">{animal.description}</p>
                                <div className="pet-features mb-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="feature-icon">
                                            <i className="bi bi-geo-alt" />
                                        </span>
                                        <span>{animal.district} район</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="feature-icon">
                                            <i className="bi bi-tag" />
                                        </span>
                                        <span>{animal.type}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="feature-icon">
                                            <i className="bi bi-calendar" />
                                        </span>
                                        <span>{animal.date}</span>
                                    </div>
                                </div>
                                <Link to={`/animal/${animal.id || index}`} className="btn btn-primary w-100">
                                    <i className="bi bi-info-circle me-1"></i>Подробнее
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Если нет животных с urgent флагом */}
                {animals.length === 0 && (
                    <div className="col-12">
                        <div className="card text-center py-5">
                            <div className="card-body">
                                <i className="bi bi-check-circle text-success display-1 mb-3"></i>
                                <h3>Все животные нашли дом!</h3>
                                <p className="text-muted">Сейчас нет животных, которые срочно ищут хозяев.</p>
                                <Link to="/search" className="btn btn-outline-primary mt-2">
                                    Посмотреть всех животных
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Карточка для добавления нового животного */}
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <div className="mb-3">
                                <i className="bi bi-plus-circle text-primary" style={{ fontSize: '3rem' }} />
                            </div>
                            <h5 className="card-title">Добавить питомца</h5>
                            <p className="card-text text-muted text-center small">
                                Помогите животному найти дом
                            </p>
                            <Link to="/add-pet" className="btn btn-outline-primary mt-2">
                                <i className="bi bi-plus-circle me-1"></i>Добавить
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LookingForHome;