import { Home } from './views/Home';
import './assets/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products } from './views/Products';
import NewProduct from './views/NewProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products />}/>
        <Route path='/new-product' element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
