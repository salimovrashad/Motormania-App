import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

const FilterSec = () => {
const [lang] = useContext(LangContext);

  return (
    <div className="py-4 fcbg">
        <div className='py-5 container d-flex justify-content-between flex-wrap'>
        <div className="card my-3" style={{width: '13rem'}}>
            <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/part-1.jpg" className="card-img-top border-2 border-bottom border-danger" alt="..." />
            <div className="card-body">
                <a href="/" className="fs-5 btn btn-outline-none w-100">{lang === "en"?"Accessories":"Aksesuarlar"}</a>
            </div>
        </div>
        <div className="card my-3" style={{width: '13rem'}}>
            <img src="https://themebing.com/wp/motormania/wp-content/uploads/2020/04/bike-6.png" className="card-img-top border-2 border-bottom border-danger" alt="..." />
            <div className="card-body">
                <a href="/" className="fs-5 btn btn-outline-none w-100">{lang === "en"?"Bikes":"Motosikletlər"}</a>
            </div>
        </div>
        <div className="card my-3" style={{width: '13rem'}}>
            <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/gloves-2.jpg" className="card-img-top border-2 border-bottom border-danger" alt="..." />
            <div className="card-body">
                <a href="/" className="fs-5 btn btn-outline-none w-100">{lang === "en"?"Gloves":"Əlcəklər"}</a>
            </div>
        </div>
        <div className="card my-3" style={{width: '13rem'}}>
            <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/jacket-4.jpg" className="card-img-top border-2 border-bottom border-danger" alt="..." />
            <div className="card-body">
                <a href="/" className="fs-5 btn btn-outline-none w-100">{lang === "en"?"Jackets":"Jaketlər"}</a>
            </div>
        </div>
        <div className="card my-3" style={{width: '13rem'}}>
            <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/boot-shoe-1.jpg" className="card-img-top border-2 border-bottom border-danger" alt="..." />
            <div className="card-body">
                <a href="/" className="fs-5 btn btn-outline-none w-100">{lang === "en"?"Boots":"Çəkmələr"}</a>
            </div>
        </div>
        <div className="card my-3" style={{width: '13rem'}}>
            <img src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/helmet-6.jpg" className="card-img-top border-2 border-bottom border-danger" alt="..." />
            <div className="card-body">
                <a href="/" className="fs-5 btn btn-outline-none w-100">{lang === "en"?"Helmets":"Kasklar"}</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FilterSec