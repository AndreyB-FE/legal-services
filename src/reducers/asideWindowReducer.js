const asideWindowReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_ASIDE_WINDOW":
      return !state;
    default:
      return false;
  }
};

export default asideWindowReducer;
