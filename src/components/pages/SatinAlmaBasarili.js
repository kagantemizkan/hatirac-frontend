import React from 'react'
import Header from '../HomeComponents/Header'

const SatinAlmaBasarili = () => {
    return (
        <>
            <Header />
            <div className='container p-5 text-center'>
                <i class="fa-regular fa-circle-check fa-10x p-3" style={{ color: '#13b42e' }}></i>
                <h2>Siparişiniz Oluşturuldu.</h2>
                <a className="nav-link" href="https://wa.me/905379239309">Bizimle İletişime Geç!</a>
            </div>
        </>
    )
}

export default SatinAlmaBasarili
