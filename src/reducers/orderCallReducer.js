const orderCallReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_ORDER_WINDOW":
      return !state;
    default:
      return state;
  }
};

export default orderCallReducer;
