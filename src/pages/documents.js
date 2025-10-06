import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import ellipse1 from '../Ellipse1-1.png';
import ellipse2 from '../Ellipse2-2.png';
import ellipse3 from '../Ellipse3-3.png';

const Documents = () => {
  return (
    <div className="documents-page">
      {/* Фоновая графика */}
      <img src={ellipse1} className="bg-ellipse ellipse1" alt="bg1" />
      <img src={ellipse2} className="bg-ellipse ellipse2" alt="bg2" />
      <img src={ellipse3} className="bg-ellipse ellipse3" alt="bg3" />

      <Header />

      <div className="documents-content">
        <h1>Официальные документы</h1>

        <div className="document-card">
          <a href="/pdfs/policy.pdf" target="_blank" rel="noopener noreferrer">
            Политика обработки персональных данных
          </a>
          <p>28.04.2025 &nbsp; PDF</p>
        </div>

        <div className="document-card">
          <a href="/pdfs/security.pdf" target="_blank" rel="noopener noreferrer">
            Сведения о безопасности персональных данных
          </a>
          <p>28.04.2025 &nbsp; PDF</p>
        </div>

        <div className="document-card">
          <a href="/pdfs/consent.pdf" target="_blank" rel="noopener noreferrer">
            Согласие на обработку персональных данных
          </a>
          <p>28.04.2025 &nbsp; PDF</p>
        </div>
      </div>

      <Footer />

      <style>{`
        .documents-page {
          position: relative;
          background: #ffffff;
          overflow: hidden;
          min-height: 100vh;
        }

        .bg-ellipse {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          user-select: none;
        }

        .ellipse1 {
          top: 0;
          left: 0;
          width: 1200px;
        }

        .ellipse2 {
          top: 0;
          right: 0;
          width: 1100px;
        }

        .ellipse3 {
          top: 700px;
          left: 0;
          width: 1200px;
        }

        .documents-content {
          position: relative;
          z-index: 1;
          max-width: 1535px;
          margin: 0 auto;
          padding: 64px 96px 427px;
        }

        .documents-content h1 {
          font-size: 48px;
          font-weight: 600;
          margin: 0;
          margin-bottom: 64px;
          color: #000;
        }

        .document-card {
          background: rgba(246, 246, 245, 0.8);
          border-radius: 24px;
          padding: 24px 32px;
          margin-bottom: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }

        .document-card a {
          font-size: 24px;
          color: #4a86ff;
          text-decoration: none;
          font-weight: 400;
        }

        .document-card p {
          font-size: 20px;
          color: #818181;
          margin-top: 8px;
        }

         @media (max-width: 1435px) {
          .ellipse1 {
          top: 0;
          left: 0;
          width: 800px;
        }

        .ellipse2 {
          top: 300px;
          right: 0;
          width: 800px;
        }

         .ellipse3 {
          display: none;
        }
            }

        @media (max-width: 768px) {
         .ellipse2 {
          top: 400px;
          left: 0;
          width: 800px;
        }

           .ellipse1 {
          top: 0;
          left: 0;
          width: 200%;
        }

           .documents-content {
          position: relative;
          z-index: 1;
          max-width: 1535px;
          margin: 0 auto;
          padding: 30px 20px 40px;
        }

         .document-card {
          background: rgba(246, 246, 245, 0.8);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }

          .documents-content h1 {
            font-size: 28px;
          }

          .document-card a {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default Documents;
