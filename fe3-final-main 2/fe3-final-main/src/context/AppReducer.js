export const GET_USERS = 'GET_USERS';
export const CHANGE_THEME = 'CHANGE_THEME';
export const GET_USER = 'GET_USER';

export const initialState = {
  users: [],
  user: null,
  theme: 'light',
};

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload.users,
      };
    case GET_USER:
      return {
        ...state,
        user: payload.user,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: payload.theme,
      };
    default:
      return state;
  }
};

export default appReducer;
