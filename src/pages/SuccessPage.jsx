import React from 'react'
import { Link } from 'react-router-dom'
import ShopCard from '../components/ShopCard'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

const SuccessPage = () => {
  const motos = useSelector(p=>p.mr);

    const settings = {
      infinite: true,
      dots: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      swipeToSlide: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 425,
          dots: true,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  return (
    <Container>
        <div className='center column'>
            <h1>Payment Successfull</h1>
            <img src="https://www.caaz.co.zw/wp-content/uploads/2023/01/success.gif" alt="" />
            <Link to="/shop" className='btn btn-success px-5'>NEXT TO SHOP</Link>
        </div>
            <h1>Recommended Products</h1>
            <Slider {...settings}>
            {motos.slice(0,4).map(item=>(
              <ShopCard image={item.image} name={item.name} price={item.price} id={item.id} alldata={item}/>
            ))}
            </Slider>
      </Container>
  )
}

export default SuccessPage