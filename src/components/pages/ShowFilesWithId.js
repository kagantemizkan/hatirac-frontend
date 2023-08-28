import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowFilesWithId = () => {
  const [files, setFiles] = useState([]); // Dosya listesi
  const [message, setMessage] = useState([]); // Mesaj
  const { id } = useParams();

  useEffect(() => {
    // Kullanıcı ID'sini güncellediğinizde isteği tekrar yapar
    if (id !== '') {
      fetch(`http://localhost/gelecege_mesaj_app/showFile.php?userid=${id}`)
        .then(response => response.json())
        .then(data => {
          // Veriyi işleme ve dosya listesini ayarlama
          console.log(data);
          setMessage(data.message);
          setFiles(data.files); // Her satır bir dosya adı içerir
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id]);

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
      {isFile() === true ? (
        <div>
          <h3>User's Files:</h3>
          <p>Message: {message}</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <a
                  href={`http://localhost/gelecege_mesaj_app/uploads/${id}/${file.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.filename} - Type: {getFileType(file.filename)}
                  {getFileType(file.filename) === 'image' ? <img src={`http://localhost/gelecege_mesaj_app/uploads/${id}/${file.filename}`} alt={file.url} /> : ''}
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
};

export default ShowFilesWithId;
