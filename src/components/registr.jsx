function Registr() {
  return ( 
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-5">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                     style={{width: 80, height: 80}}>
                  <i className="bi bi-person-plus text-white" style={{fontSize: '2.5rem'}} />
                </div>
                <h2 className="card-title fw-bold">Регистрация аккаунта</h2>
                <p className="text-muted">Создайте аккаунт для управления объявлениями о животных</p>
              </div>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="register-name" className="form-label fw-medium">Имя *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-person text-secondary" />
                      </span>
                      <input 
                        type="text" 
                        className="form-control border-start-0" 
                        id="register-name" 
                        name="name" 
                        placeholder="Введите ваше имя" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="register-phone" className="form-label fw-medium">Телефон *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-telephone text-secondary" />
                      </span>
                      <input 
                        type="tel" 
                        className="form-control border-start-0" 
                        id="register-phone" 
                        name="phone" 
                        placeholder="+7 (900) 123-45-67" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="register-email" className="form-label fw-medium">Email *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-envelope text-secondary" />
                    </span>
                    <input 
                      type="email" 
                      className="form-control border-start-0" 
                      id="register-email" 
                      name="email" 
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="register-password" className="form-label fw-medium">Пароль *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-lock text-secondary" />
                      </span>
                      <input 
                        type="password" 
                        className="form-control border-start-0" 
                        id="register-password" 
                        name="password" 
                        placeholder="Не менее 7 символов" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="register-password-confirmation" className="form-label fw-medium">Подтверждение пароля *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-lock-fill text-secondary" />
                      </span>
                      <input 
                        type="password" 
                        className="form-control border-start-0" 
                        id="register-password-confirmation" 
                        name="password_confirmation" 
                        placeholder="Повторите пароль" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="register-confirm" 
                      name="confirm" 
                      required 
                    />
                    <label className="form-check-label" htmlFor="register-confirm">
                      Я согласен(а) с{' '}
                      <a href="#" className="text-decoration-none text-primary">правилами использования сервиса</a>{' '}
                      и{' '}
                      <a href="#" className="text-decoration-none text-primary">политикой конфиденциальности</a> *
                    </label>
                  </div>
                </div>

                <div className="d-grid mb-4">
                  <button type="submit" className="btn btn-primary btn-lg py-3">
                    <i className="bi bi-person-check me-2" />Зарегистрироваться
                  </button>
                </div>

                <div className="text-center">
                  <p className="mb-0">
                    Уже есть аккаунт?{' '}
                    <a href="/login" className="text-decoration-none fw-bold text-primary">Войдите</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Registr;