import React from 'react';
import './Freelancer.scss'

import FreelancerNavbar from "./FreelancerNavbar";
import FreelancerJumbotron from "./FreelancerJumbotron";
import FreelancerPortfolio from "./FreelancerPortfolio";

const FreelancerIndex = (props) => {
    return (
        <>
            <FreelancerNavbar/>
            <FreelancerJumbotron/>
            <FreelancerPortfolio/>
        </>
    )
};

export default FreelancerIndex;