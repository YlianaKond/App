function AddPetPage() {
  const handleSubmit = (e) => {
      e.preventDefault();
      // Логика отправки формы
    };
  return (  <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4">Добавить информацию о найденном животном</h2>
              
              <div className="alert alert-info">
                <h6 className="alert-heading"><i className="bi bi-info-circle me-2" />Информация о фотографиях:</h6>
                <p className="mb-0">Поддерживаемые форматы: <strong>JPG, JPEG, PNG</strong></p>
              </div>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Здесь скопируйте форму из add-pet.html */}
                <h4 className="mb-3">Контактная информация</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="pet-name" className="form-label">Ваше имя</label>
                    <input type="text" className="form-control" id="pet-name" name="name" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="pet-phone" className="form-label">Телефон</label>
                    <input type="tel" className="form-control" id="pet-phone" name="phone" required />
                  </div>
                </div>
                {/* ... остальная форма ... */}
                
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="bi bi-cloud-upload me-2" />Добавить объявление
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> );
}

export default ddPetPage;