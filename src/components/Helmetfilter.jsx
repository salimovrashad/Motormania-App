import { LangContext } from '../context/LangContext';
import { useContext } from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

export default function BikeFilter() {
  const [lang] = useContext(LangContext);

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
                    <h1 class="display-5 fw-bold">{lang === "en"?"Bike Helmet":"Motosiklet Dəbilqələri"}</h1>
                    <button className='btn btn-outline-danger px-5 rounded-pill'>{lang === "en"?"Shop Now":"Alış-veriş et"}</button>
                </div>
        <Slider {...settings}>
          <div>
          <div className="card" style={{width: '19rem'}}>
                <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/helmet-7-600x600.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">AGV Sports Modular</h5>
                    <p className="card-text">$563.00</p>
                    <a href="/" className="btn btn-outline-danger w-100">Add to Card</a>
                </div>
            </div>
          </div>
          <div>
          <div className="card" style={{width: '19rem'}}>
                <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/helmet-7-600x600.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">AGV Sports Modular</h5>
                    <p className="card-text">$563.00</p>
                    <a href="/" className="btn btn-outline-danger w-100">Add to Card</a>
                </div>
            </div>
          </div>
          <div>
          <div className="card" style={{width: '19rem'}}>
                <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/helmet-7-600x600.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">AGV Sports Modular</h5>
                    <p className="card-text">$563.00</p>
                    <a href="/" className="btn btn-outline-danger w-100">Add to Card</a>
                </div>
            </div>
          </div>
          <div>
          <div className="card" style={{width: '19rem'}}>
                <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/helmet-7-600x600.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">AGV Sports Modular</h5>
                    <p className="card-text">$563.00</p>
                    <a href="/" className="btn btn-outline-danger w-100">Add to Card</a>
                </div>
            </div>
          </div>
          <div>
          <div className="card" style={{width: '19rem'}}>
                <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/helmet-7-600x600.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">AGV Sports Modular</h5>
                    <p className="card-text">$563.00</p>
                    <a href="/" className="btn btn-outline-danger w-100">Add to Card</a>
                </div>
            </div>
          </div>
          <div>
          <div className="card" style={{width: '19rem'}}>
                <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/helmet-7-600x600.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">AGV Sports Modular</h5>
                    <p className="card-text">$563.00</p>
                    <a href="/" className="btn btn-outline-danger w-100">Add to Card</a>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

