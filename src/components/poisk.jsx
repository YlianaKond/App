import { useState } from 'react';

function Poisk() {
  const [searchData, setSearchData] = useState({
      district: '',
      kind: ''
  });

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSearchData(prev => ({
          ...prev,
          [name]: value
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Данные поиска:', searchData);
      alert(`Поиск: ${searchData.district || 'Все районы'}, ${searchData.kind || 'Все животные'}`);
  };

  return (
      <div className="container py-5">
          <h2 className="section-title">Поиск животных</h2>
          <div className="row mb-5">
              <div className="col-md-8 mx-auto">
                  <div className="card shadow">
                      <div className="card-body p-4">
                          <form onSubmit={handleSubmit}>
                              <div className="row">
                                  <div className="col-md-6 mb-3">
                                      <label htmlFor="search-district" className="form-label">Район</label>
                                      <select 
                                          className="form-select" 
                                          id="search-district" 
                                          name="district"
                                          value={searchData.district}
                                          onChange={handleInputChange}
                                      >
                                          <option value="">Все районы</option>
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
                                      <input 
                                          type="text" 
                                          className="form-control" 
                                          id="search-kind" 
                                          name="kind" 
                                          placeholder="Например: кошка, собака"
                                          value={searchData.kind}
                                          onChange={handleInputChange}
                                      />
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
  );
}

export default Poisk;