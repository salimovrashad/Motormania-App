import Aos from 'aos'
import React, { useContext, useEffect } from 'react'
import { LangContext } from '../context/LangContext';

const MotoSelect = () => {
  const [lang] = useContext(LangContext);

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='motobg py-5'>
    <div className='container d-flex flex-wrap py-4'>
    <div className='container motocard motocardbg1 my-2 rounded-4' data-aos="fade-top">
        <div className="card text-bg-light border border-0">
  <div className="card-img-overlay mt-5">
    <h2 className="card-title display-5 w-50">{lang === "en"?"New Style Bikes":"Yeni Stil Motosikletlər"}</h2>
    <p className="card-text">{lang === "en"?"Power tools of next level":"Yeni Nəsil Alətlər"}</p>
    <button className='btn btn-danger rounded-pill px-5 py-2'>{lang === "en"?"Shop Now":"İndi Al"}</button>
  </div>
</div>

    </div>
    <div className='container motocard motocardbg2 my-2 rounded-4' data-aos="fade-top">
        <div className="card text-bg-light border border-0">
  <div className="card-img-overlay mt-5">
    <h2 className="card-title display-5 w-50">{lang === "en"?"Bike Helmet":"Motosiklet Dəbilqələri"}</h2>
    <p className="card-text">{lang === "en"?"New Style Bike Helmet":"Yeni Nəsil Motosiklet Kaskları"}</p>
    <button className='btn btn-danger rounded-pill px-5 py-2'>{lang === "en"?"Shop Now":"İndi Al"}</button>
  </div>
</div>

    </div>
    </div>
    </div>
  )
}

export default MotoSelect