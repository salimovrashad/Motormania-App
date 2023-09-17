import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headbg from './components/Headbg'
import About from './pages/About'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import { ModeContext, ModeProvider } from './context/ModeContext'
import { LangProvider } from './context/LangContext'
import Admin from './pages/admin/Admin'
import AddMoto from './pages/admin/update/AddMoto'
import EditMoto from './pages/admin/update/EditMoto'
import Login from './pages/Login'
import Details from './pages/Details'
import { CartProvider } from 'react-use-cart'
import CartPage from './pages/CartPage'
import CheckOut from './pages/CheckOut'
import SuccessPage from './pages/SuccessPage'
import NotFoundPage from './pages/NotFoundPage'


const Main = () => {
  const [mode] = useContext(ModeContext);
  
  return (
    <div className='font'>
      <div className={mode}>
      <Routes>
        <Route path='/' element={<Headbg />}></Route>
        <Route path='/home' element={<Headbg />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shop/:url' element={<Details />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/success' element={<SuccessPage />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/admin/add' element={<AddMoto />}></Route>
        <Route path='/admin/edit/:id' element={<EditMoto />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      </div>
    </div>
  )
}


const App = () => {
  return (
      <BrowserRouter>
      <LangProvider>
      <ModeProvider>
        <CartProvider>
          <Main />
        </CartProvider>
      </ModeProvider>
      </LangProvider>
      </BrowserRouter>
  )
}

export default App