
function Poisk() {
    return ( <div>
        <div className="container">
  <h2 className="section-title">Поиск животных</h2>
  <div className="row mb-5">
    <div className="col-md-8 mx-auto">
      <div className="card shadow">
        <div className="card-body p-4">
          <form action="search.html" method="GET">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="search-district" className="form-label">Район</label>
                <select className="form-select" id="search-district" name="district">
                  <option value>Все районы</option>
                  <option value="Адмиралтейский">Адмиралтейский</option>
                  <option value="Василеостровский">Василеостровский</option>
                  <option value="Выборгский">Выборгский</option>
                  <option value="Калининский">Калининский</option>
                  <option value="Кировский">Кировский</option>
                  <option value="Колпинский">Колпинский</option>
                  <option value="Красногвардейский">Красногвардейский</option>
                  <option value="Красносельский">Красносельский</option>
                  <option value="Кронштадтский">Кронштадтский</option>
                  <option value="Курортный">Курортный</option>
                  <option value="Московский">Московский</option>
                  <option value="Невский">Невский</option>
                  <option value="Петроградский">Петроградский</option>
                  <option value="Петродворцовый">Петродворцовый</option>
                  <option value="Приморский">Приморский</option>
                  <option value="Пушкинский">Пушкинский</option>
                  <option value="Фрунзенский">Фрунзенский</option>
                  <option value="Центральный">Центральный</option>
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
</div>

    </div> );
}

export default Poisk;