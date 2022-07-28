import React, { useRef } from 'react';
import './Contact.css'
import addressIcon from '/Users/amrutapalo/Desktop/personal-portfolio/src/icons/address.png';
import phoneIcon from '/Users/amrutapalo/Desktop/personal-portfolio/src/icons/phone.png'
import emailIcon from '/Users/amrutapalo/Desktop/personal-portfolio/src/icons/email.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const onContactSubmitHandler = (event) => {
        event.preventDefault();

        
        emailjs.sendForm('service_12zp0cn', 'template_p2laasx', form.current, 'mcYuAx8nf9nZk0jPO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        

    }

    return (
        <div className="c">
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-left-wrapper">
                        <h3 className="c-left-title">
                            Let's discuss
                            <br />
                            your project
                        </h3>
                        <div className="c-item">
                            <img src={phoneIcon} alt="phone" className='c-item-icon' />
                            <span>+91 9321524020</span>
                        </div>
                        <div className="c-item">
                            <img src={emailIcon} alt="email-id" className='c-item-icon' />
                            <span>amrutapalo@gmail.com</span>
                        </div>
                        <div className="c-item">
                            <img src={addressIcon} alt="address" className='c-item-icon' />
                            <span>ABC, Mumbai, Maharashtra, India</span>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <div className="c-right-wrapper">
                        <span className="c-right-title">
                            <b>What's your story?</b>
                            <span className='title-light'> Get in touch. Always available for freelancing if the right project comes along.</span>
                        </span>
                        <div className="form-container">
                            <form action="" onSubmit={onContactSubmitHandler} ref={form}>
                                <input type="text" placeholder='Name' name="name" />
                                <input type="text" placeholder='Subject' name="subject" />
                                <input type="text" placeholder='Email' name="email" />
                                <textarea placeholder='Message' name="message" />
                                <button type='submit' className='button'>Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact