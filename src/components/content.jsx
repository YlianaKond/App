import img6 from "../components/image/foto6.jfif";
import img7 from "../components/image/foto7.jfif";
import img8 from "../components/image/foto8.jfif";
import "../components/css/style.css";
function Content() {
    return ( <div>
         <div className="container">
  <h2 className="section-title">Недавно найденные животные</h2>
  <div className="row g-4">
    <div className="col-md-6 col-lg-4">
      <div className="card pet-card h-100">
        <img src={img6} className="card-img-top" alt="Кот" style={{height: 200, objectFit: 'cover'}} />
        <div className="card-body">
          <h5 className="card-title">Черныш</h5>
          <p className="card-text">Найден в Центральном районе. Молодой кот, очень ласковый.</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">2 дня назад</small>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="card pet-card h-100">
        <img src={img7} className="card-img-top" alt="Собака" style={{height: 200, objectFit: 'cover'}} />
        <div className="card-body">
          <h5 className="card-title">Джек</h5>
          <p className="card-text">Найден в Приморском районе. Активный пес, знает команды.</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">1 день назад</small>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="card pet-card h-100">
        <img src={img8}className="card-img-top" alt="Котенок" style={{height: 200, objectFit: 'cover'}} />
        <div className="card-body">
          <h5 className="card-title">Снежок</h5>
          <p className="card-text">Найден в Василеостровском районе. Маленький белый котенок.</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">3 дня назад</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center mt-5">
    <a className="btn btn-primary btn-lg" href="search.html">Смотреть всех животных</a>
  </div>
</div>
</div> );
}

export default Content;