/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../HomeComponents/Header';
import '../../styles/Products/product.scss'

const Product = () => {
  const [urun, setUrun] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://hatirac.com/hatirac-backend/products.php") // API yolunu güncelleyin
      .then((response) => response.json())
      .then((data) => {
        setUrun(data.data[id - 1]);
        console.log(data.data[id - 1])
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
      <Header />
      <div className='container-fluid px-5 py-4'>
        <div className='row'>
          <div className='col-md-5'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
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
              <h2 className='font-weight-bolder'>{urun.urun_adi}</h2>
              <p>&#9733;&#9733;&#9733;&#9733;&#9733; <span className='indirim'>%20 İndirim</span> <span className='kargo'>Ücretsiz Kargo</span></p>
              <p>{urun.aciklama}</p>
              <p className='text-muted rounded'><strike>{(parseInt(urun.fiyat) + 1) / 0.8} TL</strike></p>
              <p style={{ marginTop: '-20px' }} className='font-weight-bolder h2 rounded'>{urun.fiyat} TL</p>
              <h5 className='font-weight-bold mt-4'>Ürün Özellikleri</h5>
              <p className='font-weight-light'>{urun.ozellikler}</p>
              <ul className='mt-4'>
                <li><i className="fa-solid fa-hand-point-right"></i> {urun.madde1}</li>
                <li><i className="fa-solid fa-hand-point-right"></i> {urun.madde2}</li>
                <li><i className="fa-solid fa-hand-point-right"></i> {urun.madde3}</li>
              </ul>
              <div className='text-center'>
                <button className='btn btn-warning mt-4 w-100 font-weight-bold'>SATIN AL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
