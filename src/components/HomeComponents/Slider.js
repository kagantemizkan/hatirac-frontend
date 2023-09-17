/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Lock from '../../images/lock.svg'

const Slider = () => {
    return (
        <>
            <div style={{ backgroundColor: '#dfeaf3' }} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div style={{minHeight: '300px'}} className='container p-5 d-flex justify-content-around align-items-center'>
                            <div className='col-md-6 text-center'>
                                <h2 style={{ fontSize: '50px' }}>ZAMANIN ÖTESİNDE BİR ARMAĞAN...</h2>
                            </div>
                            <div className='col-md-6 text-center'>
                                <img src={Lock} alt='Lock' width={120} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div style={{minHeight: '300px'}} className='container p-5 d-flex justify-content-around align-items-center'>
                            <div className='col-md-6 text-center'>
                                <img src={Lock} alt='Lock' width={120} />
                            </div>
                            <div className='col-md-6 text-center'>
                                <h2 style={{ fontSize: '45px' }}>ANILARDAN DAHA ANLAMLI NE OLABİLİR?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div style={{minHeight: '300px'}} className='container p-5 d-flex justify-content-around align-items-center'>
                            <div className='col-md-6 text-center'>
                                <h2 style={{ fontSize: '50px' }}>Ürünlerimizi İncelemek için --&gt;</h2>
                            </div>
                            <div className='col-md-6 text-center'>
                                <a href='#' className='btn btn-lg btn-primary'>Ürünlerimiz</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Slider
