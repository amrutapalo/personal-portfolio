import React from 'react'
import Card from '../UI/Card';
import './Testimonial.css';
import TestimonialCard from './TestimonialCard';
import testimonialOne from '/Users/amrutapalo/Desktop/personal-portfolio/src/images/testimonialone.jpg'

const Testimonial = () => {

    const TESTIMONIALS = [
    {
        review:
        "I rarely come across people who have deep understanding of the minutest scenarios. I was immensely impressed with her priority and time management skills in place! She has even worked at odd hours to help her team members. She would be an asset to any team and earns my highest recommendation."
        ,
        image: testimonialOne,
        name: "Rajshree Nema",
        designation: "SDE, Addverb Technolgies"
    },
    {
        review:
            "Amruta is skilled software engineer with good design and logical thinking. She will be asset to the team wherever she goes."
        ,
        image: testimonialOne,
        name: "Naman Gupta",
        designation: "Technology Lead, Addverb Technolgies"
    },
    {
        review:
            "I had the pleasure of working with Amruta at Addverb. I was impressed with her ability of getting things done quickly and perfectly, especially during unexpected and close deadlines. We together have designed and developed for multiple projects. She is a highly focused person and earns my heartfelt recommendation! "
        ,
        image: testimonialOne,
        name: "Srijan Jain",
        designation: "SDE, Addverb Technolgies"
    },
    {
        review:
            "I had the pleasure of working with Amruta at Addverb. I was impressed with her ability of getting things done quickly and perfectly, especially during unexpected and close deadlines. We together have designed and developed for multiple projects. She is a highly focused person and earns my heartfelt recommendation! "
        ,
        image: testimonialOne,
        name: "Srijan Jain",
        designation: "SDE, Addverb Technolgies"
    },
    {
        review:
            "I had the pleasure of working with Amruta at Addverb. I was impressed with her ability of getting things done quickly and perfectly, especially during unexpected and close deadlines. We together have designed and developed for multiple projects. She is a highly focused person and earns my heartfelt recommendation! "
        ,
        image: testimonialOne,
        name: "Srijan Jain",
        designation: "SDE, Addverb Technolgies"
    }

    ];

    return (
        <div className="container">
            <div className="container-wrapper">
                
                    {
                        TESTIMONIALS.map((testimony) => <Card><TestimonialCard
                            review={<q>{testimony.review}</q>}
                            image={testimony.image}
                            name={testimony.name}
                            designation={testimony.designation}
                        /> </Card>)
                    }
            </div>
        </div>
    );
}

export default Testimonial;