import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt, FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { LangContext } from "../context/LangContext";
import { useCart } from "react-use-cart";

function CollapsibleExample() {
  const [mode, setMode] = useContext(ModeContext);
  const [lang, setLang] = useContext(LangContext);
  const {totalItems} = useCart();
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
              <form className="d-flex w-100" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder={lang === "en"?"Search":"Axtarış"}
                  aria-label="Search"
                />
                <button className="btn btn-danger rounded-pill px-4" type="submit">
                  <FaSistrix />
                </button>
              </form>
            </Nav>
            <Nav>
              <Link className="nav-link" to="/login">
                <FaUserAlt className="text-danger"/>{lang === "en"?"Login Here":"Giriş"}
              </Link>
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
              <Button variant="danger px-3" onClick={() => {
                lang === 'az' ?setLang('en'):setLang('az');
                lang === 'az' ?localStorage.setItem('lang','en'):localStorage.setItem('lang','az');
              }}>{lang === 'az'?'EN':'AZ'}</Button>
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
              <Link className="nav-link" to="/blog">
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
