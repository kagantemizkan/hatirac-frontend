import React, { useState } from 'react';
import '../../styles/upload.scss'
import MediaIcon from '../../images/medyaIcon.svg'
import Lock from '../../images/lock.svg'
import ComplatedUpload from '../ComplatedUpload/ComplatedUpload';
import { Helmet } from 'react-helmet';
import Logo from '../../images/logo.png'

function FileUploaderPaid() {
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

    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

    return (
        <div className='container p-3'>
            <Helmet>
                <link rel="icon" href={Logo} />
            </Helmet>
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
                                    <p className='drop-text'>Video, Fotoğraf, Resim vb.</p>}

                                <input type="file" className='custom-file-input' id="dropFile" multiple onChange={handleFileChange} accept="image/*, video/*, audio/*" required />
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
                            <button className='lockButton mt-4 d-flex align-items-center py-1 justify-content-center w-100' onClick={handleUpload}>KİLİTLE <img src={Lock} alt='Lock' /></button>}
                    </div>
            }
        </div>
    );
}

export default FileUploaderPaid;
