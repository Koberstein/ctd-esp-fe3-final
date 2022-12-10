import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import { AppContextProvider } from './context/AppContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppContextProvider>
        <App />
      </AppContextProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
      {
        path: '/contacto',
        element: <Contact />,
      },
      {
        path: '/favs',
        element: <Favs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
