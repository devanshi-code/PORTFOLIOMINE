import React from 'react';
import Footer from './Footer';
import './home.css';
import Project from './Project.jsx';

const Projects = () => {
    return (
        <>
            <section id="portfolio" style={{ marginTop: "80px" }}>
                <h1 className="section-heading text-center mb-0">
                    <span style={{ fontWeight: "300" }} >Projects</span>
                </h1>
                <hr style={{ width: "60%" }} />
                <div className="projectbg">
                    <div className="portfolio-container ">
                        <Project project="High_Five" projecthref="https://github.com/devanshi-code/high-five" />

                        <Project project="Sambhav" projecthref="https://github.com/devanshi-code/Hack-spirit-Sambhav-HTM" />

                        <Project project="CALCULATOR" projecthref="https://github.com/devanshi-code/CALCULATOR-APP" />
                    </div>
                </div>
                <div className="projectbg">
                    <div className="portfolio-container ">
                        <Project project="Visiting-Card" projecthref=" https://github.com/devanshi-code/Visiting-Card" />

                        <Project project="DSA" projecthref="https://github.com/devanshi-code/New-folder" />

                        <Project project="Analogue-Clock" projecthref="https://github.com/devanshi-code/analogue-clock" />



                    </div>
                </div>




            </section>

            <Footer />
        </>
    )
}

export default Projects;