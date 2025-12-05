import img1 from "./image/foto1.jfif";
import img2 from "./image/foto2.jfif";
import img3 from "./image/foto3.jfif";
import "../components/css/style.css";

function Slider() {
  return ( 
    <div className="container py-5">
      <h2 className="section-title">Питомцы, которые нашли дом</h2>
      <div 
        id="success-stories-slider" 
        className="carousel slide" 
        data-bs-ride="carousel" 
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#success-stories-slider" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#success-stories-slider" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#success-stories-slider" data-bs-slide-to="2"></button>
        </div>
        
        <div className="carousel-inner rounded shadow">
          {/* Слайд 1 */}
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="row align-items-center bg-light p-4">
              <div className="col-md-6">
                <img src={img1} className="d-block w-100 rounded" alt="Рыжий кот Мурзик" />
              </div>
              <div className="col-md-6">
                <div className="p-4">
                  <h3 className="text-primary">Мурзик</h3>
                  <p className="lead">Найден в Центральном районе</p>
                  <p>"Мурзик пропал две недели назад. Благодаря GET PET BACK мы нашли его всего через 3 дня!"</p>
                  <div className="d-flex align-items-center mt-4">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: 50, height: 50}}>
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
          
          {/* Слайд 2 */}
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row align-items-center bg-light p-4">
              <div className="col-md-6">
                <img src={img2} className="d-block w-100 rounded" alt="Собака Барсик" />
              </div>
              <div className="col-md-6">
                <div className="p-4">
                  <h3 className="text-primary">Барсик</h3>
                  <p className="lead">Найден в Приморском районе</p>
                  <p>"Барсик выпрыгнул из окна машины. Спасибо сервису GET PET BACK - нашелся через неделю!"</p>
                  <div className="d-flex align-items-center mt-4">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: 50, height: 50}}>
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
          
          {/* Слайд 3 */}
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row align-items-center bg-light p-4">
              <div className="col-md-6">
                <img src={img3} className="d-block w-100 rounded" alt="Котенок Пушистик" />
              </div>
              <div className="col-md-6">
                <div className="p-4">
                  <h3 className="text-primary">Пушистик</h3>
                  <p className="lead">Найден в Василеостровском районе</p>
                  <p>"Нашла этого малыша промокшим под дождем. Разместила объявление, и через 2 дня нашлись его хозяева!"</p>
                  <div className="d-flex align-items-center mt-4">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: 50, height: 50}}>
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
        
        {/* Кнопки управления */}
        <button className="carousel-control-prev" type="button" data-bs-target="#success-stories-slider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#success-stories-slider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;