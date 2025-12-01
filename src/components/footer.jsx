import "../components/css/style.css";
function Footer() {
    return ( <footer class="bg-dark text-white py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <h5><i class="bi bi-heart-fill me-2"></i>Любимые питомцы</h5>
                    <p>Сервис для поиска потерянных домашних животных.</p>
                </div>
                <div class="col-lg-2 col-md-6 mb-4">
                    <h5>Навигация</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="index.html" class="text-white-50 text-decoration-none">Главная</a></li>
                        <li class="mb-2"><a href="search.html" class="text-white-50 text-decoration-none">Поиск животных</a></li>
                        <li class="mb-2"><a href="looking-for-home.html" class="text-white-50 text-decoration-none">Ищут хозяев</a></li>
                        <li class="mb-2"><a href="add-pet.html" class="text-white-50 text-decoration-none">Добавить объявление</a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h5>Контакты</h5>
                    <p><i class="bi bi-telephone me-2"></i>+7 (911) 123-45-67</p>
                    <p><i class="bi bi-envelope me-2"></i>info@getpetback.ru</p>
                </div>
            </div>
           
            <div class="row align-items-center">
                <div class="col-md-6">
                    <p class="mb-0">&copy; 2025 Любимые питомцы</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="text-white-50 me-3">Политика конфиденциальности</a>
                    <a href="#" class="text-white-50">Условия использования</a>
                </div>
            </div>
        </div>
    </footer> );
}

export default Footer;