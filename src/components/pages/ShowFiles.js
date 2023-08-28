import React, { useState, useEffect } from 'react';

function ShowFiles() {
  const [userId, setUserId] = useState(''); // Kullanıcı ID'si
  const [files, setFiles] = useState([]); // Dosya listesi
  const [message, setMessage] = useState([]); // Dosya listesi

  useEffect(() => {
    // Kullanıcı ID'sini güncellediğinizde isteği tekrar yapar
    if (userId !== '') {
      fetch(`http://localhost/gelecege_mesaj_app/showFile.php?userid=${userId}`)
        .then(response => response.json())
        .then(data => {
          // Veriyi işleme ve dosya listesini ayarlama
          console.log(data)
          setMessage(data.message)
          setFiles(data.files); // Her satır bir dosya adı içerir
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
    <div>
      <h2>Show Files</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={event => setUserId(event.target.value)}
      />

      {isFile() === true ? (
        <div>
          <h3>User's Files:</h3>
          <p>Message: {message}</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <a
                  href={`http://localhost/gelecege_mesaj_app/uploads/${userId}/${file.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.filename} - Type: {getFileType(file.filename)}
                  {getFileType(file.filename) === 'image' ? <img src={`http://localhost/gelecege_mesaj_app/uploads/${userId}/${file.filename}`} alt={file.url} /> : ''}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No files found for this user.</p>
      )}
    </div>
  );
}

export default ShowFiles;
