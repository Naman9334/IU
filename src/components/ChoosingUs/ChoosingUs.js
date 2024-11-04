import React from "react";
import styles from './ChoosingUs.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import comfort from '../../assets/home/comfort.png';

const ChoosingUs = () =>{
    return(
        <div style={{backgroundColor: '#fff1e5'}}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Top three the reason why you should choosing us.</p>
                <p data-aos='slide-left' className={styles.sub_text}>At Innovator United, we strive to provide top-quality solutions that bring value to your business. Here’s why we stand out:</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4">
                        <img src={experience} alt="experience"/>
                        <p className={styles.logo_head}>Experience</p>
                        <p className={styles.logo_text}>Our team brings years of industry knowledge and hands-on experience in software development, ensuring we deliver the best solutions tailored to your needs.</p>
                    </div>

                    <div data-aos='fade' className="col-md-4">
                        <img src={communication} alt="experience"/>
                        <p className={styles.logo_head}>Easy Communication</p>
                        <p className={styles.logo_text}>We prioritize clear and effective communication, making collaboration smooth and ensuring that your vision is at the heart of every project.</p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <img src={comfort} alt="experience"/>
                        <p className={styles.logo_head}>Comfort and Reliability</p>
                        <p className={styles.logo_text}>Our services are designed to offer you peace of mind, knowing that your projects are in capable hands. We focus on delivering reliable, high-performing solutions every time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosingUs;