import { LangContext } from '../context/LangContext';
import { useContext } from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShopCard from './ShopCard';


export default function BikeFilter() {
  const [lang] = useContext(LangContext);
  const motos = useSelector(p => p.mr);
  const catData = motos.filter(p => p.type === "Helmets");

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
    <div className="container py-5">
      <div className='d-flex justify-content-between pb-5'>
        <h1 className="display-5 fw-bold">{lang === "en" ? "Bike Helmet" : "Motosiklet Dəbilqələri"}</h1>
        <Link to="/shop"><button onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
          className='btn btn-outline-danger px-5 py-2 rounded-pill'>{lang === "en" ? "Shop Now" : "Alış-veriş et"}</button></Link>
      </div>
      <Slider {...settings}>
        {catData.map(item => (
          <ShopCard image={item.image} name={item.name} price={item.price} id={item.id} alldata={item} />
        ))
        }
      </Slider>
    </div>
  );
}

