import React from 'react';
import '../../styles/HomeStyles/marquee.scss'; // Yukarıdaki CSS kodunu içeren dosyanın yolunu düzeltin

function Marquee() {
  return (
    <div className="marquee-container">
      <span className="marquee-text">GELECEKTEKİ 'SEN'e HATIRA BIRAK - SEVDİĞİN KİŞİYE GELECEKTE GÖRMESİ İÇİN HATIRA YOLLA - GELECEKTEKİ 'SEN'e HATIRA BIRAK - SEVDİĞİN KİŞİYE GELECEKTE GÖRMESİ İÇİN HATIRA YOLLA - GELECEKTEKİ 'SEN'e HATIRA BIRAK - SEVDİĞİN KİŞİYE GELECEKTE GÖRMESİ İÇİN HATIRA YOLLA</span>
    </div>
  );
}

export default Marquee;
