function Profil_content() {
    return ( <div> 
       <div className="container">
  <div className="row align-items-center">
    <div className="col-md-2 text-center">
      <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: 100, height: 100}}>
        <i className="bi bi-person-fill text-primary" style={{fontSize: '3rem'}} />
      </div>
    </div>
    <div className="col-md-6">
      <h1 className="display-5 fw-bold">Анна Петрова</h1>
      <p className="lead mb-0">На сайте с 15 января 2024 года</p>
      <p className="mb-0">Зарегистрирован(а) как частное лицо</p>
    </div>
    <div className="col-md-4 text-md-end">
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-md-end">
        <a href="add-pet.html" className="btn btn-light">
          <i className="bi bi-plus-circle me-2" />Добавить объявление
        </a>
        <a href="search.html" className="btn btn-outline-light">
          <i className="bi bi-search me-2" />Найти животное
        </a>
      </div>
    </div>
  </div>
</div>

    </div> );
}

export default Profil_content;