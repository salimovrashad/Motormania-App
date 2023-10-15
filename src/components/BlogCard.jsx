import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ image, name, describtion, id }) => {
    return (
        <div className="col-md-12">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-2 text-size1">{name}</h3>
                    <p className="card-text mb-auto text-size" >{describtion}</p>
                    <Link to={`/blog/${id}`}><a href='/' className="btn btn-outline-danger" onClick={() => {
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}>Continue Reading</a></Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img width={250} height={250} src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BlogCard