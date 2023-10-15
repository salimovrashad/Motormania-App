import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import BlogCard from './BlogCard';
import { useSelector } from 'react-redux';

export default function UsersComment() {
  const blogs = useSelector(p => p.br);

  const settings = {
    infinite: false,
    dots: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    <div className="container py-5 my-5">
      <Slider {...settings}>
        {blogs.map(item => (

          <BlogCard image={item.image} name={item.name} describtion={item.describtion} id={item.id} />

        ))}
      </Slider>
    </div>
  );
}

