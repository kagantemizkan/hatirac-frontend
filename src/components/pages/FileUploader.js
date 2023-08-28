import React, { useState } from 'react';

function FileUploader() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [lockDate, setLockDate] = useState(''); // Yeni state for lock_date

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
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        rows={4}
      />
      <input
        type="date"
        value={lockDate}
        onChange={(e) => setLockDate(e.target.value)}
      />
      <button onClick={handleUpload}>Upload Files and Message</button>
    </div>
  );
}

export default FileUploader;
