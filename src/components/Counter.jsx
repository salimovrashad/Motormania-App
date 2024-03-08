import React, { useContext, useState } from 'react'
import { LangContext } from '../context/LangContext';
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

const Counter = () => {
  const lang = useContext(LangContext);
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <div className='countbg'>
        <div className='py-5 countbglinear'>
          <div className="container py-4">
            <div className="row row-cols-1 row-cols-lg-4 text-light">
              <div className="col d-flex align-items-center justify-content-center text-center">
                <div>
                  <h1 className="fw-bold">{counterOn && <CountUp start={0} end={120} duration={2} delay={0} />}</h1>
                  <p>{lang === "en" ? "Stores around the world" : "Dünyadakı mağazalar"}</p>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-center text-center">
                <div>
                  <h1 className="fw-bold">{counterOn && <CountUp start={0} end={2036} duration={2} delay={0} />}</h1>
                  <p>{lang === "en" ? "Satisfied customers" : "Məmnun müştərilər"}</p>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-center text-center">
                <div>
                  <h1 className="fw-bold">{counterOn && <CountUp start={0} end={3012} duration={2} delay={0} />}</h1>
                  <p>{lang === "en" ? "Auto Parts" : "Ehtiyyat Hissələri"}</p>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-center text-center">
                <div>
                  <h1 className="fw-bold">{counterOn && <CountUp start={0} end={234} duration={2} delay={0} />}</h1>
                  <p>{lang === "en" ? "Awards" : "Mükafatlar"}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Counter