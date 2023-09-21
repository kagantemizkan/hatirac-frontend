/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../HomeComponents/Header';
import '../../styles/Products/freeVersion.scss'
import Footer from '../HomeComponents/Footer';

const FreeVersion = () => {
    return (
        <>
            <Header />
            <div className='container justify-content-center py-5 mb-4'>
                <h2 className='text-center font-weight-bold h1'>Hatıraç Yazılım</h2>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-sm-6">
                            <div className="pricingTable">
                                <div className="pricing_heading">
                                    <h3 className="title">Ödenecek Tutar</h3>
                                    <span className="value">
                                        Ücretsiz
                                        <span className="month"><i class="fa-solid fa-meteor fa-2x"></i></span>
                                    </span>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><i class="fa-regular fa-circle-xmark" style={{ color: 'red' }}></i> Sadece 1 adet Dosya Yükleme Kapasitesi</li>
                                        <li><i class="fa-regular fa-circle-xmark" style={{ color: 'red' }}></i> En fazla 1 ay sonrasına kilitleyebilme</li>
                                        <li><i class="fa-regular fa-circle-xmark" style={{ color: 'red' }}></i> 10mb dosya boyutu sınırı</li>
                                        <li><i class="fa-regular fa-circle-xmark" style={{ color: 'red' }}></i> Sadece Fotoğraf Dosyası</li>
                                        <li><i class="fa-regular fa-circle-check" style={{ color: '#13b42e' }}></i> Dosyaları Güvenli Koruma</li>
                                    </ul>
                                    <div className="link">
                                        <a href="https://hatirac.com/upload">Ücretsiz Versiyon ile Devam Et</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-6">
                            <div className="pricingTable">
                                <div className="pricing_heading">
                                    <h3 className="title">Ödenecek Tutar</h3>
                                    <span className="value">
                                        59 TL
                                        <span className="month">Tek Seferlik Öde <i class="fa-solid fa-meteor fa-2x"></i></span>
                                    </span>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><i class="fa-regular fa-circle-check" style={{ color: '#13b42e' }}></i> Sınırsız Dosya Yükleme Kapasitesi</li>
                                        <li><i class="fa-regular fa-circle-check" style={{ color: '#13b42e' }}></i> İstediğin tarihe kilitleyebilme</li>
                                        <li><i class="fa-regular fa-circle-check" style={{ color: '#13b42e' }}></i> Dosya boyutu sınırı yok</li>
                                        <li><i class="fa-regular fa-circle-check" style={{ color: '#13b42e' }}></i> Fotoğraf, Video, Ses ve Metin Dosyası</li>
                                        <li><i class="fa-regular fa-circle-check" style={{ color: '#13b42e' }}></i> Dosyaları Güvenli Koruma</li>
                                    </ul>
                                    <div className="link">
                                        <a href="https://hatirac.com/upload-paid"><i>Ücretli</i> Versiyon ile Devam Et</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FreeVersion
