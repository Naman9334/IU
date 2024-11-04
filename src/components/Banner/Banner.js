import React from "react";
import styles from './Banner.module.css';

const Banner = () => {

  return (
    <>
        <div className={styles.imgbox}>
            <div className={`${styles.center} overflow-hidden`}>
                <p data-aos='fade-down' className={styles.text}>Solving Real-World Challenges with <span style={{ color: '#0a64ff', fontWeight: 'bold' }}>Innovative</span> Technology</p>
                {/* <button data-aos='fade-up' className={`btn custom_btn ${styles.btn}`}>LET&apos;S TALK</button> */}
            </div>
            
        </div>
        
    </>
  );
};

export default Banner;
