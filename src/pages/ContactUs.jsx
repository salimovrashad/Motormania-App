import React, { useContext, useRef } from 'react'
import FooterBike from '../components/FooterBike'
import { LangContext } from '../context/LangContext';
import CollapsibleExample from '../components/CollapsibleExample';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [lang] = useContext(LangContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2ynuj7j', 'template_lb5b14j', form.current, {
        publicKey: 'UJKshmsZO5yNGPDMN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <CollapsibleExample />
      <div className='aboutbg py-4'>
        <div className="container col-xl-10 col-xxl-12 py-5">
          <div className="row align-items-center py-5">
            <div className="col-lg-12 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 text-light mb-3">{lang === "en" ? "Contact Us" : "Bizimlə Əlaqə"}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item breadcrumb-divider fs-5"><a href="/home" className='text-danger'>{lang === "en" ? "Home" : "Ana Səhifə"}</a></li>
                  <li className="breadcrumb-item fs-5 text-light">{lang === "en" ? "Contact Us" : "Bizimlə Əlaqə"}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Container className='py-5'>
        <Row className="mb-5 my-4">
          <Col lg="12">
            <h1 className="display-4 mb-4 text-center">{lang === "en" ? "Contact Us" : "Bizimlə Əlaqə"}</h1>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3>{lang === "en" ? "Contact" : "Əlaqə Vasitələri"}:</h3>
            <h4 className='text-danger'>{lang === "en" ? "Address" : "Ünvan"}:</h4>
            <p>(843) 846-2230 20 Island Tank Rd Beaufort, South Carolina(SC).</p>
            <h4 className='text-danger'>Email:</h4>
            <p>selimovresad33@gmail.com</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100" ref={form} onSubmit={sendEmail}>
              <Row className='mb-4'>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn btn-outline-danger" type="submit">
                    {lang === "en" ? "Send Message" : "Mesaj Göndər"}
                  </button>
                </Col>
              </Row>
            </form>

            {/* <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form> */}

          </Col>
        </Row>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.44637553993!2d49.77255940382213!3d40.39469399729952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1695755592459!5m2!1str!2saz"
        title='map'
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
      <FooterBike />
    </div>
  )
}

export default ContactUs