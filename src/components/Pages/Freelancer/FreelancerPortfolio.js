import React, {forwardRef } from 'react';
import FreelancerSectionHeading from "./FreelancerSectionHeading";
import FreelancerPortfolioContainer from "./FreelancerPortfolioContainer";

const FreelancerPortfolio = forwardRef((props, ref) => {
    return (
        <section className="page-section portfolio" ref={ref}>
            <div className="container">
                <FreelancerSectionHeading title='Portfolio' type='section'/>
                <FreelancerPortfolioContainer/>
            </div>
        </section>
    )
});

export default FreelancerPortfolio;