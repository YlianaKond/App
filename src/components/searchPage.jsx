import { Link } from 'react-router-dom';
function SearchPage () {
    return ( <div className="container py-5">
        <h2 className="section-title">Поиск животных</h2>
        
        {/* Форма поиска */}
        <div className="row mb-5">
          <div className="col-md-8 mx-auto">
            <div className="card shadow">
              <div className="card-body p-4">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="search-district" className="form-label">Район</label>
                      <select className="form-select" id="search-district" name="district">
                        <option value="">Все районы</option>
                        <option value="Адмиралтейский">Адмиралтейский</option>
                        {/* ... остальные районы */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="search-kind" className="form-label">Вид животного</label>
                      <input type="text" className="form-control" id="search-kind" name="kind" placeholder="Например: кошка, собака" />
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Найти</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Результаты поиска */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card pet-card h-100">
              <img src="/image/foto6.jfif" className="card-img-top" alt="Кот" style={{height: 200, objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">Рыжик</h5>
                <p className="card-text">Найден в Центральном районе. Молодой кот, очень ласковый.</p>
                <div className="mt-3">
                 
                </div>
              </div>
            </div>
          </div>
          {/* Добавьте остальные карточки */}
        </div>
      </div> );
}

export default SearchPage ;