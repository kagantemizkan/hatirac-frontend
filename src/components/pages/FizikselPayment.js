import React, { useState } from "react";
import AddresInfo from "../PaymentComponents/AddresInfo";
import HatiracForFiziksel from "../PaymentComponents/HatiracForFiziksel";
import Odeme from "../PaymentComponents/Odeme";

function FizikselPayment(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="container py-5 px-3">
      <h2 className="text-center font-weight-bold mb-4">Sipariş Sayfası</h2>
      <div className="row">
        <div className="col-md-8">
          {currentStep === 1 && <AddresInfo onNext={handleNext} />}
          {currentStep === 2 && <HatiracForFiziksel onNext={handleNext} onPrevious={handlePrevious} />}
          {currentStep === 3 && <Odeme formData={formData} onPrevious={handlePrevious} />}
        </div>
        <div className="col-md-4 mt-5 py-3">
          <div className="container">
            <h4>Aldığınız Ürün: {props.urun}</h4>
            <h4>Teslimat Ücreti: 0.00 TL</h4>
            <h4>Toplam Tutar: {props.fiyat} TL</h4>
            <h4>Ödenecek Tutar: {props.fiyat} TL</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FizikselPayment;
