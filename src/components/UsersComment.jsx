import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import { RxStarFilled } from "react-icons/rx";

export default function UsersComment() {

    const settings = {
      infinite: true,
      dots: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
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
      <div className="container py-5 my-5">
        <Slider {...settings}>
        <div className="feature col text-center w-75">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img className='border border-danger border-2 rounded-pill' width={100} src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/t-1.jpg" alt="" />
            </div>
            <p>This division is not philosophy obsolete but has changed. Natural philosophy has split into the various natural sciences.</p>
            <h5 className='text-danger'>John Doe</h5>    
            <p>CEO Meblya</p>
            <div className='text-warning'><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /></div>
        </div>

        <div className="feature col text-center w-75">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img className='border border-danger border-2 rounded-pill' width={100} src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/t-1.jpg" alt="" />
            </div>
            <p>This division is not philosophy obsolete but has changed. Natural philosophy has split into the various natural sciences.</p>
            <h5 className='text-danger'>John Doe</h5>    
            <p>CEO Meblya</p>
            <div className='text-warning'><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /></div>
        </div>

        <div className="feature col text-center w-75">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img className='border border-danger border-2 rounded-pill' width={100} src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/t-1.jpg" alt="" />
            </div>
            <p>This division is not philosophy obsolete but has changed. Natural philosophy has split into the various natural sciences.</p>
            <h5 className='text-danger'>John Doe</h5>    
            <p>CEO Meblya</p>
            <div className='text-warning'><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /></div>
        </div>

        <div className="feature col text-center w-75">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img className='border border-danger border-2 rounded-pill' width={100} src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/t-1.jpg" alt="" />
            </div>
            <p>This division is not philosophy obsolete but has changed. Natural philosophy has split into the various natural sciences.</p>
            <h5 className='text-danger'>John Doe</h5>    
            <p>CEO Meblya</p>
            <div className='text-warning'><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /></div>
        </div>

        <div className="feature col text-center w-75">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img className='border border-danger border-2 rounded-pill' width={100} src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/t-1.jpg" alt="" />
            </div>
            <p>This division is not philosophy obsolete but has changed. Natural philosophy has split into the various natural sciences.</p>
            <h5 className='text-danger'>John Doe</h5>    
            <p>CEO Meblya</p>
            <div className='text-warning'><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /></div>
        </div>

        <div className="feature col text-center w-75">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img className='border border-danger border-2 rounded-pill' width={100} src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/t-1.jpg" alt="" />
            </div>
            <p>This division is not philosophy obsolete but has changed. Natural philosophy has split into the various natural sciences.</p>
            <h5 className='text-danger'>John Doe</h5>    
            <p>CEO Meblya</p>
            <div className='text-warning'><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /></div>
        </div>

        </Slider>
      </div>
    );
  }

