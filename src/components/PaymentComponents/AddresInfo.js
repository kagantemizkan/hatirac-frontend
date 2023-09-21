import React, { useState } from "react";

function AdressInfo({ onNext }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        sehir: "",
        semt: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <div className="container py-5 px-3">
            <h2>Adım 1: Kişisel Bilgiler</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-md-4 mt-3">
                        <label htmlFor="isim">İsminiz:</label>
                        <input
                            className="form-control"
                            id="isim"
                            type="text"
                            name="firstName"
                            placeholder="İsim"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="soyisim">Soyisminiz:</label>
                        <input
                            className="form-control"
                            id="soyisim"
                            type="text"
                            name="lastName"
                            placeholder="Soyisim"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="email">Email Adresiniz:</label>
                        <input
                            className="form-control"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="ornek@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row mt-3">
                    <div className="col-md-4 mt-3">
                        <label htmlFor="tel">Telefon Numaranız:</label>
                        <input
                            className="form-control"
                            id="tel"
                            type="tel"
                            name="phone"
                            placeholder="0(5XX) XXX XX XX"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="sehir">Şehir:</label>
                        <input
                            className="form-control"
                            id="sehir"
                            type="text"
                            name="sehir"
                            placeholder="Örn: İstanbul"
                            value={formData.sehir}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="semt">İlçe (Semt):</label>
                        <input
                            className="form-control"
                            id="semt"
                            type="text"
                            name="semt"
                            placeholder="Örn: Pendik"
                            value={formData.semt}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-12 mt-3">
                        <label htmlFor="adres">Adresiniz:</label>
                        <textarea
                            className="form-control"
                            id="adres"
                            name="address"
                            placeholder="Mahalle, Sokak, Bina Adı, Kapı No, Daire No, Semt, Şehir vs."
                            value={formData.address}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <button className="mt-5 btn btn-info w-50" type="submit">Sonraki Adım</button>
                </div>
            </form>
        </div>
    );
}

export default AdressInfo;
