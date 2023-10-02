import React, { useContext } from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import { LangContext } from '../context/LangContext';
import { useWishlist } from 'react-use-wishlist';

const ShopCard = ({image,name,price,id,alldata}) => {
    const [lang] = useContext(LangContext);
    const { addWishlistItem, inWishlist, removeWishlistItem } = useWishlist();
    const { addItem } = useCart();
    const notify1 = () => toast.success('Product added to cart', {
        position: "bottom-right",
        autoClose: 400,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    const notify3 = () => toast.success('Product added to wishlist', {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    const notify2 = () => toast.error('Product removed', {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

        const handleWishlistToggle = () => {
          if (inWishlist(id)) {
            removeWishlistItem(id);
            notify2();
          } else {
            addWishlistItem(alldata);
            notify3();
          }
        };

  return (
    <Col sm={12} md={3}>
        <div className="card darkcard border" style={{width: '19rem'}}>
  <div className="card-body">
      <div key={id} className='d-flex flex-row-reverse'><div className='cursor p-1' onClick={handleWishlistToggle}>{inWishlist(id) ? <AiFillHeart className='fs-4 text-danger'/> : <AiOutlineHeart className='fs-4'/>}</div></div>
  <img src={image} className="card-img-top" alt="..." />
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{price} $</p>
    <Button className="btn btn-danger me-3" onClick={() => { notify1(addItem(alldata)) }}>{lang === "en"?"Add To Cart":"Səbətə Əlavə Et"}</Button>
    <Link to={`/shop/${id}`}><a href='/' className="btn btn-outline-danger" onClick={() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });}}>{lang === "en"?"Details":"Detallar"}</a></Link>
  </div>
  <ToastContainer
                    position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
</div>

    </Col>
  )
}

export default ShopCard