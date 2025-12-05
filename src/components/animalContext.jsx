// src/components/animalContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Создаем контекст
const AnimalContext = createContext();

// Хук для использования контекста
export const useAnimals = () => {
  const context = useContext(AnimalContext);
  if (!context) {
    throw new Error('useAnimals must be used within an AnimalProvider');
  }
  return context;
};

// Провайдер контекста
export const AnimalProvider = ({ children }) => {
  // Моковые данные для тестирования
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Черныш",
      description: "Найден в Центральном районе. Молодой кот, очень ласковый.",
      date: "2 дня назад",
      kind: "кот",
      district: "Центральный",
      photos: null
    },
    {
      id: 2,
      name: "Джек",
      description: "Найден в Приморском районе. Активный пес, знает команды.",
      date: "1 день назад",
      kind: "собака",
      district: "Приморский",
      urgent: true
    },
    {
      id: 3,
      name: "Снежок",
      description: "Найден в Василеостровском районе. Маленький белый котенок.",
      date: "3 дня назад",
      kind: "кот",
      district: "Василеостровский"
    }
  ]);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect для имитации загрузки данных
  useEffect(() => {
    console.log('AnimalProvider mounted');
    // Здесь мог бы быть реальный запрос к API
    // fetch('http://pets.сделай.site/api/pets')
    //   .then(response => response.json())
    //   .then(data => setAnimals(data.data.orders || []))
    //   .catch(err => setError(err.message))
    //   .finally(() => setLoading(false));
  }, []);

  const addAnimal = (animal) => {
    const newAnimal = {
      ...animal,
      id: animals.length + 1,
      date: new Date().toLocaleDateString('ru-RU')
    };
    setAnimals(prev => [...prev, newAnimal]);
    return newAnimal;
  };

  const updateAnimal = (id, updates) => {
    setAnimals(prev =>
      prev.map(animal =>
        animal.id === id ? { ...animal, ...updates } : animal
      )
    );
  };

  const deleteAnimal = (id) => {
    setAnimals(prev => prev.filter(animal => animal.id !== id));
  };

  const value = {
    animals,
    user,
    loading,
    error,
    setUser,
    addAnimal,
    updateAnimal,
    deleteAnimal,
    refreshAnimals: () => {
      setLoading(true);
      // Имитация обновления
      setTimeout(() => {
        setLoading(false);
        console.log('Animals refreshed');
      }, 1000);
    }
  };

  return (
    <AnimalContext.Provider value={value}>
      {children}
    </AnimalContext.Provider>
  );
};

// Экспортируем сам контекст, если нужен
export { AnimalContext };