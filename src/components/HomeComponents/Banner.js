/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Hatirac1 from '../../images/hatirac1.png'
import Hatirac2 from '../../images/hatirac2.png'
import Hatirac3 from '../../images/hatirac3.png'
import Hatirac4 from '../../images/hatirac4.png'
import '../../styles/HomeStyles/banner.scss'

const Banner = () => {
    return (
        <div className='container-fluid text-center bg-sari'>
            <div className='row'>
                <div className='col-md-6  text-left'>
                    <img src={Hatirac1} alt='Hatıraç' width={'100%'} />
                </div>
                <div className='col-md-6  bannerText'>
                    <h1>SEVDİĞİNİZE VERECEĞİNİZ, ZAMANIN ÖTESİNDE BİR ARMAĞAN...</h1>
                </div>
                <div className='col-md-6  bannerText'>
                    <h1>HATIRALARINIZI HEDİYE OLARAK VERMEKTEN DAHA GÜZEL NE OLABİLİR?</h1>
                </div>
                <div className='col-md-6  text-right'>
                    <img src={Hatirac4} alt='Hatıraç' width={'100%'} />
                </div>
                <div className='col-md-6  text-left'>
                    <img src={Hatirac2} alt='Hatıraç' width={'100%'} />
                </div>
                <div className='col-md-6  bannerText'>
                    <div className='container my-4'>
                        <h2>Hatıraç Yazılım'ın <i>ücretsiz</i> versiyonunu hemen şimdi dene! İstersen sınırsız dosya paylaşımı, sınırsız zaman seçeneği ve daha fazla özellikler ile Hatıraç Yazılım'ın ücretli versiyonunu kullan.</h2>
                        <a href='https://hatirac.com/free' className='btn btn-warning mt-3'><h2>Ücretsiz Versiyonu Dene</h2></a>
                        <a href='https://hatirac.com/free' className='btn btn-primary mt-3 ml-2'><h2 className='text-white'>Sınırsız Hatıraç Yazılım!</h2></a>
                    </div>
                </div>
                <div className='col-md-6  bannerText'>
                    <div className='container'>
                        <h2>İster Yazılım olarak, ister Fiziksel olarak Hatıraç'ı kullanabilirsin. Video, resim ve ses dosyalarını yükle, istediğin tarihi seç ve KİLİTLE! Hepsi bu kadar. Hatıraç ile anılarını saklamak bu kadar basit. Hadi şimdi sen de katıl!</h2>
                        <a href='https://hatirac.com/products' className='btn btn-dark mt-3 mb-5'><h2 className='text-white'>Fiziksel Ürünleri Gör</h2></a>
                    </div>
                </div>
                <div className='col-md-6  text-right'>
                    <img src={Hatirac3} alt='Hatıraç' width={'100%'} />
                </div>
            </div>
        </div>
    )
}

export default Banner
