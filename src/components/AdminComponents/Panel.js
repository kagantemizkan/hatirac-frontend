/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../../styles/AdminPanel/panel.scss'
import Lock from '../../images/lock.svg'
import MessageCell from './MessageCell';

function Panel() {
  const [isSiparis, setSiparis] = useState(false);
  const [data, setData] = useState([]);
  const [siparisler, setSiparisler] = useState([]);
  const [totalFilesLength, setTotalFilesLength] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    // API'den verileri çekme
    fetch('https://hatirac.com/hatirac-backend/adminPanel.php')
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        setTotalFilesLength(data.totalFilesLength);
        setTotalRecords(data.totalRecords);
      })
      .catch(error => console.error('Veri çekme hatası: ', error));
  }, []);

  useEffect(() => {
    // API'den verileri çekme
    fetch('https://hatirac.com/hatirac-backend/siparisler.php')
      .then(response => response.json())
      .then(data => {
        setSiparisler(data)
      })
      .catch(error => console.error('Veri çekme hatası: ', error));
  }, []);

  function handleDeleteHatirac(id) {
    // Silme isteği gönderme
    fetch(`https://hatirac.com/hatirac-backend/adminPanel.php?id=${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        // Silinen veriyi güncelleme
        if (data.success) {
          alert('Silme işlemi başarılı.');
          // Tabloyu yeniden çekme
          fetch('https://hatirac.com/hatirac-backend/adminPanel.php')
            .then(response => response.json())
            .then(data => {
              setData(data.data);
              setTotalFilesLength(data.totalFilesLength);
              setTotalRecords(data.totalRecords);
            })
            .catch(error => console.error('Veri çekme hatası: ', error));
        } else {
          // Silme başarısız
          console.error('Silme hatası: ', data.error);
        }
      })
      .catch(error => console.error('Silme işlemi hatası: ', error));
  }

  const handleStatusChange = (itemId, newStatus) => {
    // API'ye PUT isteği göndererek durumu değiştirme
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: itemId, durum: newStatus })
    };

    fetch('https://hatirac.com/hatirac-backend/siparisler.php', requestOptions)
      .then(response => response.json())
      .then(data => {
        alert('Durum güncellendi, sayfayı yenile!')
        // İşlem başarılı olduysa gerekli işlemleri yapabilirsiniz.
      })
      .catch(error => {
        console.error('Hata:', error);
        // Hata durumunda gerekli işlemleri yapabilirsiniz.
      });
  };


  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  }

  const showSiparis = (e) => {
    e.preventDefault()
    setSiparis(!isSiparis)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2 bg-darkBlue text-white p-3 text-center'>
          <img className='mt-2 mb-4' src={Lock} alt='Lock' width={100} />
          <h1 className='mt-2'>Admin Panel</h1>
          {isSiparis ?
            <>
              <a className='btn btn-warning mt-3' onClick={showSiparis}>Hatıraçları Görüntüle</a>
            </>
            :
            <>
              <p className='mt-2'>Toplam Kayıt Sayısı: {totalRecords}</p>
              <p className='mt2'>Toplam Dosya Sayısı: {totalFilesLength}</p>
              <a className='btn btn-success mt-3' onClick={showSiparis}>Siparişleri Görüntüle</a>
            </>
          }
        </div>
        <div style={{ backgroundColor: '#cedce7' }} className='col-md-10 p-4 table-responsive'>
          {isSiparis ?
            <>
              <h3 className='p-3 mt-3 mb-4'>SİPARİŞLER</h3>
              <table className='table table-light table-hover'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'>id</th>
                    <th scope='col'>Ürün</th>
                    <th scope='col'>Hatıraç</th>
                    <th scope='col'>Mesaj</th>
                    <th scope='col'>Ad-Soyad</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Telefon Numarası</th>
                    <th scope='col'>Adres</th>
                    <th scope='col'>Sipariş Tarihi</th>
                    <th scope='col'>Durum</th>
                    <th scope='col'>Olay</th>
                  </tr>
                </thead>
                <tbody>
                  {siparisler.map(item => (
                    <tr key={item.id}>
                      <td><p className='text-muted'>{item.id}</p></td>
                      <td><p className='text-muted'>{item.urun}</p></td>
                      <td><a href={`https://hatirac.com/show/${item.hatirac_id}`} target='_blank' rel="noreferrer">{item.hatirac_id}</a></td>
                      <MessageCell message={item.mesaj} />
                      <td>{item.ad} {item.soyad}</td>
                      <td>{item.email}</td>
                      <td>{item.tel}</td>
                      <td>{item.adres} <br /> {item.sehir}/{item.ilce} </td>
                      <td>{formatDate(item.siparis_tarihi)}</td>
                      <td>
                        <select value={item.durum} onChange={(e) => handleStatusChange(item.id, e.target.value)}>
                          <option value="Sipariş Oluşturuldu">Sipariş Oluşturuldu</option>
                          <option value="Sipariş Hazırlandı">Sipariş Hazırlandı</option>
                          <option value="Sipariş Gönderildi">Sipariş Gönderildi</option>
                          <option value="Sipariş Tamamlandı">Sipariş Tamamlandı</option>
                        </select>
                      </td>
                      <td><button className='btn btn-danger' onClick={() => handleDeleteHatirac(item.id)}>Sil</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
            :
            <>
              <h3 className='p-3 mt-3 mb-4'>HATIRAÇLAR</h3>
              <table className='table table-light table-hover'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'>id</th>
                    <th scope='col'>Ürün ID</th>
                    <th scope='col'>Mesaj</th>
                    <th scope='col'>Kilit Tarihi</th>
                    <th scope='col'>Dosya Sayısı</th>
                    <th scope='col'>Oluşturulma Tarihi</th>
                    <th scope='col'>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id}>
                      <td><p className='text-muted'>{item.id}</p></td>
                      <td><a href={`https://hatirac.com/show/${item.file_name}`} target='_blank' rel="noreferrer">{item.file_name}</a></td>
                      <MessageCell message={item.message} />
                      <td>{formatDate(item.lock_date)}</td>
                      <td>{item.files_length}</td>
                      <td>{formatDate(item.created_date)}</td>
                      <td><button className='btn btn-danger' onClick={() => handleDeleteHatirac(item.id)}>Sil</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default Panel;
