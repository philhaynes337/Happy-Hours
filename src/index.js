import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Header />
        <Nav />
          <App />
            <Footer />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


