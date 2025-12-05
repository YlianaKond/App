import { Link } from 'react-router-dom';
import "../components/css/style.css";

function Footer() {
    return ( 
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h5><i className="bi bi-heart-fill me-2"></i>Любимые питомцы</h5>
              <p>Сервис для поиска потерянных домашних животных.</p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Навигация</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-white-50 text-decoration-none">Главная</Link>
                </li>
                <li className="mb-2">
                  <Link to="/search" className="text-white-50 text-decoration-none">Поиск животных</Link>
                </li>
                <li className="mb-2">
                  <Link to="/looking-for-home" className="text-white-50 text-decoration-none">Ищут хозяев</Link>
                </li>
                <li className="mb-2">
                  <Link to="/add-pet" className="text-white-50 text-decoration-none">Добавить объявление</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5>Контакты</h5>
              <p><i className="bi bi-telephone me-2"></i>+7 (911) 123-45-67</p>
              <p><i className="bi bi-envelope me-2"></i>info@getpetback.ru</p>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2025 Любимые питомцы</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="text-white-50 me-3">Политика конфиденциальности</a>
              <a href="#" className="text-white-50">Условия использования</a>
            </div>
          </div>
        </div>
      </footer> 
    );
}

export default Footer;