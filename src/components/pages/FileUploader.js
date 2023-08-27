import React, { useState } from 'react';

function FileUploader() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files[]', file);
    });
    formData.append('message', message); // Mesajı form dataya ekle

    try {
      const response = await fetch('http://localhost/gelecege_mesaj_app/upload.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json(); // Yanıtın JSON içeriğini al
        console.log(data); // JSON yanıtını konsola yazdır
      } else {
        console.error('Error:', response.statusText);
      }

      // Handle response from server
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
      <button onClick={handleUpload}>Upload Files and Message</button>
    </div>
  );
}

export default FileUploader;
