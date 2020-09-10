import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import FlatCard from './FlatCard/FlatCard';

const App = () => {
  const [apartments, setApartments] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8081/response')
      .then(({ data }) => {
        setApartments(data)
      })
      .catch(() => {
        alert('Не удалось загрузить список квартир');
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="cards-grid">
          {apartments && apartments.map(item => (
            <FlatCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
