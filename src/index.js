import React, { createContext } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Arrakis from './components/Main/Main';
import reducer from './redux/reducers/root';

const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Arrakis/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
