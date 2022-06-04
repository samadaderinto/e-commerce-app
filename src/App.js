import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route path='/shop' element={<ShopPage/>}></Route>
    </Routes>
  );
}

export default App;
   