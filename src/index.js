import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Privacy from './privacy';
import Home from './home';
import Nav from './nav';
import Footer from './footer';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/privacy' element={<Privacy />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
);