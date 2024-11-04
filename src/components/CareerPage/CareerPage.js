import React, { useState } from "react";
import './CareerPage.css';
import jobSearchImage from '../../assets/careerPage/job-search.png';
import internship from '../../assets/careerPage/internship.png';
import employee from '../../assets/careerPage/employee-benefits.png';

const CareerPage = () => {
    const [showJobMessage, setShowJobMessage] = useState(false);
    const [showBenefits, setShowBenefits] = useState(false);

    const handleJobClick = () => {
        setShowJobMessage(!showJobMessage);
    };

    const handleInternshipClick = () => {
        const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_vHezgjSFz-RxYpznPXnBIFOV0ZnVJM-tAQf6ltBKdWVR6g/viewform";
        window.open(googleFormUrl, "_blank");
    };

    const handleBenefitsClick = () => {
        setShowBenefits(!showBenefits);
    };

    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className='career-page overflow-hidden'>
            <div className="container contain">
                <p data-aos='fade-down-right' data-aos-offset="170" className="mainHead">Join Our Team</p>
                <p data-aos='fade-up-left' data-aos-offset="170" className="mainContent">
                    At Innovator United, we're not just building software – we're creating solutions that make a difference. Explore our career opportunities and become part of a team that values innovation, growth, and collaboration.
                </p>

                <div className="row">
                    {/* Job Openings Section */}
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4 col-sm-12 mb-4">
                        <div className="box" onClick={handleJobClick} style={{ position: 'relative' }}>
                            <img src={jobSearchImage} alt="Job Openings" className="image" />
                            <p className="head">Job Openings</p>
                            {showJobMessage ? (
                                <p className="content">We're not hiring today, but tomorrow could bring new possibilities!</p>
                            ) : (
                                <p className="content">
                                    We’re constantly seeking talented individuals who are passionate about technology and ready to make an impact. Explore our latest job openings and join us on this journey.
                                </p>
                            )}
                            <span className="tooltip">Click to see job opening details!</span>
                        </div>
                    </div>

                    {/* Internship Programs Section */}
                    <div data-aos='fade-up' className="col-md-4 col-sm-12 mb-4">
                        <div className="box" onClick={handleInternshipClick} style={{ position: 'relative' }}>
                            <img src={internship} alt="Internship Programs" className="image" />
                            <p className="head">Internship Programs</p>
                            <p className="content">
                                Kickstart your career with hands-on experience through our structured internship programs. Work on real-world projects and gain invaluable industry insights.
                            </p>
                            <span className="tooltip">Click to apply for internship programs!</span>
                        </div>
                    </div>

                    {/* Employee Benefits Section */}
                    <div data-aos='fade-left' className="col-md-4 col-sm-12 mb-4">
                        <div className="box" onClick={handleBenefitsClick} style={{ position: 'relative' }}>
                            <img src={employee} alt="Benefits" className="image" />
                            <p className="head">Employee Benefits</p>
                            {showBenefits ? (
                                <ul className="content">
                                    <li>Flexible Work Hours</li>
                                    <li>Remote Work Options</li>
                                    <li>Performance Bonuses</li>
                                    <li>Professional Development Programs</li>
                                </ul>
                            ) : (
                                <p className="content">
                                    We believe in supporting our team with benefits that foster work-life balance, personal growth, and overall well-being. Discover the perks of working with us.
                                </p>
                            )}
                            <span className="tooltip">Click to learn more about employee benefits!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CareerPage;
