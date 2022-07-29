import React from 'react'
import './TestimonialCard.css'

const TestimonialCard = (props) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-review">
                {props.review}
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