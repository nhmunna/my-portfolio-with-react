import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0x5v99f', 'template_lzt8at9', form.current, 'user_YbARDRMsgJ2roEHScd4Co')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };
    return (
        <div className="container contact">
            <div className='row gx-3'>
                <div className='col-lg-4 col-md-6 col-sm-12 p-5'>
                    <p>Md. Nurul Huda Munna Bhuiyan</p>
                    <p>11 No Ward, Middle Charipur, Feni, Bangladesh</p>
                    <p>mdnurulhudamunna@gmail.com</p>
                    <p>+8801827267116</p>
                </div>
                <div className='col-lg-8 col-md-6 col-sm-12'>
                    <h3 className='d-flex flex-row my-3 justify-content-center align-items-center form-heading'>Let's keep in touch</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='d-flex flex-row my-2 justify-content-center align-items-center'>
                            <label >Name</label>
                            <input className='w-75' type="text" name="from_name" />
                        </div>
                        <div className='d-flex flex-row my-2 justify-content-center align-items-center'>
                            <label >Email</label>
                            <input className='w-75' type="email" name="to_name" />
                        </div>
                        <div className='d-flex flex-row my-2 justify-content-center align-items-center'>
                            <label >Message</label>
                            <textarea className='w-75' name="message" />
                        </div>
                        <div className='d-flex flex-row my-2 justify-content-center align-items-center' >
                            <Button variant="primary px-5" type="submit" >Send</Button>
                        </div>
                        {/* <input type="submit" value="Send" /> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;