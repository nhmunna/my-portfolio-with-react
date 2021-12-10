import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../img/nhtoping.png';
import Typed from 'react-typed';
import './Banner.css';

const Banner = () => {

    return (
        <div className="container banner">
            <div class="row gx-1">
                <div class="col-md-7 col-sm-12 p-2 d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <h1 className="text-white heading">Hello, I am <span className='auto-input text-primary'><Typed
                            strings={[
                                'NURUL HUDA MUNNA',
                                'a WEB DEVELOPER']}
                            typeSpeed={100}
                            backSpeed={50}
                            loop >
                        </Typed></span></h1>
                    </div>
                    <div>
                        <p className="text-white">
                            Though I have completed my M.Sc. in Mathematics, I have a passion for web development. Therefore, I have been working with JavaScript,
                            HTML,
                            CSS,
                            React, Bootstrap, Material UI, MongoDB, Node.js, Firebase and continuously learning other technologies.
                        </p>
                        <div className='social-icons-banner'>
                            <a className='px-2' rel='noreferrer' target="_blank" href="https://www.facebook.com/nurulhuda.munna/"><i class="fab fa-facebook"></i></a>
                            <a className='px-2' rel='noreferrer' target="_blank" href="https://twitter.com/NHMunna15"><i class="fab fa-twitter"></i></a>
                            <a className='px-2' rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/nurul-huda-munna/"><i class="fab fa-linkedin-in"></i></a>
                            <a className='px-2' rel='noreferrer' target="_blank" href="https://github.com/nhmunna"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-sm-12">
                    <Image src={img} fluid />
                </div>
            </div>
        </div >
    );
};

export default Banner;