import Video from 'Components/Pages/Video';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Pages/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Switch, Route, BrowserRouter, withRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withRouter(App)}/>
      <Route exact path="/video" component={withRouter(Video)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
