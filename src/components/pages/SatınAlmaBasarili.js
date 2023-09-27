import React from 'react'
import Header from '../HomeComponents/Header'

const SatınAlmaBasarili = () => {
    return (
        <>
            <Header />
            <div className='container p-5 text-center'>
                <i class="fa-regular fa-circle-check fa-10x p-3" style={{ color: '#13b42e' }}></i>
                <h2>Siparişiniz Oluşturuldu.</h2>
            </div>
        </>
    )
}

export default SatınAlmaBasarili
