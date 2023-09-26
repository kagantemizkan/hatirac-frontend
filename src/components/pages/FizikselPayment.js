import React, { useState } from "react";
import AddresInfo from "../PaymentComponents/AddresInfo";
import HatiracForFiziksel from "../PaymentComponents/HatiracForFiziksel";
import Odeme from "../PaymentComponents/Odeme";

function FizikselPayment(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [userID, setUserID] = useState('')
  const [mesaj, setMesaj] = useState('')

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handleSonraki = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="container py-5 px-3">
      <h2 className="text-center font-weight-bold mb-4">Sipariş Sayfası</h2>
      <div className="row align-items-center">
        <div className="col-md-8">
          {currentStep === 1 && <AddresInfo onNext={handleNext} />}
          {currentStep === 2 && <HatiracForFiziksel setMesaj={setMesaj} setUserID={setUserID} handleSonraki={handleSonraki} onPrevious={handlePrevious} />}
          {currentStep === 3 && <Odeme mesaj={mesaj} urun={props.urun} urunFiyat={props.fiyat} userID={userID} formData={formData} onPrevious={handlePrevious} />}
        </div>
        <div className="col-md-4 mt-5 py-3">
          <div className="container bg-darkBlue text-white p-3 rounded">
            <h5 className="font-weight-light">Aldığınız Ürün: <span className="font-weight-bold float-right">{props.urun}</span></h5>
            <h5 className="font-weight-light">Teslimat Ücreti: <span className="font-weight-bold float-right">0.00 TL</span></h5>
            <h5 className="font-weight-light">Toplam Tutar: <span className="font-weight-bold float-right">{props.fiyat} TL</span></h5>
            <hr className="mt-3 mb-3 bg-white" />
            <h5 className="font-weight-light">Ödenecek Tutar: <span className="font-weight-bold float-right">{props.fiyat} TL</span></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FizikselPayment;
