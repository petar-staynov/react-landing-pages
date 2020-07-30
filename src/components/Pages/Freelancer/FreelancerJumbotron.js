import React from 'react';
import FreelancerSectionHeading from "./FreelancerSectionHeading";

const FreelancerJumbotron = (props) => {
    return (
        <header className="jumbotron bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="jumbotron-avatar mb-5" src="./assets/avataaars.svg" alt=""/>

                <FreelancerSectionHeading title='John Smith' type='heading' color='light'/>

                <p className="jumbotron-subheading font-weight-light mb-0">
                    Programmer - Web Developed - Web Designer
                </p>
            </div>
        </header>
    )
};

export default FreelancerJumbotron;