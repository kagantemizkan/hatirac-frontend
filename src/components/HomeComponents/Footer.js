import React from 'react'
import Lock from '../../images/lock.svg'

const Footer = () => {
    return (
        <div style={{backgroundColor: 'black'}} className='container-fluid d-flex justify-content-center align-items-center p-3'>
            <h1 className='text-white m-3'>HATIRAÇ <img className='mt-2 mb-4' src={Lock} alt='Lock' width={50} /></h1>
            <ul className="navbar-nav">
                <li className='m-2'>
                    <a className='text-muted' href="/upload">Dosya Yükle ve Kilitle</a>
                </li>
                <li className='m-2'>
                    <a className='text-muted' href="/show">Göster/Bul</a>
                </li>
                <li className='m-2'>
                    <a className='text-muted' href="https://wa.me/905379239309">Bizimle İletişime Geç!</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
