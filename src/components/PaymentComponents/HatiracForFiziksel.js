import React, { useState } from 'react';
import '../../styles/upload.scss'
import MediaIcon from '../../images/medyaIcon.svg'
import Lock from '../../images/lock.svg'

function HatiracForFiziksel({ handleSonraki, setUserID, setMesaj, onPrevious }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [lockDate, setLockDate] = useState('');
  const [isComplated, setIsComplated] = useState(false);
  const [complatedData, setComplatedData] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const maxSize = 1024 * 1024 * 1024; // 1GB

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.size > maxSize) {
        alert("Bir veya daha fazla dosya 1GB'dan büyük!");
        e.target.value = null; // Dosya seçimini sıfırla
        return;
      }

      // Dosya boyutu sınırlamasını geçmeyen dosyalar için yapılacak işlemler
      setSelectedFiles([...e.target.files]);
    }
  };

  const handleUpload = async () => {
    console.log(selectedFiles)
    if (selectedFiles.length === 0 || message === '' || lockDate === '') {
      alert('Kilitlemek için tüm aşamaları doğru bir şekilde tamamlayın.')
    }
    else {
      setLoading(true)
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append('files[]', file);
      });
      formData.append('message', message);
      formData.append('lock_date', lockDate);
      formData.append('files_length', selectedFiles.length);
      try {
        const response = await fetch('https://hatirac.com/hatirac-backend/upload.php', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setComplatedData(data)
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading files:', error);
      }

      setLoading(false)
      setIsComplated(true)
      setMessage('')
      setLockDate('')
      setSelectedFiles([])
    }
  };

  const handleSubmit = (e)=> {
    e.preventDefault()
    setUserID(complatedData.userid)
    setMesaj(complatedData.message)
    handleSonraki()
  }

  return (
    <div>
      <h2>Adım 2: Hatıraç Oluşturma</h2>
      <form onSubmit={handleSubmit}>
        {
          isComplated ?
            <div className='container text-center'>
              <i className="fa-regular fa-circle-check fa-4x p-3" style={{ color: '#13b42e' }}></i>
              <p className='h5 bg-success text-white p-4'>Hatıraç'ınız oluşturuldu. Sonraki adıma geçebilirsiniz.</p>
              <div className='row justify-content-center'>
                <button className="mt-5 btn btn-info" type="submit">Sonraki Adım</button>
              </div>
            </div>
            :
            <div className='row justify-content-center px-1'>
              <label htmlFor="dropFile" className="col-md-12 text-center drop-container mt-3" id="dropcontainer">
                <div className='text-left'>
                  <span className="drop-title">Medya Ekle</span>
                  {selectedFiles.length > 0 ? <p className='drop-text'>{selectedFiles.length} adet dosya yüklendi.</p>
                    :
                    <p className='drop-text'>Video, Fotoğraf, Resim vb.</p>}

                  <input type="file" className='custom-file-input' id="dropFile" multiple onChange={handleFileChange} accept="image/*, video/*, audio/*" required />
                </div>
                <img src={MediaIcon} alt='MediaIcon' />
              </label>
              <div className='col-md-12 text-center d-flex justify-content-center mt-3'>
                <div className='drop-textarea'>
                  <div className='text-left w-100 pl-1'>
                    <label htmlFor='mesajArea' className="drop-title">Üründe Kullanılacak Mesajınız:</label>
                  </div>
                  <textarea
                    id='mesajArea'
                    className='form-control'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mesajınızı girin..."
                    rows={4}
                    required
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
                    required
                  />
                </div>
              </div>
              {loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                :
                <button className='lockButton mt-4 d-flex align-items-center py-1 justify-content-center w-100' onClick={handleUpload}>Hatıracı Oluştur <img src={Lock} alt='Lock' /></button>}
              <div className='container text-center'>
                <button className="mt-5 btn btn-info w-50" type="button" onClick={onPrevious}>Önceki Adım</button>
              </div>
            </div>
        }
      </form>
    </div>
  );
}

export default HatiracForFiziksel;
