import React, { useContext } from 'react'
import { RiArrowRightDoubleFill } from "react-icons/ri";
import AboutBike from '../components/AboutBike';
import Marks from '../components/Marks';
import { LangContext } from '../context/LangContext';
import UsersComment from '../components/UsersComment';
import Counter from '../components/Counter';
import CollapsibleExample from '../components/CollapsibleExample';
import FooterBike from '../components/FooterBike';

const About = () => {
  const [lang] = useContext(LangContext);
  return (
    <>
      <CollapsibleExample />
      <div className='aboutbg py-4'>
        <div className="container col-xl-10 col-xxl-12 py-5">
          <div className="row align-items-center py-5">
            <div className="col-lg-12 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 text-light mb-3">{lang === "en" ? "About Us" : "Haqqımızda"}</h1>
              <h5 className='text-light'><span className='text-danger'>{lang === "en" ? "Home" : "Ana Səhifə"}</span><RiArrowRightDoubleFill />{lang === "en" ? "About Us" : "Haqqımızda"}</h5>
            </div>
          </div>
        </div>
      </div>

      <AboutBike />
      <Counter />
      <UsersComment />
      <Marks />
      <FooterBike />
    </>
  )
}

export default About