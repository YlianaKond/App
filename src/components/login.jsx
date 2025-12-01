function Login() {
    return ( <div>
       <div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow">
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: 80, height: 80}}>
              <i className="bi bi-person-fill text-white" style={{fontSize: '2rem'}} />
            </div>
            <h2 className="card-title">Вход в личный кабинет</h2>
          </div>
          <div className="alert alert-info">
            <h6 className="alert-heading"><i className="bi bi-info-circle me-2" />Тестовые данные:</h6>
            <p className="mb-1"><strong>Телефон:</strong> 89111234567</p>
            <p className="mb-0"><strong>Пароль:</strong> Password123</p>
          </div>
          <form action="profile.html" method="POST">
            <div className="mb-4">
              <label htmlFor="login-phone" className="form-label">Телефон или Email</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-telephone-fill" /></span>
                <input type="text" className="form-control" id="login-phone" name="login" placeholder="Введите телефон или email" required />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="login-password" className="form-label">Пароль</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-lock-fill" /></span>
                <input type="password" className="form-control" id="login-password" name="password" placeholder="Введите пароль" required />
              </div>
            </div>
            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input" id="remember-me" name="remember" />
              <label className="form-check-label" htmlFor="remember-me">Запомнить меня</label>
            </div>
            <div className="d-grid mb-4">
              <button type="submit" className="btn btn-primary btn-lg">
                <i className="bi bi-box-arrow-in-right me-2" />Войти
              </button>
            </div>
          </form>
          <div className="text-center">
            <p>Нет аккаунта? <a href="register.html">Зарегистрируйтесь</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div> );
}

export default Login;