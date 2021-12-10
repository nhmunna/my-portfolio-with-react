import React from 'react';
import car1 from '../../img/car1.png';
import tourism1 from '../../img/torism1.png';
import healthcare1 from '../../img/healthcare1.png';

const Projects = () => {
    return (
        <div className='container mt-2'>
            <div class="row row-cols-lg-2 row-cols-sm-1 row-cols-md-1 ">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card m-2">
                        <img src={car1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Car Service</h5>
                            <p class="card-text">This is a car service website where users can book a service.
                                Two types of Dashboard are implemented, normal user and admin.
                                Admins can add service, see all of the orders, etc. </p>
                            <a target="_blank" rel="noreferrer" href="https://niche-99a6c.web.app/" class="btn btn-warning">Live
                                Side</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card m-2">
                        <img src={tourism1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Tourism Service</h5>
                            <p class="card-text">This is a tourism website where users can book tourism plan.
                                This site is fully designed with Bootstrap.
                                Firebase Authentication is used for login and registration.</p>
                            <a target="_blank" rel="noreferrer" href="https://tourism-64219.web.app/" class="btn btn-warning">Live
                                Side</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card m-2">
                        <img src={healthcare1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Healthcare Service</h5>
                            <p class="card-text">This is a healthcare website where users can book any medical plan.
                                Users can see the details of the doctor. React router dom used for the route.</p>
                            <a target="_blank" rel="noreferrer" href="https://health-care-fe8b3.web.app/"
                                class="btn btn-warning">Live Side</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;