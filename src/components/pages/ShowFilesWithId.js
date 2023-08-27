/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ShowFilesWithId = () => {
    const [files, setFiles] = useState([]); // Dosya listesi
    const [message, setMessage] = useState([]); // Dosya listesi
    const { id } = useParams();
  
    useEffect(() => {
      // Kullanıcı ID'sini güncellediğinizde isteği tekrar yapar
      if (id !== '') {
        fetch(`http://localhost/gelecege_mesaj_app/showFile.php?userid=${id}`)
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
    }, []);
  
    return (
      <div>
        <h2>Show Files</h2>
        {files.length > 0 ? (
          <div>
            <h3>User's Files:</h3>
            <p>Message: {message}</p>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  <a href={`http://localhost/gelecege_mesaj_app/uploads/${id}/${file.filename}`} target="_blank" rel="noopener noreferrer">
                    {file.filename}
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

export default ShowFilesWithId
