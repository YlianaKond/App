import { Link } from 'react-router-dom'; 
import "../components/css/style.css";
function Header() {
  return (         <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">
        <i className="bi bi-heart-fill me-2" />Любимые питомцы
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Главная</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">Поиск животных</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/looking-for-home">Ищут хозяев</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-pet">Добавить объявление</Link> 
          </li>
        </ul>
        <div className="d-flex">
          <Link className="btn btn-outline-light me-2" to="/login">Войти</Link> 
          <Link className="btn btn-primary me-2" to="/register">Регистрация</Link> 
          <Link className="btn btn-outline-light" to="/profile">Личный кабинет</Link> 
        </div>
      </div>
    </div>
  </nav>);
}

export default Header;