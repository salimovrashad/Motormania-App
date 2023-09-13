import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShopCard = ({image,name,price,id}) => {
  return (
    <Col sm={12} md={3}>
        <div className="card darkcard border" style={{width: '19rem'}}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{price} $</p>
    <a href='/' className="btn btn-danger me-3">Add To Cart</a>
    <Link to={`/shop/${id}`}><a href='/' className="btn btn-outline-danger">Details</a></Link>
  </div>
</div>

    </Col>
  )
}

export default ShopCard