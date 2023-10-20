import React, { useContext } from 'react'
import CollapsibleExample from '../components/CollapsibleExample'
import { LangContext } from '../context/LangContext';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import FooterBike from '../components/FooterBike';

const Faqpage = () => {
  const [lang] = useContext(LangContext);

  return (
    <>
        <CollapsibleExample />
        <div className='aboutbg py-4'>
      <div className="container col-xl-10 col-xxl-12 py-5">
  <div className="row align-items-center py-5">
    <div className="col-lg-12 text-center text-lg-start">
      <h1 className="display-4 fw-bold lh-1 text-light mb-3">{lang === "en"?"FAQPage":"Tez-tez soruşulan suallar"}</h1>
      <h5 className='text-light'><span className='text-danger'>{lang === "en"?"Home":"Ana Səhifə"}</span><RiArrowRightDoubleFill />{lang === "en"?"FAQPage":"Tez-tez soruşulan suallar"}</h5>
    </div>
  </div>
</div>

    </div>

    <div className='container col-12 my-5'>

    <div class="accordion accordion-flush" id="accordionFlushExample">
        
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How do I choose my first motorcycle?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The first thing a new rider wants to do is get a motorcycle. We tell you how to choose it and give recommendations for good first bikes.</div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How does a motorcycle work?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Select a part on a motorcycle and find out what it does in this article.</div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Can I learn to ride a motorcycle?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You CAN ride a motorcycle if you have the desire, passion, and determination. </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      How do I learn to ride?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Once you know you want to ride, get trained. Your friends or family may not be the best teachers. Do it right with Motorcycle Safety Foundation (MSF) training.</div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      What protective apparel do I need?
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Motorcycles go fast and you ride out in the open. Protect your body and especially your head. Use a helmet.</div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      What are best motorcycle books?
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">If you're anything like me, you'll be reading everything you can find about motorcycles. Want to know my picks for the best beginner books?</div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      How do I meet other motorcyclists?
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Maybe you can't find another rider to talk to. Why not visit our forum. We have many beginning riders there asking the same questions you are. Get answers and meet riders from all over the world. Click the Start Reading button when you get there.</div>
    </div>
  </div>
    </div>
    </div>
    <FooterBike />
    </>
  )
}

export default Faqpage