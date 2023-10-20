import React, { useContext } from 'react'
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { LangContext } from '../context/LangContext';


const FourSelection = () => {
    const [lang] = useContext(LangContext);

    return (
        <div className='d-flex justify-content-center align-center flex-wrap py-5 fourbg'>
            <div className="card my-3 mx-4 bckcard" style={{ width: 270 }}>
                <div className="row g-0">
                    <div className="col-md-4 display-4 px-3">
                        <FaShippingFast />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{lang === "en" ? "Free Shipping" : "Pulsuz çatdırılma"}</h5>
                            <p className="card-text">{lang === "en" ? "For orders from $50" : "50 dollardan başlayan sifarişlər üçün."}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card my-3 mx-4 bckcard" style={{ width: 270 }}>
                <div className="row g-0">
                    <div className="col-md-4 display-4 px-3">
                        <BiSupport />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{lang === "en" ? "Support 24/7" : "Dəstək 24/7"}</h5>
                            <p className="card-text">{lang === "en" ? "Call us anytime" : "İstənilən vaxt bizə zəng edin."}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card my-3 mx-4 bckcard" style={{ width: 270 }}>
                <div className="row g-0">
                    <div className="col-md-4 display-4 px-3">
                        <AiFillSafetyCertificate />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{lang === "en" ? "100% Safety" : "100% Güvən"}</h5>
                            <p className="card-text">{lang === "en" ? "Only secure payments" : "Yalnız təhlükəsiz ödənişlər."}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card my-3 mx-4 bckcard" style={{ width: 270 }}>
                <div className="row g-0">
                    <div className="col-md-4 display-4 px-3">
                        <MdLocalOffer />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{lang === "en" ? "Hot Offers" : "Qaynar Təkliflər"}</h5>
                            <p className="card-text">{lang === "en" ? "Discounts up to 90%" : "90%-ə qədər endirimlər."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourSelection