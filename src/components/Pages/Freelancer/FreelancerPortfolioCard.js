import React, {useState} from 'react';
import FreelancerSectionHeading from "./FreelancerSectionHeading";

const FreelancerPortfolioCard = ({data}) => {
    const {id, imgUrl, text, title} = data;

    const [modalData, setModalData] = useState(null);

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
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <img className="img-fluid" src={`./assets/${imgUrl}`} alt=""/>
                        <p className={null}>{title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreelancerPortfolioCard;