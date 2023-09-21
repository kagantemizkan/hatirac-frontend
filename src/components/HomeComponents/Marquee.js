import React, { useEffect, useRef } from 'react';
import '../../styles/HomeStyles/marquee.scss'

function Marquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const container = marquee.parentElement;

    const animateMarquee = () => {
      const containerWidth = container.offsetWidth;
      const marqueeWidth = marquee.offsetWidth;

      const animation = marquee.animate(
        [
          { transform: `translateX(${containerWidth}px)` },
          { transform: `translateX(-${marqueeWidth}px)` },
        ],
        {
          duration: 25000, // Kayan hızı ayarlayın (milisaniye cinsinden)
          iterations: Infinity, // Sonsuz tekrar
          easing: 'linear', // Lineer hareket
        }
      );

      animation.play();
    };

    animateMarquee();
  }, []);

  return (
    <div className="marquee-container">
      <div
        className="marquee"
        ref={marqueeRef}
        style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
        <span>TÜM ÜRÜNLERDE %20 İNDİRİM <i className="fa-regular fa-heart" style={{ color: '#F9D973' }}></i> </span>
        <span>SEVDİĞİNİZE VERECEĞİNİZ, ZAMANIN ÖTESİNDE BİR ARMAĞAN <i className="fa-regular fa-heart" style={{ color: '#F9D973' }}></i> </span>
        <span>HATIRALARINIZI HEDİYE OLARAK VERMEKTEN DAHA GÜZEL NE OLABİLİR? <i className="fa-regular fa-heart" style={{ color: '#F9D973' }}></i> </span>
        <span>TÜM ÜRÜNLERDE %20 İNDİRİM <i className="fa-regular fa-heart" style={{ color: '#F9D973' }}></i> </span>
        <span>HEM FİZİKSEL HEM DİJİTAL ÜRÜNLER <i className="fa-regular fa-heart" style={{ color: '#F9D973' }}></i> </span>
        <span>HEMEN ŞİMDİ SATIN AL, İNDİRİMDEN FAYDALAN! <i className="fa-regular fa-heart" style={{ color: '#F9D973' }}></i> </span>
      </div>
    </div>
  );
}

export default Marquee;
