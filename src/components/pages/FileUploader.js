import React, { useState } from 'react';
import '../../styles/upload.scss'
import MediaIcon from '../../images/medyaIcon.svg'
import Lock from '../../images/lock.svg'
import ComplatedUpload from '../ComplatedUpload/ComplatedUpload';

function FileUploader() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [lockDate, setLockDate] = useState('');
  const [isComplated, setIsComplated] = useState(false);
  const [complatedData, setComplatedData] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files[]', file);
    });
    formData.append('message', message);
    formData.append('lock_date', lockDate); // lock_date'ı form dataya ekle

    try {
      const response = await fetch('http://localhost/gelecege_mesaj_app/upload.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setComplatedData(data)
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }

    setIsComplated(true)
    setMessage('')
    setLockDate('')
    setSelectedFiles([])
    
  };

  return (
    <div className='container p-3'>
      <h1 className='titleUpload text-center mt-2'>Hatıraç</h1>
      {
        isComplated ?
        <ComplatedUpload data={complatedData} />
        :
        <div className='row justify-content-center px-1'>
        <label htmlFor="dropFile" className="col-md-12 text-center drop-container mt-3" id="dropcontainer">
          <div className='text-left'>
            <span className="drop-title">Medya Ekle</span>
            {selectedFiles.length > 0 ? <p className='drop-text'>{selectedFiles.length} adet dosya yüklendi.</p>
            :
            <p className='drop-text'>Video, Fotoğraf, Resim vb.</p> }
            
            <input type="file" className='custom-file-input' id="dropFile" multiple onChange={handleFileChange} required />
          </div>
          <img src={MediaIcon} alt='MediaIcon' />
        </label>
        <div className='col-md-12 text-center d-flex justify-content-center mt-3'>
          <div className='drop-textarea'>
            <div className='text-left w-100 pl-1'>
              <label htmlFor='mesajArea' className="drop-title">Mesajınız:</label>
            </div>
            <textarea
              id='mesajArea'
              className='form-control'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mesajınızı girin..."
              rows={4}
            />
          </div>
        </div>
        <div className='col-md-12 d-flex justify-content-center mt-3'>
          <div className='d-flex flex-column text-center'>
          <label htmlFor='lock-date' className="drop-title">Hangi tarihe kadar kilitli olarak dursun?</label>
          <input
          className='ml-auto mr-auto w-100 custom-date-input'
            id='lock-date'
            type="date"
            value={lockDate}
            onChange={(e) => setLockDate(e.target.value)}
          />
          </div>
        </div>
        <button className='lockButton mt-4 d-flex align-items-center py-1 justify-content-center w-100' onClick={handleUpload}>KİLİTLE <img src={Lock} alt='Lock' /></button>
      </div> 
      }
    </div>
  );
}

export default FileUploader;
