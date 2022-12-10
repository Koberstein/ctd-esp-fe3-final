import React, { createContext, useContext, useReducer } from 'react';
import appReducer, {
  initialState,
  GET_USERS,
  GET_USER,
  CHANGE_THEME,
} from './AppReducer';

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const { users, user, theme } = state;

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    dispatch({
      type: GET_USERS,
      payload: {
        users,
      },
    });
  };

  const getUserById = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();

    dispatch({
      type: GET_USER,
      payload: {
        user,
      },
    });
  };

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    dispatch({
      type: CHANGE_THEME,
      payload: {
        theme: newTheme,
      },
    });
  };

  console.log({ theme });

  return (
    <AppContext.Provider
      value={{ users, getUsers, theme, changeTheme, user, getUserById }}
    >
      {children}
    </AppContext.Provider>
  );
};
