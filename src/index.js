import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
//import { UserContext } from './UserContext'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    
      
        <Header />

            <App />

              <Footer />

    

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


