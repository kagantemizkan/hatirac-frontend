import React from 'react'
import Lock from '../../images/lock.svg'
import '../../styles/ComplatedUpload/complatedUpload.scss'

const ComplatedUpload = (props) => {
    console.log(props.data)
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center text-center mt-4'>
        <img src={Lock} alt='Lock' width={150} />
      <h2 className='text-center text-bold text-darkBlue mt-3'>Dosyalarınız Başarıyla Kilitlendi</h2>
      <p className='text-muted mb-5'>Lütfen Ürün ID'nizi kaybetmeyin. Herhangi olumsuz bir durumda Ürün ID'niz ile verilerinize ulaşabilirsiniz.</p>
      <h5 className='text-muted'>Ürün ID'niz: <b className='text-bold text-darkBlue'>{props.data.userid}</b></h5>
      <h5 className='text-muted'>Dosya Sayınız: <b className='text-bold text-darkBlue'>{props.data.files.length}</b></h5>
      <h5 className='text-muted'>Kilidin Açılacağı Tarih: <b className='text-bold text-darkBlue'>{props.data.lock_date}</b></h5>
      <h5 className='text-muted'>Mesajınız: <b className='text-bold text-darkBlue'>{props.data.message}</b></h5>
    </div>
  )
}

export default ComplatedUpload
