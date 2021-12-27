import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id, title, writer, description, img, time } = blog;
    
    return (
        <div className="col-lg-4 m-2 shadow p-2 rounded-3 text-center">
            <img className="img-fluid" src={`data:image/png;base64,${img}`} alt="" />
            <h3 className="title">{title}</h3>
            <div className="info d-flex justify-content-between">
                <h5>{writer}</h5>
                <h5>{time.toString().slice(0, 24)}</h5>
            </div>
            <p className="px-3 details" >{description.slice(0, 200)}</p>
            <Link to={`/blog/${_id}`}>
                <button className="btn btn-success shadow">Details</button>
            </Link>
        </div>
    );
};

export default Blog;