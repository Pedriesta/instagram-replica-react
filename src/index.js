import Video from 'Components/Pages/Video';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Pages/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Switch, Route, BrowserRouter, withRouter} from 'react-router-dom';

import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux'

import reducers from 'Redux/reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()))



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withRouter(App)}/>
          <Route exact path="/video" component={withRouter(Video)}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
