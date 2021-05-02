import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Shared/Navbar/Navbar';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_11hz6lf', 'template_5lrib0o', e.target, 'user_ubOvzdirB7GpwSmCtJlmr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}

const ContactMe = () => {
    document.title = 'Contact';

    return (
        <div>
            <Navbar />
            <div style={{ backgroundColor: '#505050', height: '100vh' }}>
                <div className='container pt-5 text-white'>
                    <h2 className='text-center'>Please leave a message</h2>
                    <form onSubmit={sendEmail}>
                        <div className='row pt-5 mx-auto'>
                            <div className="col-md-8 mx-auto mb-3">
                                <label className="form-label">Your Name</label>
                                <input type="text" className="form-control" name='name' placeholder="Full Name" />
                            </div>
                            <div className="col-md-8 mx-auto mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" name='email' placeholder="name@example.com" />
                            </div>
                            <div className="col-md-8 mx-auto mb-3">
                                <label className="form-label">Your Message</label>
                                <textarea className="form-control" name='message' rows="3"></textarea>
                            </div>
                            <div className="col-md-8 mx-auto mb-3 text-end">
                                <input type='submit' className='btn btn-primary' value='Send Message' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;