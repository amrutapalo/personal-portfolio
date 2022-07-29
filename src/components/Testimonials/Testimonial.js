import React, { useState } from 'react'
import Card from '../UI/Card';
import './Testimonial.css';
import TestimonialCard from './TestimonialCard';
import testimonialOne from '/Users/amrutapalo/Desktop/personal-portfolio/src/images/testimonialone.jpg'
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';


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
        }

    ];

    return (
        <div className="carousel" id='testimonial'>
            <div className="carousel-heading">
                <h2 className="carousel-title">
                    Testimonial
                </h2>
                <p className="carousel-subtitle">
                    What my colleagues say about me
                </p>
            </div>
            <div className="carousel-container">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        TESTIMONIALS.map((testimony) => <SwiperSlide><Card><TestimonialCard
                            review={<q>{testimony.review}</q>}
                            image={testimony.image}
                            name={testimony.name}
                            designation={testimony.designation}
                        /> </Card></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonial;