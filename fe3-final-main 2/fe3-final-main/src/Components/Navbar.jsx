import React from 'react';
import { useAppContext } from '../context/AppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { changeTheme } = useAppContext();
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <a href='/'>Home</a>
      <a href='/favs'>Favs</a>
      <a href='/contacto'>Contacto</a>
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
