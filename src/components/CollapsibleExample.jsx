import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt, FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { ModeContext } from "../context/ModeContext";
import { LangContext } from "../context/LangContext";
import { useCart } from "react-use-cart";
import { useSelector } from "react-redux";

function CollapsibleExample() {
  const [mode, setMode] = useContext(ModeContext);
  const [lang, setLang] = useContext(LangContext);
  const {totalItems} = useCart();

  const [query, setQuery] = useState(null);
  const motos = useSelector(p=>p.mr);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-light py-3 border-bottom"
      >
        <Container>
          <Navbar.Brand to='/home'>
            <img
              width={200}
              src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/logo.png"
              alt="/"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around">
            <Nav className="w-50 d-flex justify-content-center">
            
            </Nav>
            <Nav>
            <div>
              {localStorage.getItem('active') === 'true' ? <div className="btn">user@user.com</div> : <Link className="btn" to="/login">
              <FaUserAlt className="text-danger"/>{lang === "en"?"Login Here":"Giriş"}</Link>}

              <Link to="/cart"  className="btn border-danger position-relative me-3">
                    <FaCartShopping className="text-danger"/>{lang === "en"?"Shopping Cart":"Səbət"}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                    </span>
              </Link>
              <Button variant="danger me-2" onClick={() => {
                mode === 'light' ?setMode('dark'):setMode('light');
                mode === 'light' ?localStorage.setItem('mode','dark'):localStorage.setItem('mode','light');
              }}>{mode==='light'?"DARK":"LIGHT"}</Button>
              <Button variant="danger px-3 me-2" onClick={() => {
                lang === 'az' ?setLang('en'):setLang('az');
                lang === 'az' ?localStorage.setItem('lang','en'):localStorage.setItem('lang','az');
              }}>{lang === 'az'?'EN':'AZ'}</Button>
            <Button variant="danger px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FaSistrix />
            </Button>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Search</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <form className="input-group mb-3">
                      <input onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product name" aria-label="Enter product name" aria-describedby="button-addon2" />
                      <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                    </form>
                    
                    <ul className="list-group">
                      {motos.filter(p => p.name.toLowerCase().includes(query)).map(item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">{item.name}<img width={50} src={item.image} alt="/" /></li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>
            </div>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-light py-3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/home">
              {lang === "en"?"HOME":"ANA SƏHİFƏ"}
              </Link>
              <Link className="nav-link" to="/about">
              {lang === "en"?"ABOUT US":"HAQQIMIZDA"}
              </Link>
              <Link className="nav-link" to="/shop">
              {lang === "en"?"SHOP":"MAĞAZA"}
              </Link>
              <Link className="nav-link" to="/blog">
              {lang === "en"?"BLOG":"BLOG"}
              </Link>
              <Link className="nav-link" to="/wishlist">
              {lang === "en"?"WİSHLİST":"FAVORİLƏR"}
              </Link>
              <Link className="nav-link" to="/contactus">
              {lang === "en"?"CONTACT US":"BİZİMLƏ ƏLAQƏ"}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
