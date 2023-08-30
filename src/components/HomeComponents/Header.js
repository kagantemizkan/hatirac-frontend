/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LogoText from '../../images/logoText.png'
import '../../styles/HomeStyles/header.scss'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-lightBlue">
            <div className='container'>
                <a className="navbar-brand ml-4" href="/">
                    <img src={LogoText} width="120" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-4 mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link ml-4" href="/upload">Dosya Yükle ve Kilitle</a>
                        </li>
                        <li className="nav-item ml-4 active">
                            <a className="nav-link" href="/show">Göster/Bul</a>
                        </li>
                        <li className="nav-item ml-4 active">
                            <a className="nav-link" href="https://wa.me/905379239309">Bizimle İletişime Geç!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
