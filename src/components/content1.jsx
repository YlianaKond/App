import img5 from "../components/image/foto5.jfif";
import "../components/css/style.css";
import { Link } from 'react-router-dom';
function Componetn1() {
    return ( <div> 
    <div className="container">
  <div className="row align-items-center">
    <div className="col-lg-6">
      <h1 className="display-4 fw-bold mb-4">Помогаем питомцам вернуться домой</h1>
      <p className="lead mb-4">Сервис для поиска потерянных домашних животных</p>
      <div className="search-container">
        <div className="input-group input-group-lg">
          <input type="text" className="form-control" id="quickSearch" placeholder="Начните вводить описание животного..." aria-label="Поиск животных" />
          <button className="btn btn-primary" type="button" id="searchButton">
            <i className="bi bi-search" />
          </button>
        </div>
        <div className="search-suggestions" id="searchSuggestions" />
      </div>
      <div className="d-flex flex-wrap gap-3 mt-4">
      <Link className="btn btn-light btn-lg px-4" to="/add-pet"> 
          <i className="bi bi-plus-circle me-2" />Добавить объявление
        </Link>
        <Link className="btn btn-primary btn-lg" to="/search">Смотреть всех животных</Link>
      </div>
    </div>
    <div className="col-lg-6 text-center">
      <img src={img5} className="img-fluid rounded shadow" alt="Счастливые питомцы" />
    </div>
  </div>
</div>

    </div>);
}

export default Componetn1;