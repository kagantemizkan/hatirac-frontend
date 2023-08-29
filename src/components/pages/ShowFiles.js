import React, { useState, useEffect } from 'react';
import '../../styles/showFiles.scss'

function ShowFiles() {
  const [userId, setUserId] = useState(''); // Kullanıcı ID'si
  const [files, setFiles] = useState([]); // Dosya listesi
  const [lockDate, setLockDate] = useState([]); // Kilit Tarihi
  const [message, setMessage] = useState([]); // Mesaj

  useEffect(() => {
    // Kullanıcı ID'sini güncellediğinizde isteği tekrar yapar
    if (userId !== '') {
      fetch(`http://localhost/gelecege_mesaj_app/showFile.php?userid=${userId}`)
        .then(response => response.json())
        .then(data => {
          // Verileri State'lere aktarma
          console.log(data)
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
      case 'pdf':
        return 'pdf';
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

  return (
    <div className='container mt-4 text-center' >
      <h2 className='text-darkBlue'>Ürün ID'sini Girerek Dosyalara Ulaşabilirsin!</h2>
      <input
        className='mt-2'
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={event => setUserId(event.target.value)}
      />

      {isFile() === true ? (
        <div>
          <h5 className='mt-3 text-darkBlue'>Ürün ID: <span className='text-muted'>{userId}</span></h5>
          <h5 className='mt-3 text-darkBlue'>Toplam Dosya Sayısı: <span className='text-muted'>{files.length}</span></h5>
          <h5 className='mt-3 text-darkBlue'>Kilit Açılma Tarihi: <span className='text-muted'>{lockDate}</span></h5>
          <div className='container bg-note text-left p-3 mt-3'>
            <p className='text-muted'>Mesajınız: <br /> <span className='text-darkBlue text-note'>{message}</span></p>
          </div>
          <div className='container mt-3'>
            <div className='row'>
              {files.map((file, index) => (
                <div key={index} className='col-md-4 mt-2'>
                  <a
                    className='image-link'
                    href={`http://localhost/gelecege_mesaj_app/uploads/${userId}/${file.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getFileType(file.filename) === 'image' ? <img src={`http://localhost/gelecege_mesaj_app/uploads/${userId}/${file.filename}`} alt={file.url} /> : ''}
                    {getFileType(file.filename) === 'video' ? <video controls width="100%">
                      <source src={`http://localhost/gelecege_mesaj_app/uploads/${userId}/${file.filename}`} type="video/mp4" />
                      Tarayıcınız video etiketini desteklemiyor.
                    </video>
                      : ''}
                    {getFileType(file.filename) === 'pdf' ? <iframe title='PDF' src={`http://localhost/gelecege_mesaj_app/uploads/${userId}/${file.filename}`} width="100%" height="500px"></iframe> : ''}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>No files found for this user.</p>
      )}
    </div>
  );
}

export default ShowFiles;
