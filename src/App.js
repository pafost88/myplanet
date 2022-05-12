import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import MainPage from './routes/MainPage';

import './assets/styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// header, footer
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route component={MainPage} path="/" exact/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
