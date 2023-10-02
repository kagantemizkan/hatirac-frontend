import React from 'react'
import Lock from '../../images/lock.svg'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black' }} className='container-fluid p-4'>
            <div className='container'>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-md-3'>
                        <h1 className='text-white m-3'>HATIRAÇ <img className='mt-2 mb-4' src={Lock} alt='Lock' width={70} /></h1>
                    </div>
                    <div className='col-md-3'>
                        <ul className="navbar-nav">
                            <li className="m-2">
                                <a className="text-muted" href="https://hatirac.com/products">Ürünler</a>
                            </li>
                            <li className="m-2">
                                <a className="text-muted" href="https://hatirac.com/free">Ücretsiz Versiyon</a>
                            </li>
                            <li className="m-2">
                                <a className="text-muted" href="https://hatirac.com/show">Hatıraç Ara/Bul</a>
                            </li>
                            <li className="m-2">
                                <a className="text-muted" href="https://wa.me/905379239309">Bizimle İletişime Geç!</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <ul className="navbar-nav">
                            <li className='m-2'>
                                <a className='text-muted' href="https://hatirac.com/gizlilik-politikasi">Gizlilik Politikası</a>
                            </li>
                            <li className='m-2'>
                                <a className='text-muted' href="https://hatirac.com/hizmet-sartlari">Hizmet Şartları</a>
                            </li>
                            <li className='m-2'>
                                <a className='text-muted' href="https://hatirac.com/kargo-politikasi">Kargo Politikası</a>
                            </li>
                            <li className='m-2'>
                                <a className='text-muted' href="https://hatirac.com/kvkk-politikasi">KVKK Politikası</a>
                            </li>
                            <li className='m-2'>
                                <a className='text-muted' href="https://hatirac.com/para-iade">İade Politikası</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <ul className="navbar-nav text-muted">
                            <li className='m-2'>
                                E-posta: bilgi@hatirac.com
                            </li>
                            <li className='m-2'>
                                Tel: 0537 923 9309
                            </li>
                            <li className='m-2'>
                                2023 Hatıraç. Tüm hakları saklıdır.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
