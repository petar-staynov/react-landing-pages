import React from 'react';
import FreelancerSectionHeading from "./FreelancerSectionHeading";
import FreelancerPortfolioContainer from "./FreelancerPortfolioContainer";

const FreelancerPortfolio = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <FreelancerSectionHeading title='Portfolio' type='section'/>
                <FreelancerPortfolioContainer/>
            </div>
        </section>
    )
};

export default FreelancerPortfolio;