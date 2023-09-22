import React, { useEffect, useState } from 'react'
import '../../styles/HomeStyles/urun.scss'

const FizikselUrunler = () => {
    const [urunler, setUrunler] = useState([]);

    useEffect(() => {

        fetch("https://hatirac.com/hatirac-backend/products.php") // API yolunu güncelleyin
            .then((response) => response.json())
            .then((data) => {
                setUrunler(data.data);
                console.log(data.data)
            })
            .catch((error) => {
                console.error("Veri çekme hatası: ", error);
            });
    }, []);
    return (
        <div className='container-fluid p-5 bg-white rounded'>
            <h2 className='text-center p-3'>Ürünlerimiz</h2>
            <div className='container'>
                <div className="row justify-content-around">
                    {urunler.map((urun, index) => (
                        <div key={index} className="col-md-4 mt-2 mb-2 pt-3 rounded urun">
                            <img src={`https://hatirac.com/hatirac-backend/urunResmi/${urun.id}/1.png`} className="w-100" alt="Ürün Resmi" />
                            <div className="card-body pl-0">
                                <h5 className="card-title">{urun.urun_adi}</h5>
                                <p className="card-text">{urun.onyazi}</p>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div>
                                    <p className='text-muted rounded'><strike>{(parseInt(urun.fiyat)+1)/0.8} TL</strike></p>
                                    <p style={{marginTop: '-20px'}} className='font-weight-bolder h4 rounded'>{urun.fiyat} TL</p>
                                    </div>
                                    <a href={`/product/${urun.id}`} className="btn bg-darkBlue w-50 text-white stretched-link">Ürüne Git</a>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default FizikselUrunler
