import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { users, getUsers, theme } = useAppContext();

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {users?.map((user) => {
          return (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
