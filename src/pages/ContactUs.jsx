import React, { useContext } from 'react'
import FooterBike from '../components/FooterBike'
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { LangContext } from '../context/LangContext';
import CollapsibleExample from '../components/CollapsibleExample';

const ContactUs = () => {
  const [lang] = useContext(LangContext);

  return (
    <div>
        <CollapsibleExample />
        <div className='aboutbg py-4'>
            <div className="container col-xl-10 col-xxl-12 py-5">
                <div className="row align-items-center py-5">
                    <div className="col-lg-12 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 text-light mb-3">{lang === "en"?"Contact Us":"Bizimlə Əlaqə"}</h1>
                        <h5 className='text-light'><span className='text-danger'>{lang === "en"?"Home":"Ana Səhifə"}</span><RiArrowRightDoubleFill />{lang === "en"?"Contact Us":"Bizimlə Əlaqə"}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-dark py-3">{lang === "en"?"Leave us a Message":"Bizə Mesaj Yazın"}</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead text-body-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo. Start working with Landrick that can provide everything</p>
                <div className="col-xxl-12 px-4 py-5">
  <div className="row flex-lg-row align-items-center g-5 py-2">
    <div className="col-12 col-sm-8 col-lg-6">
      <img src="https://themebing.com/wp/motormania/wp-content/uploads/2020/08/breadcrumbs.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <form className="col-lg-6">
    <div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label" aria-required>Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
  </div>
  <button type="submit" class="btn btn-danger">Send Message</button>
</div>


    </form>
  </div>
</div>

            </div>
        </div>
        <FooterBike />
    </div>
  )
}

export default ContactUs