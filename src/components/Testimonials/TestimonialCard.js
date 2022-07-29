import React from 'react'
import './TestimonialCard.css'
import quoteStart from '/Users/amrutapalo/Desktop/personal-portfolio/src/icons/quote-start.png';
import quoteEnd from '/Users/amrutapalo/Desktop/personal-portfolio/src/icons/quote-end.png';


const TestimonialCard = (props) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-review">
                {/* <img src={quoteStart} alt="" /> */}
                {props.review}
                {/* <img src={quoteEnd} alt="" /> */}
            </div>
            <div className="testimonial-person">
                <img src={props.image} alt="avatar" />
                <div className="testimonial-by">
                    <div className="testimonial-by-name">
                        {props.name}
                    </div>
                    <div className="testimonial-by-designation">
                        {props.designation}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TestimonialCard;