const visibilityFilter = (state = 'SHOW_ALL', action) => {
  
  switch (action.type) {

    case 'SET_VISIBILITY_FILTER':
      return action.type;

    default:
      return state;
  }
}

export default visibilityFilter;
