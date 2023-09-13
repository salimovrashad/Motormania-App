import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import ShopCard from '../components/ShopCard';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CollapsibleExample from '../components/CollapsibleExample';
import FooterBike from '../components/FooterBike';
import FilterNav from '../components/FilterNav';

const Shop = () => {
  const motos = useSelector(p=>p.mr);
  const [lang] = useContext(LangContext);

  return (
    <>
    <CollapsibleExample />
    <div>
      <div className='aboutbg py-4'>
      <div className="container col-xl-10 col-xxl-12 py-5">
  <div className="row align-items-center py-5">
    <div className="col-lg-12 text-center text-lg-start">
      <h1 className="display-4 fw-bold lh-1 text-light mb-3">{lang === "en"?"Shop":"Mağaza"}</h1>
      <h5 className='text-light'><span className='text-danger'>{lang === "en"?"Home":"Ana Səhifə"}</span><RiArrowRightDoubleFill />{lang === "en"?"Shop":"Mağaza"}</h5>
    </div>
  </div>
</div>

    </div>
    </div>

    <Container className='py-5'>
      <FilterNav />
      <Row className='g-3 mt-3'>
        
        {motos.map(item=>(

            <ShopCard image={item.image} name={item.name} price={item.price} id={item.id}/>

        ))}

      </Row>
    </Container>

    <FooterBike />
    </>
  )
}

export default Shop