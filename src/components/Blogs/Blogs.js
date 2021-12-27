import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://evening-brushlands-73529.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div>
            <h3 className="heading">Blogs</h3>
            <div class="container px-4 mt-5 d-flex flex-row">
                <div class="row g-5">
                    <div className="col-lg-12 col-sm-12">
                        <div className="d-flex flex-grow-1 flex-wrap">
                            {
                                blogs.map(blog => <Blog
                                    key={blog._id}
                                    blog={blog}
                                ></Blog>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;