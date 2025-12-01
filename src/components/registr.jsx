function Registr() {
    return ( <div>
        <div>
  <div className="text-center mb-5">
    <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: 80, height: 80}}>
      <i className="bi bi-person-plus text-white" style={{fontSize: '2.5rem'}} />
    </div>
    <h2 className="card-title">Регистрация аккаунта</h2>
    <p className="text-muted">Создайте аккаунт для управления объявлениями о животных</p>
  </div>

  <div className="step-indicator">
    <div className="step active">
      <div className="step-number">1</div>
      <small>Данные</small>
    </div>
    <div className="step">
      <div className="step-number">2</div>
      <small>Подтверждение</small>
    </div>
    <div className="step">
      <div className="step-number">3</div>
      <small>Готово</small>
    </div>
  </div>

  <form action="registration-success.html" method="POST">
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="register-name" className="form-label">Имя *</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person" />
          </span>
          <input type="text" className="form-control" id="register-name" name="name" placeholder="Введите ваше имя" required />
        </div>
        <div className="form-text">Только кириллические буквы, пробелы и дефисы</div>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="register-phone" className="form-label">Телефон *</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-telephone" />
          </span>
          <input type="tel" className="form-control" id="register-phone" name="phone" placeholder="+7 (900) 123-45-67" required />
        </div>
        <div className="form-text">Только цифры и знак +</div>
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="register-email" className="form-label">Email *</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-envelope" />
        </span>
        <input type="email" className="form-control" id="register-email" name="email" placeholder="your@email.com" required />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="register-password" className="form-label">Пароль *</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-lock" />
          </span>
          <input type="password" className="form-control" id="register-password" name="password" placeholder="Не менее 7 символов" required />
        </div>
        <div className="form-text">Минимум 7 символов, 1 цифра, 1 заглавная и 1 строчная буква</div>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="register-password-confirmation" className="form-label">Подтверждение пароля *</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-lock-fill" />
          </span>
          <input type="password" className="form-control" id="register-password-confirmation" name="password_confirmation" placeholder="Повторите пароль" required />
        </div>
      </div>
    </div>
    <div className="mb-4">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="register-confirm" name="confirm" required />
        <label className="form-check-label" htmlFor="register-confirm">
          Я согласен(а) с 
          <a href="#" className="text-decoration-none">правилами использования сервиса</a> 
          и 
          <a href="#" className="text-decoration-none">политикой конфиденциальности</a> *
        </label>
      </div>
    </div>
    <div className="d-grid mb-4">
      <button type="submit" className="btn btn-primary btn-lg">
        <i className="bi bi-person-check me-2" />Зарегистрироваться
      </button>
    </div>
    <div className="text-center">
      <p className="mb-0">Уже есть аккаунт? 
        <a href="login.html" className="text-decoration-none fw-bold">Войдите</a>
      </p>
    </div>
  </form></div>


    </div> );
}

export default Registr;