import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollapsibleExample from '../components/CollapsibleExample';
import FooterBike from '../components/FooterBike';

const BlogDetails = () => {
  const brState = useSelector((state) => state.br);
  const { url } = useParams();
  const productdetails = brState.find(p => p.id.toString() === url)

  return (
    <>
    <CollapsibleExample />
    <div className="container px-4 py-4 my-4 text-center">
      <img className="d-block mx-auto mb-4" src={productdetails.image} alt='' width={650} height={250} />
      <h1 className="display-5 fw-bold text-body-emphasis">{productdetails.name}</h1>
      <div className="col-lg-9 mx-auto">
        <p className="lead mb-4">{productdetails.describtion}</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        </div>
      </div>
    </div>
    <FooterBike />
    </>
  )
}

export default BlogDetails