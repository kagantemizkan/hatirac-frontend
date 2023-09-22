/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Slider1 from '../../images/Slider/1.png'
import Slider3 from '../../images/Slider/3.png'
import OrtaSlider1 from '../../images/Slider/Orta/1.png'
import OrtaSlider3 from '../../images/Slider/Orta/3.png'
import KucukSlider1 from '../../images/Slider/Kucuk/1.png'
import KucukSlider3 from '../../images/Slider/Kucuk/3.png'
import '../../styles/HomeStyles/slider.scss'

const Slider = () => {
    return (
        <>
            <div style={{ backgroundColor: '#dfeaf3' }} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Slider1} alt="Büyük Resim" className="buyuk-resim" />
                        <img src={OrtaSlider1} alt="Orta Resim" className="orta-resim" />
                        <img src={KucukSlider1} alt="Küçük Resim" className="kucuk-resim" />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider3} alt="Büyük Resim" className="buyuk-resim" />
                        <img src={OrtaSlider3} alt="Orta Resim" className="orta-resim" />
                        <img src={KucukSlider3} alt="Küçük Resim" className="kucuk-resim" />
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
