import React, { useRef, useState } from 'react';
import './Contact.css'
import addressIcon from '/Users/amrutapalo/Desktop/personal-portfolio/src/icons/address.png';
import phoneIcon from '/Users/amrutapalo/Desktop/personal-portfolio/src/icons/phone.png'
import emailIcon from '/Users/amrutapalo/Desktop/personal-portfolio/src/icons/email.png'
import emailjs from '@emailjs/browser';

const isEmpty = value => value.trim() === '' ? true : false;

const Contact = () => {
    const form = useRef();
    const [isTouched, setIsTouched] = useState(false);
    const [enteredInputIsValid, setEnteredInputIsValid] = useState({ name: false, subject: false, email: false });
    const [didSubmit, setDidSubmit] = useState(false);

    let nameIsValid = false;
    let subjectIsValid = false;
    let emailIsValid = false;


    const onContactSubmitHandler = (event) => {
        event.preventDefault();
        const form_submitted = form.current;

        const nameInput = form_submitted['name'].value;
        const subjectInput = form_submitted['subject'].value;
        const emailInput = form_submitted['email'].value;
        const messageInput = form_submitted['message'].value;
        console.log(nameInput, subjectInput, emailInput);

        nameIsValid = !isEmpty(nameInput);
        subjectIsValid = !isEmpty(subjectInput);
        emailIsValid = !isEmpty(emailInput);
        console.log(nameIsValid, subjectIsValid);


        // setEnteredInputIsValid({
        //     name: nameIsValid,
        //     subject: subjectIsValid,
        //     email: emailIsValid
        // });
        // setEnteredInput({
        //      name: nameInput, subject: subjectInput, email: emailInput, message: messageInput 
        // });
        setIsTouched(true);

        var promise = new Promise(function (resolve, reject) {
            setEnteredInputIsValid({
                name: nameIsValid,
                subject: subjectIsValid,
                email: emailIsValid
            });
            if (nameIsValid && subjectIsValid && emailIsValid) {
                resolve();
                console.log(enteredInputIsValid)
                console.log("resolved")
            } else {
                reject();
                console.log("rejected")
            }
        });

        promise.then(
            () => {
                //resloved
                emailjs.sendForm('service_12zp0cn', 'template_p2laasx', form.current, 'mcYuAx8nf9nZk0jPO')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                
                console.log(enteredInputIsValid);
                event.target.reset();
                setDidSubmit(true);
                console.log(enteredInputIsValid);

            },
            () => {
                //rejected
                console.log("retured");
                console.log(enteredInputIsValid);
                return;
            }
        );

        // if (Object.values(enteredInputIsValid).includes(false)) {

        // }
        // else {

        // }

    }

    return (
        <div className="c" id='contact'>
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
                            <span className='title-light'> Get in touch. Always available if the right opportunity comes along.</span>
                        </span>
                        <div className="form-container">
                            <form action="" onSubmit={onContactSubmitHandler} ref={form}>
                                <input type="text" placeholder='Name' name="name" />
                                {!enteredInputIsValid.name && isTouched && <p className="error-text">Entered name is invalid</p>}
                                <input type="text" placeholder='Subject' name="subject" />
                                {!enteredInputIsValid.subject && isTouched && <p className="error-text">Entered Subject is invalid</p>}
                                <input type="text" placeholder='Email' name="email" />
                                {!enteredInputIsValid.email && isTouched && <p className="error-text">Entered email is invalid</p>}
                                <textarea placeholder='Message' name="message" />
                                <button type='submit' className='button'>SUBMIT</button>
                                {didSubmit ? <p>Thankyou!</p> : ''}
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact