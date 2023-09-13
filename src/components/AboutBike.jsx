import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

const AboutBike = () => {
  const [lang] = useContext(LangContext);

  return (
    <div>
        <div className="container col-xxl-12 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/h3-img-3-2.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={900} height={700} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-5">{lang === "en"?"About bikestore":"Mağaza Haqqında"}</h1>
      <p className="lead mb-4 w-75">The more we drive the car the better they seem to operate operate. No noise, just stopping power! Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 

vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate verit qui in ea voluptate vele.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-danger btn-lg px-5 me-md-2 rounded-pill">{lang === "en"?"Learn More":"Daha Çox"}</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AboutBike