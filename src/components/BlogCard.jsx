import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ image, name, describtion, id }) => {
    return (
        <div className="col-md-12">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">{name}</strong>
                    <h3 className="mb-0">{describtion}</h3>
                    <div className="mb-1 text-body-secondary">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
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