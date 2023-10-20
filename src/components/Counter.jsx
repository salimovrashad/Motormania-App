import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

const Counter = () => {
  const lang = useContext(LangContext);
  return (
    <div className='countbg'>
      <div className='py-5 countbglinear'>
        <div className="container py-4">
          <div className="row row-cols-1 row-cols-lg-4 text-light">
            <div className="col d-flex align-items-center justify-content-center text-center">
              <div>
                <h1 className="fw-bold">120</h1>
                <p>{lang === "en" ? "Stores around the world" : "Dünyadakı mağazalar"}</p>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-center text-center">
              <div>
                <h1 className="fw-bold">2,036</h1>
                <p>{lang === "en" ? "Satisfied customers" : "Məmnun müştərilər"}</p>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-center text-center">
              <div>
                <h1 className="fw-bold">3,012</h1>
                <p>{lang === "en" ? "Auto Parts" : "Ehtiyyat Hissələri"}</p>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-center text-center">
              <div>
                <h1 className="fw-bold">234</h1>
                <p>{lang === "en" ? "Awards" : "Mükafatlar"}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Counter