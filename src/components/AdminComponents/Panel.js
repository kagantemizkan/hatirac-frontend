import React, { useState, useEffect } from 'react';
import '../../styles/AdminPanel/panel.scss'
import Lock from '../../images/lock.svg'

function Panel() {
  const [data, setData] = useState([]);
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

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 bg-darkBlue text-white p-3 text-center'>
          <img className='mt-2 mb-4' src={Lock} alt='Lock' width={100} />
          <h1 className='mt-2'>Admin Panel</h1>
          <p className='mt-2'>Toplam Kayıt Sayısı: {totalRecords}</p>
          <p className='mt2'>Toplam Dosya Sayısı: {totalFilesLength}</p>
        </div>
        <div style={{ backgroundColor: '#cedce7' }} className='col-md-9 p-4 table-responsive'>
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
                  <td>{item.message}</td>
                  <td>{formatDate(item.lock_date)}</td>
                  <td>{item.files_length}</td>
                  <td>{formatDate(item.created_date)}</td>
                  <td><button className='btn btn-danger'>Sil</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Panel;
