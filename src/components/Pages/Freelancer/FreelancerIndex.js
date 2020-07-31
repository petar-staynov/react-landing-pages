import React from 'react';
import './Freelancer.scss'

import FreelancerNavbar from "./FreelancerNavbar";
import FreelancerJumbotron from "./FreelancerJumbotron";
import FreelancerPortfolio from "./FreelancerPortfolio";
import FreelancerFooter from "./FreelancerFooter";
import FreelancerContactForm from "./FreelancerContactForm";

const FreelancerIndex = (props) => {
    return (
        <>
            <FreelancerNavbar/>
            <FreelancerJumbotron/>
            <FreelancerPortfolio/>
            <FreelancerContactForm/>
            <FreelancerFooter/>
        </>
    )
};

export default FreelancerIndex;