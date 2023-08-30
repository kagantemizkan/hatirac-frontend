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
                <div className='col-md-6  bannerText'>
                    <h2>GELECEKTEKİ KENDİNİZE VEYA SEVDİĞİNİZE ZAMANIN ÖTESİNDE BİR ARMAĞAN...</h2>
                </div>
                <div className='col-md-6  text-left'>
                    <img src={Hatirac1} alt='Hatıraç' width={'100%'} />
                </div>
                <div className='col-md-6  text-right'>
                    <img src={Hatirac2} alt='Hatıraç' width={'100%'} />
                </div>
                <div className='col-md-6  bannerText'>
                    <h2>SEVDİKLERİNİZE ANLAMLI BİR ANI BIRAKMAK İSTER MİSİNİZ?</h2>
                </div>
                <div className='col-md-6  bannerText'>
                    <h2>Menüden 'Dosya Yükle ve Kilitle' sekmesine git. Medya ve mesajını kaydet. Hangi tarihe kadar kilitli duracağını seç ve KİLİTLE!</h2>
                </div>
                <div className='col-md-6  text-left'>
                    <img src={Hatirac3} alt='Hatıraç' width={'100%'} />
                </div>
                <div className='col-md-6  text-right'>
                    <img src={Hatirac4} alt='Hatıraç' width={'100%'} />
                </div>
                <div className='col-md-6  bannerText'>
                    <h2>Ürün ID'ni kaydet veya linki kopyala veya QR Kodu galerine kaydet. Anı yollayacağın kişiye gönder ve zamanı gelince kilit açılsın, HATIRAÇ'a erişin.</h2>
                </div>
            </div>
        </div>
    )
}

export default Banner
