import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import CollapsibleExample from '../components/CollapsibleExample';
import FooterBike from '../components/FooterBike';
import BlogCard from '../components/BlogCard';
import { useSelector } from 'react-redux';

const Blog = () => {
const [lang] = useContext(LangContext);
const blogs = useSelector(p => p.br);

  return (
    <>
    <CollapsibleExample />

    <div>
      <div className='aboutbg py-4'>
      <div className="container col-xl-10 col-xxl-12 py-5">
  <div className="row align-items-center py-5">
    <div className="col-lg-12 text-center text-lg-start">
      <h1 className="display-4 fw-bold lh-1 text-light mb-3">{lang === "en"?"Blog":"Blog"}</h1>
      <h5 className='text-light'><span className='text-danger'>{lang === "en"?"Home":"Ana Səhifə"}</span><RiArrowRightDoubleFill />{lang === "en"?"Blog":"Blog"}</h5>
    </div>
  </div>
</div>

    </div>
    </div>

    <main className="container py-5">
  <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div className="col-lg-12 px-0">
      <img src="https://t3.ftcdn.net/jpg/02/76/70/70/360_F_276707060_WpP9bwHWv0Wdqqn0pEgtSuIgXUvgkbs7.jpg" width="100%" height={300} alt="" srcset="" />
    </div>
  </div>
  <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">
            Honda's new E-Clutch system to welcome beginners with clutchless shifting</h3>
          <p className="mb-auto mt-3 text-danger">Dustin Wheelen</p>
          <a href="/" className="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img alt='' src='https://www.revzilla.com/blog_content_image/image/91082/redline_hero/honda_e_clutch_cover.jpg' className="bd-placeholder-img" width={250} height={250}focusable="false"></img>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">Father and son, coast to coast: The incidental sport-touring comparo</h3>
          <p className="mb-auto mt-3 text-danger">Michael Megliola</p>
          <a href="/" className="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
        <img alt='' src='https://www.revzilla.com/blog_content_image/image/91026/redline_hero/VFR_ADV_hero.jpg' className="bd-placeholder-img" width={250} height={250}focusable="false"></img>

        </div>
      </div>
    </div>
  </div>
  <div className="row g-5">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Blogs for Motorcycle
      </h3>


      {blogs.map(item => (

        <BlogCard image={item.image} name={item.name} describtion={item.describtion} id={item.id} shortdes={item.shortdes} />

      ))}



    </div>
    <div className="col-md-4">
      <div className="position-sticky" style={{top: '2rem'}}>
        <div className="p-4 mb-3 bg-body-tertiary rounded">
          <h4 className="fst-italic">About</h4>
          <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
        </div>
        <div>
          <h4 className="fst-italic">Recent posts</h4>
          <ul className="list-unstyled">
            <li>
              <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/">
                <img alt='' src='https://www.motosiklethayattir.com/wp-content/uploads/2018/04/ivmeduyusu-768x461.jpg' className="bd-placeholder-img" width={160} height={96}  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <div className="col-lg-8">
                  <h6 className="mb-0">Example blog post title</h6>
                  <small className="text-body-secondary">January 15, 2023</small>
                </div>
              </a>
            </li>
            <li>
              <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/">
              <img alt='' src='https://www.motosiklethayattir.com/wp-content/uploads/2018/04/GazKullanimBecerisi.jpg' className="bd-placeholder-img" width={160} height={96}  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <div className="col-lg-8">
                  <h6 className="mb-0">This is another blog post title</h6>
                  <small className="text-body-secondary">January 14, 2023</small>
                </div>
              </a>
            </li>
            <li>
              <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="/">
              <img alt='' src='https://www.motosiklethayattir.com/wp-content/uploads/2018/04/MotosikletBaslangic.jpg' className="bd-placeholder-img" width={160} height={96}  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <div className="col-lg-8">
                  <h6 className="mb-0">Longer blog post title: This one has multiple lines!</h6>
                  <small className="text-body-secondary">January 13, 2023</small>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h4 className="fst-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            <li><a href="/">March 2021</a></li>
            <li><a href="/">February 2021</a></li>
            <li><a href="/">January 2021</a></li>
            <li><a href="/">December 2020</a></li>
            <li><a href="/">November 2020</a></li>
            <li><a href="/">October 2020</a></li>
            <li><a href="/">September 2020</a></li>
            <li><a href="/">August 2020</a></li>
            <li><a href="/">July 2020</a></li>
            <li><a href="/">June 2020</a></li>
            <li><a href="/">May 2020</a></li>
            <li><a href="/">April 2020</a></li>
          </ol>
        </div>
        <div className="p-4">
          <h4 className="fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            <li><a href="/">GitHub</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Facebook</a></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
    </main>
    <FooterBike />
    </>

  )
}

export default Blog