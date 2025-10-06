import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ProfessionsSection from './ProfessionsSection';
import SearchFlowSection from './SearchFlowSection';
import FAQSection from './FAQSection';
import EarlyAccessForm from './EarlyAccessForm';
import Footer from './Footer';

import ellipse1 from '../Ellipse1.png';
import ellipse2 from '../Ellipse2.png';
import ellipse3 from '../Ellipse3.png';
import ellipse4 from '../bg2.png';

const MainLayout = () => {
    return (
      <div className="main-layout">
        {/* фоновые эллипсы */}
        <img src={ellipse1} className="bg-ellipse ellipse1" alt="bg1" />
        <img src={ellipse2} className="bg-ellipse ellipse2" alt="bg2" />
        <img src={ellipse3} className="bg-ellipse ellipse3" alt="bg3" />
        <img src={ellipse4} className="bg-ellipse ellipse4" alt="bg4" />
  
        {/* контент */}
        <Header />
        <HeroSection />
        <ProfessionsSection />
        <SearchFlowSection />
        <FAQSection />
        <EarlyAccessForm />
        <Footer />
  
        <style>{`
          .main-layout {
            position: relative;
            background: #fff;
            overflow: hidden;
          }
  
          .bg-ellipse {
            position: absolute;
            z-index: 0;
            pointer-events: none;
            user-select: none;
          }
  
          .ellipse1 {
            top: -100px;
            left: 0;
            width: 1100px;
          }
  
          .ellipse2 {
          top: 0;
          right: 0; /* правильно — сдвиг влево от правого края */
          width: 1100px;
         }
  
          .ellipse3 {
           top: 400px;
           right: 0; /* правильно — сдвиг влево от правого края */
           width: 1200px;

          }

             .ellipse4 {
            bottom: 750px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
          }

            @media (max-width: 1435px) {
             .ellipse1 {
            top: -100px;
            left: 0;
            width: 800px;
          }
  
          .ellipse2 {
          top: 0;
          right: 0; /* правильно — сдвиг влево от правого края */
          width: 800px;
         }
  
          .ellipse3 {
           top: 400px;
           right: 0; /* правильно — сдвиг влево от правого края */
           width: 800px;

          }

             .ellipse4 {
            bottom: 1300px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
          }

          }
  
          @media (max-width: 768px) {
            .bg-ellipse {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default MainLayout;