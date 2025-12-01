
import img2 from "../components/image/foto2.jfif";
import img1 from "../components/image/foto1.jfif";
import img3 from "../components/image/foto3.jfif";
import "../components/css/style.css";
function Slider() {
    return ( <div> 
  <div className="container">
    <h2 className="section-title">Питомцы, которые нашли дом</h2>
    <div id="success-stories-slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#success-stories-slider" data-bs-slide-to={0} className="active" />
        <button type="button" data-bs-target="#success-stories-slider" data-bs-slide-to={1} />
        <button type="button" data-bs-target="#success-stories-slider" data-bs-slide-to={2} />
      </div>
      <div className="carousel-inner rounded shadow">
        <div className="carousel-item active">
          <div className="row align-items-center bg-light p-4 min-h-400">
            <div className="col-md-6">
              <img src={img1} className="d-block w-100 rounded" alt="Рыжий кот Мурзик" />
            </div>
            <div className="col-md-6">
              <div className="p-4">
                <h3 className="text-primary">Мурзик</h3>
                <p className="lead">Найден в Центральном районе</p>
                <p>"Мурзик пропал две недели назад. Благодаря GET PET BACK мы нашли его всего через 3 дня!"</p>
                <div className="d-flex align-items-center mt-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50}}>
                    <i className="bi bi-person-fill text-white" />
                  </div>
                  <div>
                    <strong>Анна Петрова</strong>
                    <p className="mb-0 text-muted">хозяйка Мурзика</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row align-items-center bg-light p-4 min-h-400">
            <div className="col-md-6">
              <img src={img2} className="d-block w-100 rounded" alt="Собака Барсик" />
            </div>
            <div className="col-md-6">
              <div className="p-4">
                <h3 className="text-primary">Барсик</h3>
                <p className="lead">Найден в Приморском районе</p>
                <p>"Барсик выпрыгнул из окна машины. Спасибо сервису GET PET BACK - нашелся через неделю!"</p>
                <div className="d-flex align-items-center mt-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50}}>
                    <i className="bi bi-person-fill text-white" />
                  </div>
                  <div>
                    <strong>Дмитрий Соколов</strong>
                    <p className="mb-0 text-muted">хозяин Барсика</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row align-items-center bg-light p-4 min-h-400">
            <div className="col-md-6">
              <img src={img3} className="d-block w-100 rounded" alt="Котенок Пушистик" />
            </div>
            <div className="col-md-6">
              <div className="p-4">
                <h3 className="text-primary">Пушистик</h3>
                <p className="lead">Найден в Василеостровском районе</p>
                <p>"Нашла этого малыша промокшим под дождем. Разместила объявление, и через 2 дня нашлись его хозяева!"</p>
                <div className="d-flex align-items-center mt-4">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50}}>
                    <i className="bi bi-person-fill text-white" />
                  </div>
                  <div>
                    <strong>Мария Иванова</strong>
                    <p className="mb-0 text-muted">нашедшая Пушистика</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#success-stories-slider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#success-stories-slider" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  </div>
  </div>
);
}

export default Slider;