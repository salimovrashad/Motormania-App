import React from 'react'

const FooterBike = () => {
  return (
    <div className='dark'>
        <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-3 mb-3">
        <h3>Get In Touch</h3>
        <h4 className='text-danger'>Address:</h4>
        <p>(843) 846-2230 20 Island Tank Rd Beaufort, South Carolina(SC).</p>
        <h4 className='text-danger'>Email:</h4>
        <p>example@mail.com</p>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h3>Our Services</h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h3>Useful Links</h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="/" className="p-0 text-light">About</a></li>
        </ul>
      </div>
      <div className="col-md-4 offset-md-1 mb-3">
        <form>
          <h3>Subscribe</h3>
          <p>here are many variations of passages of Lorem Ipsum available</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-danger rounded-pill" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="/">f</a></li>
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