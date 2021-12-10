import React from 'react';
import { Button } from 'react-bootstrap';
import './Resume.css'
import resume from '../../resume/Nurul_Huda_Munna_Web_Development_Resume.pdf'

const Resume = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center resume bg-dark text-white py-5">
            <div>
                <h2 className='resume-heading'>Do you want to see my RESUME?</h2>
            </div>
            <div>
                <a href={resume} download><Button variant="warning px-5">Download</Button></a>
            </div>
        </div>
    );
};

export default Resume;