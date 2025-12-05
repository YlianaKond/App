// App.jsx - обновленная версия
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Slider from './components/slider';
import Content from './components/content';
import Content1 from './components/content1';
import Login from './components/login';
import Registr from './components/registr';
import ProfilContent from './components/profil_content';
import Poisk from './components/poisk';
import Poisk_content from './components/poisk_content';
import Info from './components/info';
import LookingForHome from './components/lookingForHome.jsx';
import img6 from './components/image/foto6.jfif';
import img7 from './components/image/foto7.jfif';
import img8 from './components/image/foto8.jfif';
import img9 from './components/image/foto9.jfif';

const tempAnimals = [
  {
    id: 1,
    name: "Черныш",
    description: "Найден в Центральном районе. Молодой кот, очень ласковый.",
    image: img6,
    date: "2 дня назад",
    type: "кот",
    district: "Центральный"
  },
  {
    id: 2,
    name: "Джек",
    description: "Найден в Приморском районе. Активный пес, знает команды.",
    image: img7,
    date: "1 день назад",
    type: "собака",
    district: "Приморский",
    urgent: true
  },
  {
    id: 3,
    name: "Снежок",
    description: "Найден в Василеостровском районе. Маленький белый котенок.",
    image: img8,
    date: "3 дня назад",
    type: "кот",
    district: "Василеостровский"
  },
  {
    id: 4,
    name: "Мурзик",
    description: "Дружелюбный рыжий кот, ищет заботливую семью. Очень ласковый, приучен к лотку.",
    image: img9,
    date: "2 месяца назад",
    type: "кот",
    district: "Центральный",
    urgent: true
  }
];

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Content1 />
            <Slider />
            <Content animals={tempAnimals.slice(0, 3)} />
          </>
        } />
        
        <Route path="/search" element={
          <>
            <Poisk_content />
            <Poisk />
            <Content animals={tempAnimals} title="Найдено 4 объявления" showButton={false} />
          </>
        } />
        
        <Route path="/looking-for-home" element={
          <LookingForHome animals={tempAnimals.filter(a => a.urgent)} />
        } />
        
        <Route path="/add-pet" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registr />} />
        <Route path="/profile" element={<ProfilContent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;