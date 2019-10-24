import * as userActions from './users.actions';

const getIndex = (arr, id) => arr.reduce((result, current, i) => {
  if (current.id === id) {
    return i;
  }
  return result;
}, 0);

const initialState = {
  users: [],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case userActions.SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case userActions.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case userActions.EDIT_USER:
      const index = getIndex(state.users, action.payload.id);
      const user = state.users[index];
      const updatedUser = {
        ...user,
        ...action.payload,
      };
      const users = [...state.users];
      users[index] = updatedUser;

      return {
        ...state,
        users,
      };
    case userActions.DELETE_USER: {
      const userIndex = getIndex(state.users, action.payload);
      const updatedUsers = [...state.users];
      updatedUsers.splice(userIndex, 1);
      return {
        ...state,
        users: updatedUsers,
      };
    }
    default:
      return state;
  }
}
