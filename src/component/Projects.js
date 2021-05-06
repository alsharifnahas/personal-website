import React, { Component } from 'react'
import Images from './Images'
import styles from '../Style/project.module.css'

class Projects extends Component {

    render() {
        return (
            <div className={styles.projectContainer} >
                <span className={styles.projectTitle}><i id={styles.icon} className="fa fa-angle-double-right"></i>Scroll Down For Projects</span>
                <span className={styles.word}><i id={styles.icon} className="fa fa-angle-double-right"></i>Click on The Project to View The Deployed Site</span>
                <Images />

            </div>
        )
    }
}

export default Projects
