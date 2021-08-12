import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';


import App from './App';

// ReactDOM.render(  <App />, document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      {/* <Route path='/' component={Header} /> */}
      <App />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root'));

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root'));