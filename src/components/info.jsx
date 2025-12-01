function Info() {
    return ( <div>
        <div>
  <h2 className="card-title text-center mb-4">Добавить информацию о найденном животном</h2>
  <div className="alert alert-info">
    <h6 className="alert-heading"><i className="bi bi-info-circle me-2" />Информация о фотографиях:</h6>
    <p className="mb-0">Поддерживаемые форматы: <strong>JPG, JPEG, PNG</strong></p>
  </div>
  <form action="profile.html" method="POST" encType="multipart/form-data">
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
    <div className="mb-3">
      <label htmlFor="pet-email" className="form-label">Email</label>
      <input type="email" className="form-control" id="pet-email" name="email" required />
    </div>
    <h4 className="mb-3 mt-4">Информация о животном</h4>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="pet-kind" className="form-label">Вид животного</label>
        <input type="text" className="form-control" id="pet-kind" name="kind" required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="pet-district" className="form-label">Район</label>
        <select className="form-select" id="pet-district" name="district" required>
          <option value>Выберите район</option>
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
    </div>
    <div className="mb-3">
      <label htmlFor="pet-mark" className="form-label">Клеймо (если есть)</label>
      <input type="text" className="form-control" id="pet-mark" name="mark" />
    </div>
    <div className="mb-3">
      <label htmlFor="pet-description" className="form-label">Описание</label>
      <textarea className="form-control" id="pet-description" name="description" rows={4} required defaultValue={""} />
    </div>
    <div className="mb-4">
      <label className="form-label">Фотографии</label>
      <div className="mb-3">
        <label htmlFor="pet-photo1" className="form-label">Фото 1 (обязательно)</label>
        <input type="file" className="form-control" id="pet-photo1" name="photo1" accept=".jpg,.jpeg,.png" required />
      </div>
      <div className="mb-3">
        <label htmlFor="pet-photo2" className="form-label">Фото 2</label>
        <input type="file" className="form-control" id="pet-photo2" name="photo2" accept=".jpg,.jpeg,.png" />
      </div>
      <div className="mb-3">
        <label htmlFor="pet-photo3" className="form-label">Фото 3</label>
        <input type="file" className="form-control" id="pet-photo3" name="photo3" accept=".jpg,.jpeg,.png" />
      </div>
    </div>
    <div className="mb-4 form-check">
      <input type="checkbox" className="form-check-input" id="pet-confirm" name="confirm" required />
      <label className="form-check-label" htmlFor="pet-confirm">Согласен на обработку персональных данных</label>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary btn-lg">
        <i className="bi bi-cloud-upload me-2" />Добавить объявление
      </button>
    </div>
  </form>
</div>

    </div> );
}

export default Info;