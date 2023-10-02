import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const brState = useSelector((state) => state.br);
  const {url} = useParams();
  const productdetails = brState.find(p=>p.id.toString() === url)
  
  return (
    <h1>{productdetails.name}</h1>
  )
}

export default BlogDetails