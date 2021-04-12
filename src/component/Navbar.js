import React, { Component } from 'react'
import styles from '../Style/nav-bar.module.css';
import resume from '../assets/files/Alsharif-Nahas.pdf'
export class Navbar extends Component {
    render() {
        return (
            <div className={styles.sideContainer}>
                <div className={styles.nameContainer}>

                    <span className={styles.name}><i id={styles.icon} className="fa fa-angle-double-right"></i>ALSHARIF EID NAHAS</span>
                </div>
                <div className={styles.aboutContainer}>
                    <p className={styles.about}> I am a person who really admires working with a team who are trying to make
                    a difference. Whether for themselves, other individuals, or the community.
                    I believe that a person can be a better version of himself/herself everyday.
                    I will never stop striving to teach myself, or learn from other individuals,
                    new skills in order to reach my goals. My goal is to create simple web applications that can help people with their day-to-day needs. Using technology to solve a problem or to reach a
                    certain goal is something that I am very passionate about. </p>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.contactTitleContainer}>
                        <span><i id={styles.icon} className="fa fa-angle-double-right"></i>WORK WITH ME</span>
                    </div>
                    <div className={styles.contactInformationContainer}>
                        <p>+1(347)241-4925</p>
                        <p>alsharifeid@gmail.com</p>
                        <p>Based in Brooklyn, New York</p>
                    </div>
                </div>

                <div className={styles.resumeContainer}>
                    <span onMouseOver={(e) => { e.target.style.cursor = "pointer" }} onClick={() => { window.open(resume) }}><i id={styles.icon} className="fa fa-angle-double-right"></i>RESUME</span>
                </div>
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsChildContainer}>
                        <span className={styles.skillsTitle}><i id={styles.icon} className="fa fa-angle-double-right"></i>LANGUAGES FAMILIAR WITH</span>
                        <span className={styles.skill}>JavaScript</span>
                        <span className={styles.skill}>TypeScript</span>
                        <span className={styles.skill}>HTML</span>
                        <span className={styles.skill}>CSS</span>
                        <span className={styles.skill}>Java</span>
                    </div>
                    <div className={styles.skillsChildContainer}>
                        <span className={styles.skillsTitle}><i id={styles.icon} className="fa fa-angle-double-right"></i>FRAMEWORKS FAMILIAR WITH</span>
                        <span className={styles.skill}>React JS</span>
                        <span className={styles.skill}>Angular</span>
                        <span className={styles.skill}>Bootstrap</span>
                    </div>
                </div>
                <div className={styles.socialMediaContainer}>
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/alsharif-eid-nahas-628818196/"
                        className={styles.socialLinks} target="_blank">LinkedIn</a>
                    <a rel="noopener noreferrer" href="https://github.com/alsharifnahas" className={styles.socialLinks} target="_blank">Github</a>
                </div>
            </div>


        )
    }
}

export default Navbar
