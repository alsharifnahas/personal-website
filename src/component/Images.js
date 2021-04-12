import React, { Component } from 'react'
import {
    recipeProject,
    wethearProject,
    comunityChestProject,
    closetProject,



} from '../Images/index';
import styles from '../Style/project.module.css';
export class Images extends Component {


    render() {


        const projects = [
            {
                projectImage: recipeProject,
                projectName: 'Recipe Web Application',
                projectLink: "https://obscure-lowlands-13606.herokuapp.com/",

            },
            {

                projectImage: wethearProject,
                projectName: '5-Day Weather Forecast',
                projectLink: "https://alsharifnahas.github.io/Weather-Forecast/.",

            },
            {

                projectImage: comunityChestProject,
                projectName: 'Community Chest',
                projectLink: "community-chest134.herokuapp.com/",

            },
            {

                projectImage: closetProject,
                projectName: 'View Closet',
                projectLink: "https://promethium.herokuapp.com/.",

            },



        ]


        return (
            projects.map((project) => (
                <div className={styles.projectContent} >
                    <div className={styles.projectName}>
                        <i className="fa fa-angle-double-right"></i> {project.projectName}
                    </div>

                    <img alt="project" className={styles.projectImage} src={project.projectImage}
                        onMouseOver={(e) => {

                            e.target.style.cursor = 'pointer';
                            e.target.style.filter = 'brightness(90%)';




                        }}
                        onMouseOut={(e) => {
                            e.target.style.opacity = '1';
                            e.target.style.cursor = 'default';
                            e.target.style.filter = 'grayscale(100%)'

                        }}
                        onClick={() => { window.open(project.projectLink) }}
                    />


                </div>

            ))

        )
    }
}

export default Images
