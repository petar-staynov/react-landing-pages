import React, {useEffect, useState} from 'react'


const FreelancerNavbar = () => {
    const [scrollPosition, setSrollPosition] = useState(0);

    // HANDLE SHRINK ON SCROLLDOWN
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    const isShrink = () => {
        return scrollPosition !== 0 ? 'navbar-shrink' : '';
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //////////////////////////////////

    return (
        <nav className={`navbar navbar-expand-lg bg-secondary text-uppercase fixed-top mainNav ${isShrink()}`}>
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#">Freelancer</a>
                <button
                    className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                               href="#">Portfolio</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#">About</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                               href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default FreelancerNavbar
