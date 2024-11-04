import React from "react";
import styles from './Real.module.css';
import improveImg from '../../assets/home/innovation.gif';

const Real = () =>{
    return(
        <div className="mb-5 overflow-hidden">
            <div className="row g-0">
                <div className={`col-md-6 ${styles.imgDiv}`}>
                    <img data-aos='slide-right' data-aos-offset="150" src={improveImg} alt="" className={styles.img}/>
                </div>
                <div className="col-md-6">
                    <div className={styles.text}>
                        <p data-aos='slide-right' data-aos-offset="150"  className={styles.heading}><b>INNOVATION</b></p>
                        <p data-aos='slide-left' data-aos-offset="150" className={styles.subHeading}>Empowering Businesses with Tailored Solutions</p>
                        <p data-aos='zoom-in' data-aos-offset="150" className={styles.content}> We believe in creating software solutions that not only solve challenges but also help businesses grow and evolve. From tailored applications to seamless technology integrations, our goal is to equip teams with the right tools to succeed in a fast-paced digital world. With an emphasis on performance, scalability, and user experience, we ensure that every solution  we deliver empowers businesses to reach their full potential.</p>
                        <div data-aos='zoom-in' style={{textAlign:'left'}}>
                            {/* <button className={`btn custom_btn ${styles.btn}`}>LET&apos;S TALK</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Real;