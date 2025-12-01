
import "../components/css/style.css";
function Header() {
  return (          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
      <a className="navbar-brand fw-bold" href="index.html">
        <i className="bi bi-heart-fill me-2" />Любимые питомцы
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><a className="nav-link active" href="index.html">Главная</a></li>
          <li className="nav-item"><a className="nav-link" href="search.html">Поиск животных</a></li>
          <li className="nav-item"><a className="nav-link" href="looking-for-home.html">Ищут хозяев</a></li>
          <li className="nav-item"><a className="nav-link" href="add-pet.html">Добавить объявление</a></li>
        </ul>
        <div className="d-flex">
          <a className="btn btn-outline-light me-2" href="login.html">Войти</a>
          <a className="btn btn-primary  me-2" href="register.html">Регистрация</a>
          <a className="btn btn-outline-light" href="profil.html">Личный кабинет</a>
        </div>
      </div>
    </div>
  </nav>);
}

export default Header;

