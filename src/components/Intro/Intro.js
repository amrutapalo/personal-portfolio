import React from 'react'
import './Intro.css'
import avatar from '/Users/amrutapalo/Desktop/personal-portfolio/src/images/amrutpalo-profile.JPG';
import Resume from '/Users/amrutapalo/Desktop/personal-portfolio/src/documents/Resume-amruta.pdf';

const Intro = () => {
    return (
        <div className="i" id='home'>
            {/* <div className="i-bg">
            </div> */}
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Amruta Palo</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Content Creater</div>
                            <div className="i-title-item">Videographer</div>
                            <div className="i-title-item">Photographer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I develop experiences that makes lives easier through Web. I work with React, Javascript, HTML 5 and CSS3.
                    </div>
                    <a href={Resume} download="Resume-AMRUTA-PALO" target='_blank'>
                        <button className="download-resume-btn">
                            <i className="fa fa-download"></i> DOWNLOAD RESUME
                        </button>
                    </a>

                </div>
            </div>
            <div className="i-right">
                <div className="i-right-wrapper">
                    {/* <div className="i-img bg"></div> */}
                    <img src={avatar} alt="" className='i-img' />
                </div>
            </div>
        </div>
    )
}

export default Intro