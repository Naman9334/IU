import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.png';
import logo2 from '../../../assets/aboutUs/middle2.png';
import logo3 from '../../../assets/aboutUs/middle3.png';

const Middle = () =>{
    return(
        <div style={{ backgroundColor: '#f8f8f8' }} className='overflow-hidden'>
    <div className={`container ${styles.contain}`}>
        <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>Transforming Ideas into Reality</p>
        <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
            At Innovator United, we specialize in crafting innovative software solutions that empower businesses. Our expertise spans various domains, allowing us to tailor our services to meet your specific needs and drive growth.
        </p>

        <div className="row">
            <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                <div className={styles.box}>
                    <img src={logo1} alt="Web Development" />
                    <p className={styles.head}>Web Development</p>
                    <p className={styles.content}>
                        We create dynamic and responsive websites that provide an exceptional user experience and effectively showcase your brand.
                    </p>
                </div>
            </div>

            <div data-aos='fade-up' className="col-md-4">
                <div className={styles.box}>
                    <img src={logo2} alt="Mobile App Development" />
                    <p className={styles.head}>Mobile App Development</p>
                    <p className={styles.content}>
                        Our mobile app solutions are designed to engage users and enhance business functionality across all platforms.
                    </p>
                </div>
            </div>

            <div data-aos='fade-left' className="col-md-4">
                <div className={styles.box}>
                    <img src={logo3} alt="UI/UX Design" />
                    <p className={styles.head}>UI/UX Design</p>
                    <p className={styles.content}>
                        We prioritize user-centered design to ensure intuitive and engaging interfaces for your software applications.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
export default Middle;