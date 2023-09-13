import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineHeart } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';

const ShopCard = ({image,name,price,id,alldata}) => {
    const { addItem } = useCart();
    const notify = () => toast.success('Product added', {
        position: "bottom-right",
        autoClose: 100,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

  return (
    <Col sm={12} md={3}>
        <div className="card darkcard border" style={{width: '19rem'}}>
  <div className="card-body">
      <div className='d-flex flex-row-reverse'><Button variant='none'><AiOutlineHeart className='fs-4'/></Button></div>
  <img src={image} className="card-img-top" alt="..." />
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{price} $</p>
    <Button className="btn btn-danger me-3" onClick={() => { notify(addItem(alldata)) }}>Add To Cart</Button>
    <Link to={`/shop/${id}`}><a href='/' className="btn btn-outline-danger">Details</a></Link>
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