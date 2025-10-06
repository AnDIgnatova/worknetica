import React from 'react';

const heroContainerStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '100px',
  paddingBottom: '100px',
  fontFamily: '"Open Sans", sans-serif',
  textAlign: 'center',
  overflow: 'hidden',
  height: '816px',
  zIndex: 1, // <--- добавляем
};

const headingStyle = {
  fontSize: '96px',
  fontWeight: 600,
  color: '#000000',
  marginBottom: '8px',
  marginTop: '0',
};

const subheadingStyle = {
  fontSize: '36px',
  fontWeight: 400,
  color: '#000000',
  marginBottom: '32px',
};

const buttonStyle = {
  backgroundColor: 'rgba(74, 134, 255, 1)',
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: 400,
  padding: '16px 24px',
  border: 'none',
  borderRadius: '16px',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
};

const HeroSection = () => {
  return (
    <section style={heroContainerStyle} className="hero-section">
      <h1 style={headingStyle} className="hero-heading">
        Рекрутинг без рутины.
      </h1>

      <div style={subheadingStyle} className="hero-subheading">
        Без хаоса – с нужными людьми
      </div>

      <button
        style={buttonStyle}
        className="hero-button"
        onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(60, 120, 255, 1)')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(74, 134, 255, 1)')}
      >
        Получить ранний доступ
      </button>

      <style>{`
        @media (max-width: 1450px) {
          .hero-section {
            height: auto !important;
            padding: 164px 10px !important;
          }

          .hero-heading {
            font-size: 36px !important;
            line-height: 110%;
          }

          .hero-subheading {
            font-size: 20px !important;
            margin-bottom: 24px !important;
          }

          .hero-button {
            font-size: 16px !important;
            padding: 12px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
