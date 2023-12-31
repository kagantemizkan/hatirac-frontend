/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../HomeComponents/Header';
import '../../styles/Products/product.scss'
import FizikselUrunler from '../HomeComponents/FizikselUrunler';
import Footer from '../HomeComponents/Footer';
import Marquee from '../HomeComponents/Marquee';
import FizikselPayment from './FizikselPayment';

const Product = () => {
  const [urun, setUrun] = useState({});
  const [isOdeme, setOdeme] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://hatirac.com/hatirac-backend/products.php") // API yolunu güncelleyin
      .then((response) => response.json())
      .then((data) => {
        setUrun(data.data[id - 1]);
      })
      .catch((error) => {
        console.error("Veri çekme hatası: ", error);
      });
  }, []);

  // urun nesnesinin dolu olduğunu kontrol et
  if (!urun) {
    return null; // urun dolu değilse bir şey gösterme
  }

  return (
    <>
      {isOdeme === true ?
        <FizikselPayment urun={urun.urun_adi} fiyat={urun.fiyat} />
        :
        <>
          <Header />
          <Marquee />
          <div className='container-fluid px-5 py-4'>
            <div className='row'>
              <div className='col-md-5'>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/1.png`} className="d-block w-100" alt="Ürün" />
                    </div>
                    <div className="carousel-item">
                      <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/2.png`} className="d-block w-100" alt="Ürün" />
                    </div>
                    <div className="carousel-item">
                      <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/3.png`} className="d-block w-100" alt="Ürün" />
                    </div>
                    <div className="carousel-item">
                      <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/4.png`} className="d-block w-100" alt="Ürün" />
                    </div>
                    <div className="carousel-item">
                      <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/5.png`} className="d-block w-100" alt="Ürün" />
                    </div>
                    <div className="carousel-item">
                      <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/6.png`} className="d-block w-100" alt="Ürün" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='container'>
                  <h2 className='font-weight-bolder mt-4'>{urun.urun_adi}</h2>
                  <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <p><span className='indirim'>%20 İndirim</span> <span className='kargo'>Ücretsiz Kargo</span></p>
                  <p>{urun.aciklama}</p>
                  <p className='text-muted h5 rounded'><strike>{(parseInt(urun.fiyat) + 1) / 0.8} TL</strike></p>
                  <p style={{ marginTop: '-10px' }} className='font-weight-bolder h1 rounded'>{urun.fiyat} TL</p>
                  <h5 className='font-weight-bold h4 mt-4'>Ürün Özellikleri</h5>
                  <p className='font-weight-light h6'>{urun.ozellikler}</p>
                  <ul className='mt-3'>
                    <li><i className="fa-solid fa-hand-point-right"></i> {urun.madde1}</li>
                    <li><i className="fa-solid fa-hand-point-right"></i> {urun.madde2}</li>
                    <li><i className="fa-solid fa-hand-point-right"></i> {urun.madde3}</li>
                  </ul>
                  <div className='text-center'>
                    <button onClick={() => setOdeme(true)} className='btn btn-warning mt-2 w-100 font-weight-bold'>SATIN AL</button>
                  </div>
                  <div className='container py-4 px-5'>
                    <div className='row text-center justify-content-center align-items-center'>
                      <div className='col-md-4 mt-4'>
                        <i className="fa-solid fa-truck-fast fa-2xl mr-3"></i>
                        <p className='my-3'>Ücretsiz Teslimat</p>
                      </div>
                      <div className='col-md-4 mt-4'>
                        <i className="fa-solid fa-thumbs-up fa-2xl mr-3"></i>
                        <p className='my-3'>Mutlu Müşteri</p>
                      </div>
                      <div className='col-md-4 mt-4'>
                        <i className="fa-solid fa-gifts fa-2xl mr-3"></i>
                        <p className='my-3'>Hediye Paketi ile Gönderim</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container pt-5 mt-4 mb-3'>
                <h2 className='mb-5 text-center font-weight-bold'>Ürün Detayları</h2>
                <div className='row justify-content-around align-items-center' style={{ backgroundColor: 'teal', color: 'white' }}>
                  <div className='col-md-6'>
                    <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/1.png`} className='w-100' alt="Ürün" />
                  </div>
                  <div className='col-md-6'>
                    <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/3.png`} className='w-100' alt="Ürün" />
                  </div>
                  <div className='col-md-6'>
                    <ul className='h5 p-3 pl-5'>
                      <li className='mt-3'><i className="fa-solid fa-star"></i> {urun.madde1}</li>
                      <li className='mt-3'><i className="fa-solid fa-face-grin-stars"></i> {urun.madde2}</li>
                      <li className='mt-3'><i className="fa-solid fa-meteor"></i> {urun.madde3}</li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/5.png`} className='w-100' alt="Ürün" />
                  </div>
                  <div className='col-md-6'>
                    <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/6.png`} className='w-100' alt="Ürün" />
                  </div>
                  <div className='col-md-6 text-center'>
                    <p className='font-weight-light h3 p-3'>{urun.ozellikler}</p>
                  </div>
                  <div className='col-md-6'>
                    <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/2.png`} className='w-100' alt="Ürün" />
                  </div>
                  <div className='col-md-6'>
                    <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/4.png`} className='w-100' alt="Ürün" />
                  </div>
                </div>
              </div>
              <div className='container mt-5'>
                <section>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center">
                      <h3>Müşteri Yorumları</h3>
                      <p className="mb-3">
                        Değerli müşterilerimizden <strong>{urun.urun_adi}</strong> ürünümüz hakkında aldığımız yorumlardan bazılarını sizlere fikir oluşturması için sergiliyoruz.
                      </p>
                    </div>
                  </div>
                  <div className="row text-center d-flex align-items-stretch">
                    <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
                      <div className="card testimonial-card" style={{ backgroundColor: '#dfff00' }}>
                        <div className="card-body">
                          <h4 className="mb-4"><i className="fas fa-quote-left pe-2"></i></h4>
                          <hr />
                          <p className="mt-2">
                            {urun.musteri_yorum1}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
                      <div className="card testimonial-card" style={{ backgroundColor: '#e0b0ff' }}>
                        <div className="card-body">
                          <h4 className="mb-4"><i className="fas fa-quote-left pe-2"></i></h4>
                          <hr />
                          <p className="mt-2">
                            {urun.musteri_yorum2}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-0 d-flex align-items-stretch">
                      <div className="card testimonial-card" style={{ backgroundColor: '#00BFFF' }}>
                        <div className="card-body">
                          <h4 className="mb-4"><i className="fas fa-quote-left pe-2"></i></h4>
                          <hr />
                          <p className="mt-2">
                            {urun.musteri_yorum3}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className='container mt-5 pt-5 mb-5 text-center'>
                <h2 className='p-3'>Diğer Ürünlerimize'de Göz Atın!</h2>
                <FizikselUrunler />
              </div>
            </div>
          </div>
          <Footer />
        </>
      }
    </>
  )
}

export default Product
