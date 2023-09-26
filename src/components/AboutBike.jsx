import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { Link } from 'react-router-dom';

const AboutBike = () => {
  const [lang] = useContext(LangContext);

  return (
    <div>
        <div className="container col-xxl-12 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/h3-img-3-2.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={900} height={700} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-5">{lang === "en"?"About bikestore":"Mağaza Haqqında"}</h1>
      <p className="lead mb-4 w-100">{lang === "en"?"MotorMania is a leading Automotive Design and Engineering Solution Company that specializes in creating innovative after-market products for two-wheelers. The company has an experienced team of designers and engineers who are passionate about pushing the limits of what’s possible in the world of two-wheeler engineering. With Our cutting-edge technology and advanced manufacturing capabilities, Motoverse is able to create high-quality customized products that enhance the performance, style, and safety of two-wheelers. From exhaust systems and suspension upgrades to custom lighting solutions and body kits, their product range is designed to meet the unique needs of every customer. With a commitment to quality and customer satisfaction, Motoverse has established itself as a trusted partner for businesses and individuals looking to take their two-wheelers to the next level.":"MotorMania iki təkərli avtomobillər üçün innovativ satış sonrası məhsulların yaradılmasında ixtisaslaşan aparıcı Avtomobil Dizayn və Mühəndislik Həlləri Şirkətidir. Şirkət iki təkərli maşınqayırma dünyasında mümkün olanın hüdudlarını aşmağa həvəsli olan təcrübəli dizaynerlər və mühəndislər komandasına malikdir. Ən müasir texnologiyamız və qabaqcıl istehsal imkanlarımızla Motoverse iki təkərli avtomobillərin performansını, üslubunu və təhlükəsizliyini artıran yüksək keyfiyyətli fərdi məhsullar yaratmağa qadirdir. Egzoz sistemləri və asma təkmilləşdirmələrindən tutmuş xüsusi işıqlandırma həlləri və kuzov dəstlərinə qədər, onların məhsul çeşidi hər bir müştərinin unikal ehtiyaclarını ödəmək üçün nəzərdə tutulmuşdur. Keyfiyyət və müştəri məmnuniyyəti öhdəliyi ilə Motoverse iki təkərli avtomobillərini növbəti səviyyəyə çıxarmaq istəyən müəssisələr və şəxslər üçün etibarlı tərəfdaş kimi özünü təsdiqlədi."}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link className="btn btn-danger btn-lg px-5 me-md-2 rounded-pill" to="/home"onClick={() => {
                                      window.scroll({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                      });
                                      }}>
          {lang === "en"?"Learn More":"Daha Çox"}
        </Link>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AboutBike