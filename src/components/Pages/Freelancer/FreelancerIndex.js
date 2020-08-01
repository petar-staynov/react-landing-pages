import React, {useRef} from 'react';
import './Freelancer.scss'

import FreelancerNavbar from "./FreelancerNavbar";
import FreelancerJumbotron from "./FreelancerJumbotron";
import FreelancerPortfolio from "./FreelancerPortfolio";
import FreelancerFooter from "./FreelancerFooter";
import FreelancerContactForm from "./FreelancerContactForm";
import FreelancerAbout from "./FreelancerAbout";

const FreelancerIndex = (props) => {
    const portfolioRef = useRef(null);
    const contactFormRef = useRef(null);
    const aboutRef = useRef(null);

    const refs = {
        portfolioRef: portfolioRef,
        contactFormRef: contactFormRef,
        aboutRef: aboutRef
    };

    return (
        <>
            <FreelancerNavbar refs={refs}/>
            <FreelancerJumbotron/>
            <FreelancerPortfolio ref={portfolioRef}/>;
            <FreelancerAbout ref={aboutRef}/>
            <FreelancerContactForm ref={contactFormRef}/>
            <FreelancerFooter/>
        </>
    )
};

export default FreelancerIndex;