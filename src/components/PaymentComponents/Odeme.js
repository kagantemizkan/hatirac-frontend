import React from "react";

function Odeme({ formData, userID, onPrevious }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ödeme işlemleri burada gerçekleştirilebilir.
    };

    return (
        <div>
            <h2>Adım 3: Ödeme</h2>
            <form onSubmit={handleSubmit}>
                <p>Adı: {formData.firstName}</p>
                <p>Soyadı: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Telefon Numarası: {formData.phone}</p>
                <p>Şehir: {formData.sehir}</p>
                <p>İlçe (Semt): {formData.semt}</p>
                <p>Adres: {formData.address}</p>
                <p>Hatıraç: {userID}</p>
                <div className='row justify-content-around'>
                    <button className="mt-5 btn btn-info" type="button" onClick={onPrevious}>Önceki Adım</button>
                    <button className="mt-5 btn btn-info" type="submit">Ödeme Yap</button>
                </div>
            </form>
        </div>
    );
}

export default Odeme;
