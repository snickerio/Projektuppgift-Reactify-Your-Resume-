const initialState = {
    theme: 'light', // standardtema
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: state.theme === 'light' ? 'dark' : 'light', // växla mellan light/dark
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  