import React, { useEffect } from "react";
import styles from './IndividualService.module.css';
import { useLocation } from "react-router-dom";
import data from './data';
import timer from '../../assets/individualService/uptime.png';
import trend from '../../assets/individualService/trend.png';
import expert from '../../assets/individualService/expert.png';

const IndividualService = () =>{
    const { search } = useLocation(); 
    const id = parseInt(new URLSearchParams(search).get('id'));
    let service = data.filter(x=>{
        return x.id === id;
    })[0];

    useEffect(() => {
        window.scrollTo(0, 0)
      })

    return(
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p data-aos='slide-right'  className={styles.heading}>{ service.heading }</p>
                <p data-aos='slide-left' className={styles.heading_content}>{ service.content }</p>
            
                <div className="row">
                    <div className="col-md-4" data-aos='fade-right' data-aos-offset="150">
                        <img src={timer} alt="" className={styles.img}/>
                        <p className={styles.logo_head}>Speed Optimization</p>
                        <p className={styles.heading_content}> Enhance your website's performance with our speed optimization services. We focus on reducing load times and improving user experience, ensuring your visitors have a seamless browsing experience.
                        </p>
                    </div>

                    <div className="col-md-4" data-aos='fade' data-aos-offset="150">
                        <img src={trend} alt="" className={styles.img} />
                        <p className={styles.logo_head}>Marketing Strategy</p>
                        <p className={styles.heading_content}> Develop a robust marketing strategy that drives growth and engagement. Our tailored approaches focus on scaling your brand's reach and optimizing your campaigns for maximum impact.</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset="150">
                        <img src={expert} alt="" className={styles.img}/>
                        <p className={styles.logo_head}>Expert Team</p>
                        <p className={styles.heading_content}>Our team of experts is dedicated to delivering exceptional results. With the right blend of skills and experience, we can efficiently tackle projects and ensure that your objectives are met on time and within budget.</p>
                    </div>
                </div>

                {
                    service.contents.map((x, idx) =>(
                        idx%2 === 0 ?
                        <div key={idx} className="row" style={{marginTop: '112px'}}>
                            <div data-aos='slide-right' data-aos-offset="150" className="col-md-6">
                                <img src={x.img} alt="" className={styles.contentImg}/>
                            </div>
                            <div data-aos='slide-left' data-aos-offset="150" className="col-md-6">
                                <p className={`${styles.heading} ${styles.subHead}`}>{ x.heading }</p>
                                <p className={`${styles.heading_content} ${styles.justify}`}>{ x.content }</p>
                            </div>
                        </div>
                        :
                        <div key={idx} className="row" style={{marginTop: '112px'}}>
                            <div className="col-md-6" data-aos='slide-right' data-aos-offset="150">
                                <p className={`${styles.heading} ${styles.subHead}`}>{ x.heading }</p>
                                <p className={`${styles.heading_content} ${styles.justify}`}>{ x.content }</p>
                            </div>
                            <div className="col-md-6" data-aos='slide-left' data-aos-offset="150">
                                <img src={x.img} alt="" className={styles.contentImg}/>
                            </div>
                        </div>
                    ))
                }
            
            </div>
        </>
    )
}
export default IndividualService;