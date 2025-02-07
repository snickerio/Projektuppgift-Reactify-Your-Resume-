import { createStore } from 'redux';

// Initialt tillstånd
const initialState = {
  theme: 'light', // Standardtema
};

// Reducer som hanterar temat
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload }; // Uppdatera tema
    default:
      return state;
  }
};

// Skapa store med reducer
const store = createStore(reducer);

export default store;
