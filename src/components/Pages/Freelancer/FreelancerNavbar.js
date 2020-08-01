import React, {useEffect, useState} from 'react'


const FreelancerNavbar = ({refs}) => {
    /*        HANDLE NAVBAR LINKS SCROLLING          */
    const {portfolioRef, contactFormRef, aboutRef} = refs;

    const scrollToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    }

    const handleScrollToPortfolio = () => {
        window.scrollTo({
            behavior: "smooth",
            top: portfolioRef.current ? portfolioRef.current.offsetTop : 0,
        });
    }

    const handleScrollToAbout = () => {
        window.scrollTo({
            behavior: "smooth",
            top: aboutRef.current ? aboutRef.current.offsetTop : 0,
        });
    }

    const handleScrollToContact = () => {
        window.scrollTo({
            behavior: "smooth",
            top: contactFormRef.current ? contactFormRef.current.offsetTop : 0,
        });
    }
    /* ********************************************************* */


    /*        HANDLE NAVBAR SHRINKING ON SCROLL          */
    const [barIsShrinked, setBarIsShrinked] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;

        if (!barIsShrinked && position !== 0) {
            setBarIsShrinked(true);
        }
        if (position === 0) {
            setBarIsShrinked(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    /* ********************************************************* */



    return (
        <nav
            className={`navbar navbar-expand-lg bg-secondary text-uppercase fixed-top mainNav ${barIsShrinked ? 'navbar-shrink' : ''}`}>
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" onClick={scrollToTop}>Freelancer</a>
                <button
                    className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                               onClick={handleScrollToPortfolio}>Portfolio</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            onClick={handleScrollToAbout}>About</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                               onClick={handleScrollToContact}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default FreelancerNavbar
