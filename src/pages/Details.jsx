import React, { useState } from 'react'
import CollapsibleExample from '../components/CollapsibleExample'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FooterBike from '../components/FooterBike';
import { Button } from 'react-bootstrap';

const Details = () => {
  
  const mrState = useSelector((state) => state.mr);
  const {url} = useParams();
  const productdetails = mrState.find(p=>p.id.toString() === url)
  const [image, setImage] = useState(productdetails.image);
  return (
    <>
    <CollapsibleExample />
    {/* <h1>{productdetails.title}, {productdetails.image}, {productdetails.image1}, {productdetails.image2}, {productdetails.image3}</h1> */}
    <div className="container col-xxl-10 px-4">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
      <div className='d-flex'>
        <img src={productdetails.image} onClick={() => setImage(productdetails.image)}  className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={100} height={50} loading="lazy" />
        <img src={productdetails.image1} onClick={() => setImage(productdetails.image1)} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={100} height={50} loading="lazy" />
        <img src={productdetails.image2} onClick={() => setImage(productdetails.image2)} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={100} height={50} loading="lazy" />
        <img src={productdetails.image3} onClick={() => setImage(productdetails.image3)} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={100} height={50} loading="lazy" />
      </div>
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">{productdetails.name}</h1>
      <p className="lead">{productdetails.describtion}</p>
      <p className='lead'>{productdetails.price} $</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Button type="button" className="btn btn-danger btn-lg px-4 me-md-2">Add To Card</Button>
      </div>
    </div>
  </div>
</div>
      <FooterBike />
    </>
  )
}

export default Details