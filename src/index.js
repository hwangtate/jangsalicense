import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './nav';
import Footer from './footer';
import Home from './home'
import Service from './service';
import About from './about';
import Scroll from './scroll';
import Solution from './solution';
import Privacy from './privacy';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
    <Scroll />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/solution' element={<Solution />}/>
        <Route path='/privacy' element={<Privacy />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);