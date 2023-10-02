import React from "react";

function Odeme({ formData, userID, onPrevious, urun, mesaj, fiyat }) {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const orderData = {
                ad: formData.firstName,
                soyad: formData.lastName,
                email: formData.email,
                tel: formData.phone,
                sehir: formData.sehir,
                ilce: formData.semt,
                adres: formData.address,
                hatirac_id: userID,
                urun: urun,
                fiyat: fiyat,
                mesaj: mesaj
            };
            console.log(orderData)

            // Ödeme verilerini PHP sunucusuna gönderme
            const response = await fetch('https://hatirac.com/hatirac-backend/siparisler.php', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
            });


            if (response.ok) {
                alert("Ödeme işlemi başarıyla tamamlandı.");
            } else {
                console.error("Ödeme işlemi sırasında bir hata oluştu.");
            }
        } catch (error) {
            console.error("Ödeme işlemi sırasında bir hata oluştu:", error);
        }
    };

    return (
        <div>
            <h2>Adım 3: Ödeme</h2>
                <p>Adı: {formData.firstName}</p>
                <p>Soyadı: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Telefon Numarası: {formData.phone}</p>
                <p>Şehir: {formData.sehir}</p>
                <p>İlçe (Semt): {formData.semt}</p>
                <p>Adres: {formData.address}</p>
                <p>Hatıraç: {userID}</p>
                <p>Ürün: {urun}</p>
                <p>Ödenecek Tutar: {fiyat} TL</p>
                <p>Mesajınız: {mesaj}</p>
                <div className='row justify-content-around'>
                    <button className="mt-5 btn btn-info" type="button" onClick={onPrevious}>Önceki Adım</button>
                    <button className="mt-5 btn btn-info" onClick={handleSubmit} type="submit">Ödeme Yap</button>
                </div>
        </div>
    );
}

export default Odeme;
