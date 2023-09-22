import React, { useState } from "react";

function HatiracForFiziksel({ onNext, onPrevious }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ file });
  };

  return (
    <div>
      <h2>Adım 2: Dosya Yükleme</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*, video/*, audio/*" required />
        <button type="button" onClick={onPrevious}>Önceki Adım</button>
        <button type="submit">Sonraki Adım</button>
      </form>
    </div>
  );
}

export default HatiracForFiziksel;
