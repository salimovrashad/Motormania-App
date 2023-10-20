import React, { useContext, useState } from 'react'
import { LangContext } from '../context/LangContext';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import ShopCard from '../components/ShopCard';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CollapsibleExample from '../components/CollapsibleExample';
import FooterBike from '../components/FooterBike';

const Shop = () => {
  const motos = useSelector(p => p.mr);
  const [lang] = useContext(LangContext);
  const [catMotos, setCatMotos] = useState([]);
  const handleClick = (cat) => {
    const catData = motos.filter(p => p.type === cat);
    setCatMotos(catData);
  }
  //Product sorting
  const [sortCriteria, setSortCriteria] = useState(null);
  function handleSorting(a, b) {
    if (sortCriteria === 'price>') {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (sortCriteria === 'price<') {
      return parseFloat(a.price) - parseFloat(b.price);
    }
    return 0;
  }
  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  }
  return (
    <>
      <CollapsibleExample />
      <div>
        <div className='aboutbg py-4'>
          <div className="container col-xl-10 col-xxl-12 py-5">
            <div className="row align-items-center py-5">
              <div className="col-lg-12 text-center text-lg-start">
                <h1 className="display-4 fw-bold lh-1 text-light mb-3">{lang === "en" ? "Shop" : "Mağaza"}</h1>
                <h5 className='text-light'><span className='text-danger'>{lang === "en" ? "Home" : "Ana Səhifə"}</span><RiArrowRightDoubleFill />{lang === "en" ? "Shop" : "Mağaza"}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className='py-5'>
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-3">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav category">
                  <li className="nav-item">
                    <div className="nav-link cursor" onClick={() => { handleClick("") }}>{lang === "en" ? "ALL" : "Hamısı"}</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link cursor" onClick={() => { handleClick("Accessories") }}>{lang === "en" ? "ACCESSORİES" : "Aksesuarlar"}</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link cursor" onClick={() => { handleClick("Bikes") }}>{lang === "en" ? "BİKES" : "Motosikletlər"}</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link cursor" onClick={() => { handleClick("Tires") }}>{lang === "en" ? "TİRES" : "Təkərlər"}</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link cursor" onClick={() => { handleClick("Gloves") }}>{lang === "en" ? "GLOVES" : "Əlcəklər"}</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link cursor" onClick={() => { handleClick("Jackets") }}>{lang === "en" ? "JACKET" : "Jiletlər"}</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link cursor" onClick={() => { handleClick("Boots") }}>{lang === "en" ? "BOOTS" : "Ayaqqabılar"}</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link cursor" onClick={() => { handleClick("Helmets") }}>{lang === "en" ? "HELMETS" : "Kasklar"}</div>
                  </li>
                </ul>
              </div>
              <ul className='navbar-nav'>
                <li className='nav-link cursor' onClick={() => handleSort('price>')}>Sort by Price(high-low)</li>
                <li className='nav-link cursor' onClick={() => handleSort('price<')}>Sort by Price(low-high)</li>
              </ul>
            </div>
          </nav>
        </div>
        <Row className='g-3 mt-3'>
          {catMotos.length === 0 ? motos.sort(handleSorting).map(item => (
            <ShopCard image={item.image} name={item.name} price={item.price} id={item.id} alldata={item} />
          )) :
            catMotos.sort(handleSorting).map(item => (
              <ShopCard image={item.image} name={item.name} price={item.price} id={item.id} alldata={item} />
            ))}
        </Row>
      </Container>
      <FooterBike />
    </>
  )
}

export default Shop