import React from 'react';
import FreelancerPortfolioCard from "./FreelancerPortfolioCard";
const PORTFOLIO_DATA = {
    1: {
        id: 1,
        imgUrl: `cabin.png`,
        title: `Cabin`,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`,
    },
    2: {
        id: 2,
        imgUrl: `cake.png`,
        title: `Cake`,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`,
    },
    3: {
        id: 3,
        imgUrl: `circus.png`,
        title: `Circus`,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`,
    },
    4: {
        id: 4,
        imgUrl: `game.png`,
        title: `Gaming`,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`,
    },
    5: {
        id: 5,
        imgUrl: `safe.png`,
        title: `Vault`,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`,
    },
    6: {
        id: 6,
        imgUrl: `submarine.png`,
        title: `Submarine`,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`,
    },
};

const FreelancerPortfolioContainer = (props) => {
    const data = PORTFOLIO_DATA;

    return (
        <div className='row'>
            {
                Object.keys(data).map(k => {
                    const obj = data[k];
                    return <FreelancerPortfolioCard key={k} data={obj}/>
                })
            }
        </div>
    )
}

export default FreelancerPortfolioContainer;