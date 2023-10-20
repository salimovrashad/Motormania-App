// This Project is https://github.com/salimovrashad
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
import ContactUs from './pages/ContactUs'
import Wishlist from './pages/Wishlist'
import { WishlistProvider } from 'react-use-wishlist'
import BlogAdmin from './pages/admin/BlogAdmin'
import AddBlog from './pages/admin/update/AddBlog'
import EditBlog from './pages/admin/update/EditBlog'
import BlogDetails from './pages/BlogDetails'
import Faqpage from './pages/Faqpage'
import UsersAdmin from './pages/admin/UsersAdmin'
import AddUser from './pages/admin/update/AddUser'
import EditUser from './pages/admin/update/EditUser'
import SignUp from './pages/SignUp'


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
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/checkout' element={<CheckOut />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/blog/:url' element={<BlogDetails />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/success' element={<SuccessPage />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/faqpage' element={<Faqpage />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/admin/add' element={<AddMoto />}></Route>
          <Route path='/admin/edit/:id' element={<EditMoto />}></Route>
          <Route path='/usersadmin' element={<UsersAdmin />}></Route>
          <Route path='/usersadmin/add' element={<AddUser />}></Route>
          <Route path='/usersadmin/edit/:id' element={<EditUser />}></Route>
          <Route path='/blogadmin' element={<BlogAdmin />}></Route>
          <Route path='/blogadmin/add' element={<AddBlog />}></Route>
          <Route path='/blogadmin/edit/:id' element={<EditBlog />}></Route>
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
          <WishlistProvider>
            <CartProvider>
              <Main />
            </CartProvider>
          </WishlistProvider>
        </ModeProvider>
      </LangProvider>
    </BrowserRouter>
  )
}

export default App