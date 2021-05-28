import React, { Component } from 'react'
import {
    recipeProject,
    covidDonationProject,
    comunityChestProject,
    closetProject,



} from '../Images/index';
import styles from '../Style/project.module.css';
export class Images extends Component {


    render() {


        const projects = [
            {

                projectImage: comunityChestProject,
                projectName: 'Community Chest',
                projectLink: "https://community-chest134.herokuapp.com/",
                githubLink: "https://github.com/alsharifnahas/community-chest"

            },
            {

                projectImage: closetProject,
                projectName: "What's in The Closet",
                projectLink: "https://promethium.herokuapp.com/.",
                githubLink: "https://github.com/alsharifnahas/What-is-in-the-Closet"

            },
            {
                projectImage: recipeProject,
                projectName: 'Recipe Search Application',
                projectLink: "https://obscure-lowlands-13606.herokuapp.com/",
                githubLink: "https://github.com/alsharifnahas/recipesapp"


            },
            {

                projectImage: covidDonationProject,
                projectName: 'Covid Target Donation',
                projectLink: "https://alsharifnahas.github.io/covid-targeted-donations/",
                githubLink: "https://github.com/alsharifnahas/covid-targeted-donations"

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
                    <div className={styles.githubLink} onClick={() => { window.open(project.githubLink) }}> <i className="fa fa-angle-double-right"></i> Github Link</div>

                </div>

            ))

        )
    }
}

export default Images
