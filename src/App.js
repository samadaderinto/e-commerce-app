import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/header';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
   