import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import setAllReducers from "./reducers";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

const store = createStore(
  setAllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
