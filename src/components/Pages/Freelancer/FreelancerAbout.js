import React, {forwardRef} from 'react';

const FreelancerAbout = forwardRef((props, ref) => {
    return (
        <section className="page-section bg-primary text-white" ref={ref}>
            <h2 className="page-section-heading text-center text-uppercase">About</h2>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false"
                         data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512" data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                </div>
                <div className="divider-custom-line"></div>
            </div>

            <p className="lead text-center">
                This is a recreation of the free Freelancer theme by StartBootstrap,
                made using ReactJS, Hooks and SCSS.
            </p>
            <div className='row'>
                <div className="col-sm-6 text-center mt-4">
                    <a className="btn btn-xl btn-outline-light about-button"
                       href="https://startbootstrap.com/themes/freelancer/"
                       target="_blank" rel="noopener noreferrer">
                        <svg className="svg-inline--fa fa-download fa-w-16 mr-2" aria-hidden="true" focusable="false"
                             data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor"
                                  d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                        </svg>
                        Original
                    </a>
                </div>
                <div className="col-sm-6 text-center mt-4">
                    <a className="btn btn-xl btn-outline-light about-button"
                       href="https://github.com/petar-staynov/react-landing-pages"
                       target="_blank" rel="noopener noreferrer">
                        <svg className="svg-inline--fa fa-download fa-w-16 mr-2" aria-hidden="true" focusable="false"
                             data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor"
                                  d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                        </svg>
                        ReactJS Version
                    </a>
                </div>
            </div>
        </section>
    )
});

export default FreelancerAbout;