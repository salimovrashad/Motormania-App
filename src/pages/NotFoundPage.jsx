import React, { useContext } from 'react'
import FooterBike from '../components/FooterBike'
import CollapsibleExample from '../components/CollapsibleExample'
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { LangContext } from '../context/LangContext';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const [lang] = useContext(LangContext);
  return (
    <div>
      <CollapsibleExample />
      <div className='aboutbg py-4'>
        <div className="container col-xl-10 col-xxl-12 py-5">
          <div className="row align-items-center py-5">
            <div className="col-lg-12 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 text-light mb-3">{lang === "en" ? "Page Not Found" : "Səhifə Tapılmadı"}</h1>
              <h5 className='text-light'><span className='text-danger'>{lang === "en" ? "Home" : "Ana Səhifə"}</span><RiArrowRightDoubleFill />{lang === "en" ? "404 Not Found" : "Haqqımızda"}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-secondary py-3">Oops! That page can’t be found.</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/home"><button
              type="button"
              className="btn btn-danger btn-lg px-4 gap-3 rounded-pill">
              {lang === "en" ? "Go To Home" : "Ana Səhifəyə Qayıt"}
            </button>
            </Link>
          </div>
        </div>
      </div>
      <FooterBike />
    </div>
  )
}

export default NotFoundPage