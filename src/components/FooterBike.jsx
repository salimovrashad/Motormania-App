import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { FaWhatsapp } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const FooterBike = () => {
  const [lang] = useContext(LangContext);
  return (
    <div className='dark'>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <h3>Get In Touch</h3>
              <h4 className='text-danger'>{lang === "en" ? "Address" : "Ünvan"}:</h4>
              <p>(843) 846-2230 20 Island Tank Rd Beaufort, South Carolina(SC).</p>
              <h4 className='text-danger'>Email:</h4>
              <p>motormania@mail.com</p>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h3>{lang === "en" ? "Our Services" : "Bizim Servislər"}</h3>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "Home" : "Ana Səhifə"}</a></li>
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "Features" : "Cəhətlər"}</a></li>
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "Pricing" : "Qiymətlər"}</a></li>
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "FAQs" : "FAQs"}</a></li>
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "About" : "Haqqımızda"}</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h3>{lang === "en" ? "Useful Links" : "Faydalı Linklər"}</h3>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "Home" : "Ana Səhifə"}</a></li>
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "Features" : "Cəhətlər"}</a></li>
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "Pricing" : "Qiymətlər"}</a></li>
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "FAQs" : "FAQs"}</a></li>
                <li className="nav-item mb-2"><a href="/" className="p-0 text-light">{lang === "en" ? "About" : "Haqqımızda"}</a></li>
              </ul>
            </div>
            <div className="col-md-4 offset-md-1 mb-3">
              <form>
                <h3>{lang === "en" ? "Subscribe" : "Abunə ol"}</h3>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">{lang === "en" ? "Email Address" : "E-Poçt Adresi"}</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-danger rounded-pill" type="button"><RiSendPlaneFill /></button>
                  <a className='btn btn-danger d-block align-items-center justify-content-center' href="https://api.whatsapp.com/send/?phone=994107182802&text=Salam, &type=phone_number&app_absent=0"><FaWhatsapp /></a>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
            <p>© 2023 Salimov Rashad. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-body-emphasis" href="/"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>

    </div>
  )
}

export default FooterBike