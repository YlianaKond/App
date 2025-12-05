function Poisk_content() {
  return ( 
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-3">Поиск животных</h1>
          <p className="lead mb-4">
            Найдите своего питомца или помогите животному обрести дом. 
            Используйте фильтры для точного поиска.
          </p>
          <div className="alert alert-info">
            <i className="bi bi-info-circle me-2"></i>
            <span className="fw-medium">Сейчас доступно 3 объявления о животных</span>
          </div>
        </div>
        <div className="col-lg-4 text-center">
          <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
               style={{width: 120, height: 120}}>
            <i className="bi bi-search text-white" style={{fontSize: '3rem'}} />
          </div>
          <h4>3 животных</h4>
          <p className="text-muted">доступно для поиска</p>
        </div>
      </div>
    </div> 
  );
}

export default Poisk_content;