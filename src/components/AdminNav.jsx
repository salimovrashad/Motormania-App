import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { LangContext } from "../context/LangContext";

function AdminNav() {
  const [mode, setMode] = useContext(ModeContext);
  const [lang, setLang] = useContext(LangContext);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-light py-3 border-bottom"
      >
        <Container>
          <Link className="nav-link" to='/home'>
          <Navbar.Brand>
            <img
              width={200}
              src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/logo.png"
              alt="/"
            />
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around">
            <Nav className="w-50 d-flex justify-content-center"></Nav>
            <Nav>
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
    </>
  );
}

export default AdminNav;
