import { Link } from 'react-router-dom';
import { useState } from 'react';

function Profil_content() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: "Анна Петрова",
        email: "anna.petrova@example.com",
        phone: "+7 (900) 123-45-67",
        bio: "Помогаю животным найти своих хозяев. Верю, что каждый питомец заслуживает любующую семью."
    });
    
    const [formData, setFormData] = useState({...userData});
    
    const handleEditClick = () => {
        setIsEditing(!isEditing);
        setFormData({...userData});
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({...formData});
        setIsEditing(false);
        alert("Данные профиля успешно обновлены!");
    };
    
    const handleCancel = () => {
        setIsEditing(false);
        setFormData({...userData});
    };

    return ( 
        <div className="container-fluid px-4">
            <div className="card shadow-lg border-0 rounded-4 mt-4 overflow-hidden min-vh-75">
                <div className="card-body p-5">
                    <div className="row h-100">
                        <div className="col-xl-2 col-lg-3 text-center">
                            <div className="position-relative mb-4">
                                <div className="bg-gradient-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow" 
                                     style={{width: 140, height: 140}}>
                                    <i className="bi bi-person-fill text-white" style={{fontSize: '5rem'}} />
                                </div>
                                <div className="badge bg-success rounded-pill position-absolute top-0 end-0 mt-2 me-2 shadow-sm p-2">
                                    <i className="bi bi-check-circle me-1"></i>Активен
                                </div>
                            </div>
                            
                            <div className="d-flex flex-column gap-3 mt-5">
                                <Link className="btn btn-primary btn-lg d-flex align-items-center justify-content-center py-3 shadow-sm" 
                                      to="/add-pet">
                                    <i className="bi bi-plus-circle me-2 fs-5"></i>
                                    <div className="text-start">
                                        <div className="fw-bold">Добавить</div>
                                        <small className="opacity-75">Новое объявление</small>
                                    </div>
                                </Link>
                                
                                <Link className="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center py-3" 
                                      to="/search">
                                    <i className="bi bi-search me-2 fs-5"></i>
                                    <div className="text-start">
                                        <div className="fw-bold">Поиск</div>
                                        <small className="opacity-75">Найти животное</small>
                                    </div>
                                </Link>
                                
                                <button 
                                    className={`btn btn-lg d-flex align-items-center justify-content-center py-3 ${isEditing ? 'btn-warning' : 'btn-light'}`}
                                    onClick={handleEditClick}
                                >
                                    <i className={`bi ${isEditing ? 'bi-arrow-left' : 'bi-pencil-square'} me-2 fs-5`}></i>
                                    <div className="text-start">
                                        <div className="fw-bold">{isEditing ? 'Назад' : 'Редактировать'}</div>
                                        <small className="opacity-75">{isEditing ? 'К профилю' : 'Профиль'}</small>
                                    </div>
                                </button>
                            </div>
                        </div>
                        
                        <div className="col-xl-10 col-lg-9">
                            <div className="h-100 d-flex flex-column">
                                {isEditing === true ? (
                                    <div className="edit-form-container flex-grow-1">
                                        <h4 className="fw-bold text-primary mb-4 pb-3 border-bottom">
                                            <i className="bi bi-pencil-square me-2"></i>Редактирование профиля
                                        </h4>
                                        
                                        <form onSubmit={handleSubmit} className="h-100 d-flex flex-column">
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="editName" className="form-label fw-medium fs-5">
                                                            <i className="bi bi-person me-2"></i>Имя и фамилия
                                                        </label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control form-control-lg"
                                                            id="editName"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            required
                                                            placeholder="Введите ваше полное имя"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="editEmail" className="form-label fw-medium fs-5">
                                                            <i className="bi bi-envelope me-2"></i>Email
                                                        </label>
                                                        <input 
                                                            type="email" 
                                                            className="form-control form-control-lg"
                                                            id="editEmail"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                            placeholder="example@mail.com"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="editPhone" className="form-label fw-medium fs-5">
                                                            <i className="bi bi-telephone me-2"></i>Телефон
                                                        </label>
                                                        <input 
                                                            type="tel" 
                                                            className="form-control form-control-lg"
                                                            id="editPhone"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            required
                                                            placeholder="+7 (XXX) XXX-XX-XX"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="editCity" className="form-label fw-medium fs-5">
                                                            <i className="bi bi-geo-alt me-2"></i>Город
                                                        </label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control form-control-lg"
                                                            id="editCity"
                                                            name="city"
                                                            value="Санкт-Петербург"
                                                            onChange={handleInputChange}
                                                            placeholder="Ваш город"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex-grow-1 mb-4">
                                                <label htmlFor="editBio" className="form-label fw-medium fs-5">
                                                    <i className="bi bi-chat-quote me-2"></i>О себе
                                                </label>
                                                <textarea 
                                                    className="form-control h-100"
                                                    id="editBio"
                                                    name="bio"
                                                    value={formData.bio}
                                                    onChange={handleInputChange}
                                                    rows="8"
                                                    placeholder="Расскажите немного о себе, ваших интересах и опыте помощи животным..."
                                                    style={{minHeight: '200px', resize: 'vertical'}}
                                                />
                                                <div className="form-text mt-2">Расскажите о себе, вашей деятельности по помощи животным и опыте</div>
                                            </div>
                                            
                                            <div className="border-top pt-4 mt-auto">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="form-check">
                                                        <input 
                                                            type="checkbox" 
                                                            className="form-check-input" 
                                                            id="newsletter"
                                                            defaultChecked
                                                        />
                                                        <label className="form-check-label" htmlFor="newsletter">
                                                            Получать уведомления о новых объявлениях
                                                        </label>
                                                    </div>
                                                    
                                                    <div className="d-flex gap-3">
                                                        <button type="button" className="btn btn-outline-secondary px-5 py-3" onClick={handleCancel}>
                                                            <i className="bi bi-x-circle me-2"></i>Отмена
                                                        </button>
                                                        <button type="submit" className="btn btn-primary px-5 py-3">
                                                            <i className="bi bi-check-circle me-2"></i>Сохранить изменения
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                ) : (
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between align-items-start mb-5">
                                            <div>
                                                <h1 className="display-4 fw-bold text-dark mb-2">{userData.name}</h1>
                                                <div className="d-flex gap-3 mb-4">
                                                    <span className="badge bg-primary-subtle text-primary fs-5 fw-medium px-4 py-2 rounded-pill">
                                                        <i className="bi bi-person-badge me-2"></i>Частное лицо
                                                    </span>
                                                    <span className="badge bg-info-subtle text-info fs-5 fw-medium px-4 py-2 rounded-pill">
                                                        <i className="bi bi-star-fill me-2"></i>Надежный пользователь
                                                    </span>
                                                    <span className="badge bg-success-subtle text-success fs-5 fw-medium px-4 py-2 rounded-pill">
                                                        <i className="bi bi-award me-2"></i>Волонтер
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <div className="text-muted mb-1">Рейтинг</div>
                                                <div className="display-6 fw-bold text-warning">4.8/5.0</div>
                                            </div>
                                        </div>
                                        
                                        <div className="row mb-5">
                                            <div className="col-md-6">
                                                <div className="card border-0 bg-light h-100">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold text-primary mb-4">
                                                            <i className="bi bi-info-circle me-2"></i>Контактная информация
                                                        </h5>
                                                        <div className="mb-3">
                                                            <div className="d-flex align-items-center mb-3">
                                                                <i className="bi bi-envelope text-primary fs-4 me-3"></i>
                                                                <div>
                                                                    <div className="fw-medium text-muted">Email</div>
                                                                    <div className="fw-bold fs-5">{userData.email}</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-3">
                                                                <i className="bi bi-telephone text-primary fs-4 me-3"></i>
                                                                <div>
                                                                    <div className="fw-medium text-muted">Телефон</div>
                                                                    <div className="fw-bold fs-5">{userData.phone}</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <i className="bi bi-geo-alt text-primary fs-4 me-3"></i>
                                                                <div>
                                                                    <div className="fw-medium text-muted">Город</div>
                                                                    <div className="fw-bold fs-5">Санкт-Петербург</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card border-0 bg-light h-100">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold text-primary mb-4">
                                                            <i className="bi bi-calendar-check me-2"></i>Активность
                                                        </h5>
                                                        <div className="mb-3">
                                                            <div className="d-flex align-items-center mb-3">
                                                                <i className="bi bi-calendar-plus text-primary fs-4 me-3"></i>
                                                                <div>
                                                                    <div className="fw-medium text-muted">На сайте с</div>
                                                                    <div className="fw-bold fs-5">15 января 2024 года</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-3">
                                                                <i className="bi bi-clock-history text-primary fs-4 me-3"></i>
                                                                <div>
                                                                    <div className="fw-medium text-muted">Последний вход</div>
                                                                    <div className="fw-bold fs-5">Сегодня, 14:30</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <i className="bi bi-activity text-primary fs-4 me-3"></i>
                                                                <div>
                                                                    <div className="fw-medium text-muted">Дней активности</div>
                                                                    <div className="fw-bold fs-5">42 дня</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-5">
                                            <h5 className="fw-bold text-primary mb-4">
                                                <i className="bi bi-chat-quote me-2"></i>О себе
                                            </h5>
                                            <div className="card border-0 bg-light">
                                                <div className="card-body p-4">
                                                    <p className="fs-5 mb-0">
                                                        <i className="bi bi-quote text-primary me-2"></i>
                                                        {userData.bio}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-auto">
                                            <h5 className="fw-bold text-primary mb-4">
                                                <i className="bi bi-graph-up me-2"></i>Статистика
                                            </h5>
                                            <div className="row g-4">
                                                <div className="col-xl-3 col-md-6">
                                                    <div className="card border-0 bg-primary text-white h-100">
                                                        <div className="card-body text-center p-4">
                                                            <div className="display-4 fw-bold mb-2">24</div>
                                                            <div className="fs-5">Всего объявлений</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <div className="card border-0 bg-success text-white h-100">
                                                        <div className="card-body text-center p-4">
                                                            <div className="display-4 fw-bold mb-2">18</div>
                                                            <div className="fs-5">Успешных историй</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <div className="card border-0 bg-info text-white h-100">
                                                        <div className="card-body text-center p-4">
                                                            <div className="display-4 fw-bold mb-2">96%</div>
                                                            <div className="fs-5">Положительных отзывов</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-6">
                                                    <div className="card border-0 bg-warning text-white h-100">
                                                        <div className="card-body text-center p-4">
                                                            <div className="display-4 fw-bold mb-2">42</div>
                                                            <div className="fs-5">Дней активности</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Profil_content;