import React, { useRef } from 'react'
import AdminNav from '../components/AdminNav'
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import FooterBike from '../components/FooterBike';
import emailjs from '@emailjs/browser';

const CheckOut = () => {
  const { items, totalItems, cartTotal } = useCart();

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

  const navigate = useNavigate();

  const handleClick = () => {
    document.querySelector(".myclass").classList.add("disabled")
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      const route = localStorage.getItem('active') ? '/success' : '/login';
      navigate(route);
    }, 1000);
  };



  return (
    <div>
      <AdminNav />
      <div className="container mb-5">
        <main>
          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/logo.png" alt='...' width={500} height={57} />
            <h2>Checkout form</h2>
            <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <div className="row g-5">
            <div className="col-md-5 col-lg-6 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-danger">Your cart</span>
                <span className="badge bg-danger rounded-pill">{totalItems}</span>
              </h4>
              <ul className="list-group mb-3">
                {items.map((item, count) => (
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{item.name}</h6>
                    </div>
                    <span className="text-body-secondary">{item.quantity} x {item.price}$</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>{cartTotal}$</strong>
                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </form>
            </div>
            <div className="col-md-7 col-lg-6">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" name="user_name" className="form-control" id="firstName" placeholder="Name" defaultValue="" required />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" name="user_surname" className="form-control" id="lastName" placeholder="Surname" defaultValue="" required />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">Username</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input type="text" className="form-control" id="username" placeholder="Username" required />
                      <div className="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                    <input type="email" name="user_email" className="form-control" id="email" placeholder="you@example.com" />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-select" id="country" required>
                      <option value>Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" id="state" required>
                      <option value>Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder required />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="same-address" />
                  <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="save-info" />
                  <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                </div>
                <hr className="my-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="my-3">
                  <div className="form-check">
                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                  </div>
                  <div className="form-check">
                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                  </div>
                  <div className="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                    <input type="text" className="form-control" id="cc-name" placeholder required />
                    <small className="text-body-secondary">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                    <input type="text" name='user_credit' className="form-control" id="cc-number" placeholder required />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder required />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" placeholder required />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <textarea className='d-none' name="message" 
                value = {
                  items.map((item) => (
                    item.name
                  ))}/>
                <input 
                  className="w-100 btn btn-danger btn-lg myclass" 
                  type="submit" 
                  value="Send" 
                  onClick={handleClick}
                />
              </form>
            </div>
          </div>
        </main>
      </div>
      <FooterBike />
    </div>
  )
}

export default CheckOut