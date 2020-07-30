import React, {useState} from 'react';
import FreelancerSectionHeading from "./FreelancerSectionHeading";

const FreelancerPortfolioCard = ({data}) => {
    const {id, imgUrl, text, title} = data;

    const [modalData, setModalData] = useState({});

    const handleOnClick = () => {
        modalData === null
            ? setModalData(data)
            : setModalData(null);

        console.log(modalData);
    };


    return (
        <>
            {
                modalData ?
                    <div className="modal">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <button type="button" className="close" onClick={handleOnClick}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-10'>
                                        <div className="modal-body">
                                            <FreelancerSectionHeading title={title} type={'section'} color={'dark'}/>
                                            <img className="img-fluid rounded mb-5" src={`./assets/${imgUrl}`} alt=""/>
                                            <p className='mb-5'>{text}</p>
                                            <div style={{textAlign: 'center'}} onClick={handleOnClick}>
                                                <button className="btn btn-primary" data-dismiss="modal">
                                                    Close Window
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }

            <div className="col-md-6 col-lg-4 mb-5 hovercard" onClick={handleOnClick}>
                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                            <svg className="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true"
                                 focusable="false" data-prefix="fas" data-icon="plus" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                <path fill="currentColor"
                                      d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                </path>
                            </svg>
                        </div>
                        <img className="img-fluid" src={`./assets/${imgUrl}`} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreelancerPortfolioCard;