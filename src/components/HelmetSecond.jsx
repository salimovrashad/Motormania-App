import Aos from 'aos';
import React, { useContext, useEffect } from 'react'
import { LangContext } from '../context/LangContext';
import { Link } from 'react-router-dom';

const HelmetSecond = () => {
  const [lang] = useContext(LangContext);

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className='hseconddark'>
      <div className="container py-5">
        <div className="p-5 text-center rounded-3 hsecond">
          <img width={350} src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/h3-img-3-2.png" alt="" data-aos="fade-up" />
          <p className="col-lg-8 mx-auto display-4 text-light">
            {lang === "en" ? "Limited offer Get Your helmet" : "Məhdud Təkliflə Dəbilqənizi Alın"}
          </p>
          <div className="d-inline-flex gap-2 mb-2">
            <Link to="/shop"><button className="btn btn-danger btn-lg px-4 rounded-pill" onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
              type="button">
              {lang === "en" ? "Shop Now" : "İndi Al"}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelmetSecond