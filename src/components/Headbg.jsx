import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import MotoSelect from "./MotoSelect";
import FourSelection from "./FourSelection";
import HelmetSecond from "./HelmetSecond";
import Aos from "aos";
import Marks from "./Marks";
import FilterSec from "./FilterSec";
import Helmetfilter from "./Helmetfilter";
import BikeFilter from "./BikeFilter";
import { LangContext } from "../context/LangContext";
import CollapsibleExample from "./CollapsibleExample";
import FooterBike from "./FooterBike";
import { Link } from "react-router-dom";


const Headbg = () => {
  const [lang] = useContext(LangContext);

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
    <CollapsibleExample />
      <div className="bghead w-100">
        <Container>
          <div className="px-4 py-5 my-5 col-lg-6" data-aos="zoom-in">
            <h1 className="display-3 fw-bold text-light">

              {/* Find the Best Motorbike Parts For{" "}
              <span className="display-3 fw-bold text-danger">
                Your Vehicles
              </span> */}
              {lang === "en"?"Find the Best Motorbike Parts For Your Vehicles":"Motosiklet üçün ən yaxşı ehtiyyat hissələrini tapın"}
            </h1>
            <div className="col-lg-12">
              <p className="lead mb-4 text-light">
              {lang === "en"?"Browse our range of Gore-Tex motorcycle clothing including : Rukka, Dainese, Richa, Alpinestars, and more":"Gore-Tex motosiklet geyimləri də daxil olmaqla bizim çeşidlərimizə nəzər salın: Rukka, Dainese, Richa, Alpinestars və s."}
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
                <Link to="/shop"><button
                  type="button"
                  className="btn btn-danger btn-lg px-5 gap-3 rounded-pill"
                >
                {lang === "en"?"Shop Now":"İndi Al"}

                </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <MotoSelect />
      <FourSelection />
      <HelmetSecond />
      <Marks />
      <FilterSec />
      <Helmetfilter />
      <BikeFilter />
      <FooterBike />
    </>
  );
};

export default Headbg;
