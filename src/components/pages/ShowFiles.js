import React, { useState, useEffect } from 'react';
import '../../styles/showFiles.scss'
import LockScreen from '../LockScreen/LockScreen';
import { Helmet } from 'react-helmet';
import Logo from '../../images/logo.png'

function ShowFiles() {
  const [userId, setUserId] = useState(''); // Kullanıcı ID'si
  const [files, setFiles] = useState([]); // Dosya listesi
  const [lockDate, setLockDate] = useState([]); // Kilit Tarihi
  const [message, setMessage] = useState([]); // Mesaj

  useEffect(() => {
    // Kullanıcı ID'sini güncellediğinizde isteği tekrar yapar
    if (userId !== '') {
      fetch(`https://hatirac.com/hatirac-backend/showFile.php?userid=${userId}`)
        .then(response => response.json())
        .then(data => {
          // Verileri State'lere aktarma
          setLockDate(data.lock_date)
          setMessage(data.message)
          setFiles(data.files);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [userId]);

  const getFileExtension = (filename) => {
    const parts = filename.split('.');
    return parts[parts.length - 1];
  };

  const getFileType = (filename) => {
    const extension = getFileExtension(filename);
    // Burada dosya uzantısına göre tür belirleme yapabilirsiniz
    switch (extension.toLowerCase()) {
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'image';
      case 'mp4':
        return 'video';
      case 'mp3':
      case 'mpeg':
      case 'wav':
      case 'ogg':
        return 'audio';
      default:
        return 'unknown';
    }
  };

  let isFile = () => {
    if (files) {
      return true
    }
    else {
      return false
    }
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  }

  function calculateDateDifference(lockDate) {
    const now = new Date();
    const lockDateTime = new Date(lockDate);

    let yearDifference = lockDateTime.getFullYear() - now.getFullYear();
    let monthDifference = lockDateTime.getMonth() - now.getMonth();
    let dayDifference = lockDateTime.getDate() - now.getDate();
    let hourDifference = lockDateTime.getHours() - now.getHours();
    let minuteDifference = lockDateTime.getMinutes() - now.getMinutes();

    if (minuteDifference < 0) {
      minuteDifference += 60;
      hourDifference--;
    }

    if (hourDifference < 0) {
      hourDifference += 24;
      dayDifference--;
    }

    if (dayDifference < 0) {
      const daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      dayDifference += daysInLastMonth;
      monthDifference--;
    }

    if (monthDifference < 0) {
      monthDifference += 12;
      yearDifference--;
    }

    return {
      years: yearDifference,
      months: monthDifference,
      days: dayDifference,
      hours: hourDifference,
      minutes: minuteDifference
    };
  }

  function isPastDate(dateString) {
    const now = new Date();
    const lockDateTime = new Date(dateString);
    return now < lockDateTime;
  }


  const dateDifference = calculateDateDifference(lockDate);

  return (
    <div className='container mt-4 text-center' >
      <Helmet>
        <link rel="icon" href={Logo} />
      </Helmet>
      <h1 className='titleUpload text-center mt-2 mb-3'>Hatıraç</h1>
      <h2 className='text-darkBlue'>Ürün ID'sini Girerek Dosyalara Ulaşabilirsin!</h2>
      <input
        className='mt-2'
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={event => setUserId(event.target.value)}
      />

      {isFile() === true ? (
        isPastDate(lockDate) ? (
          <LockScreen dateDifference={dateDifference} />
        ) :
          <div>
            <h5 className='mt-3 text-darkBlue'>Ürün ID: <span className='text-muted'>{userId}</span></h5>
            <h5 className='mt-3 text-darkBlue'>Toplam Dosya Sayısı: <span className='text-muted'>{files.length}</span></h5>
            <h5 className='mt-3 text-darkBlue'>Kilit Açılma Tarihi: <span className='text-muted'>{formatDate(lockDate)}</span></h5>
            <div className='container bg-note text-left p-3 mt-3'>
              <p className='text-muted'>Mesajınız: <br /> <span className='text-darkBlue text-note'>{message}</span></p>
            </div>
            <div className='container mt-3'>
              <div className='row'>
                {files.map((file, index) => (
                  <div key={index} className='col-md-4 mt-2'>
                    <a
                      className='image-link'
                      href={`https://hatirac.com/hatirac-backend/uploads/${userId}/${file.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getFileType(file.filename) === 'image' ? <img src={`https://hatirac.com/hatirac-backend/uploads/${userId}/${file.filename}`} alt={file.url} /> : ''}
                      {getFileType(file.filename) === 'video' ? <video controls width="100%">
                        <source src={`https://hatirac.com/hatirac-backend/uploads/${userId}/${file.filename}`} type="video/mp4" />
                        Tarayıcınız video etiketini desteklemiyor.
                      </video>
                        : ''}
                      {getFileType(file.filename) === 'audio' ? <audio controls>
                        <source src={`https://hatirac.com/hatirac-backend/uploads/${userId}/${file.filename}`} type="audio/mpeg" />
                        <source src={`https://hatirac.com/hatirac-backend/uploads/${userId}/${file.filename}`} type="audio/mp3" />
                        <source src={`https://hatirac.com/hatirac-backend/uploads/${userId}/${file.filename}`} type="audio/wav" />
                        <source src={`https://hatirac.com/hatirac-backend/uploads/${userId}/${file.filename}`} type="audio/ogg" />
                        Tarayıcınız ses etiketini desteklemiyor.
                      </audio> : ''}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
      ) : (
        <p className='text-darkBlue mt-3'>Bu Ürün ID'sine ait dosya bulunamadı.</p>
      )}
    </div>
  );
}

export default ShowFiles;
