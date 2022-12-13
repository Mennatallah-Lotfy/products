
import React from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import EditProduct from './component/EditProduct';
import Naav from './component/Naav';
import NewProduct from './component/NewProduct';
import ProductDetail from './component/ProductDetail';
import Admin from './pages/Admin';
import Home from './pages/Home';

function App() {
  return (
    <div>
<Naav/>
<div className='row justify-content-center'>
{/* <div className='col-2 text-center pt-5 side'><NavLink to='/' className='link'>Admin</NavLink></div> */}
<div className='col-lg-8 col-md-12 pt-5'>
     <Routes>
      <Route path='/' element={<Admin/>}/>
      <Route path='/NewProduct' element={<NewProduct/>}/>
      <Route path='/EditProduct/:ID' element={<EditProduct/>}/>
      <Route path='/ProductDetail/:ID' element={<ProductDetail/>}/>
      <Route path='/Home' element={<Home/>}/>
     </Routes>
     </div>
    </div>
    </div> 
  );
}

export default App;
