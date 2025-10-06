import React, { useState } from 'react';

const sectionStyle = {
  background: 'transparent',
  padding: '80px',
  position: 'relative',
  zIndex: 2,
};

const formContainerStyle = {
  background: '#f6f6f5',
  backdropFilter: 'blur(12px)',
  borderRadius: '48px',
  padding: '56px',
  color: '#111',
  maxWidth: '1455px',
  margin: '0 auto',
  display: 'flex',
  gap: '48px',
  flexWrap: 'wrap',
  alignItems: 'stretch',
};

const leftColStyle = {
  flex: '1 1 0',
  minWidth: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
};

const headingStyle = {
  fontSize: '36px',
  fontWeight: 700,
  margin: '0',
  marginBottom: '24px',
  color: '#111',
  maxWidth: '600px',
};

const subheadingStyle = {
  fontSize: '20px',
  color: '#333',
};

const rightColStyle = {
  flex: '1 1 0',
  minWidth: '260px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  justifyContent: 'center',
};

const inputStyle = {
  padding: '16px 24px',
  fontSize: '16px',
  borderRadius: '16px',
  border: '1px solid #101010',
  outline: 'none',
  background: '#fff',
  color: '#111',
  width: '100%',
  boxSizing: 'border-box',
};

const labelStyle = {
  fontSize: '1rem',
  fontWeight: 500,
  marginBottom: '6px',
  color: '#111',
  display: 'block',
};

const checkboxRowStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
};

const checkboxInputStyle = {
  width: '20px',
  height: '20px',
  accentColor: '#111',
  marginTop: '2px',
  flexShrink: 0,
};

const checkboxLabelStyle = {
  fontSize: '16px',
  color: '#101010',
  lineHeight: 1.1,
  userSelect: 'none',
  wordBreak: 'break-word', // ДОБАВЬ ЭТО
  maxWidth: '100%',        // И ЭТО
};

const buttonStyle = {
  maxWidth: '230px',
  padding: '12px 24px',
  background: '#111',
  color: '#fff',
  fontSize: '20px',
  fontWeight: 400,
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'background 0.18s',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  letterSpacing: '0.01em',
};

const EarlyAccessForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [news, setNews] = useState(false);

  return (
    <section style={sectionStyle} className="form-section">
      <div style={formContainerStyle} className="form-container">
        <div style={leftColStyle} className="form-left">
          <h2 style={headingStyle}>Присоединяйтесь к раннему доступу</h2>
          <div style={subheadingStyle}>Оставьте свои контактные данные</div>
        </div>
        <form style={rightColStyle} className="form-right" autoComplete="off">
          <div>
            <input
              className="input-with-placeholder"
              style={inputStyle}
              id="earlyaccess-name"
              type="text"
              placeholder="Имя"
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div>
            <input
              className="input-with-placeholder"
              style={inputStyle}
              id="earlyaccess-email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div style={checkboxRowStyle}>
            <input
              style={checkboxInputStyle}
              id="earlyaccess-consent"
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
            />
            <label style={checkboxLabelStyle} htmlFor="earlyaccess-consent">
              Я даю согласие на обработку персональных данных в соответствии с Политикой конфиденциальности
            </label>
          </div>
          <div style={checkboxRowStyle}>
            <input
              style={checkboxInputStyle}
              id="earlyaccess-news"
              type="checkbox"
              checked={news}
              onChange={e => setNews(e.target.checked)}
            />
            <label style={checkboxLabelStyle} htmlFor="earlyaccess-news">
              Хочу получать на почту только самые важные новости о платформе
            </label>
          </div>
          <button type="button" style={buttonStyle}>
            Отправить заявку
          </button>
        </form>
      </div>

      {/* Адаптивные стили */}
      <style>{`
      @media (max-width: 768px) {
  .form-section {
    padding: 40px 20px !important;
  }

  .form-container {
    flex-direction: column !important;
    padding: 32px 24px !important;
    gap: 32px !important;
    border-radius: 32px !important;
  }

  .form-left h2 {
    font-size: 18px !important;
    margin-bottom: 16px !important;
  }

  .form-left div {
    font-size: 16px !important;
  }

  .form-right {
    gap: 16px !important;
    align-items: start;
    width: 100% !important;
  }

  .form-right input[type="text"],
  .form-right input[type="email"] {
    font-size: 16px !important;
    padding: 14px 18px !important;
    width: 80% !important;
  }

  .form-right label {
    font-size: 14px !important;
    line-height: 1.4 !important;
    word-break: break-word !important;
    max-width: 90% !important;
  }

  .form-right button {
    width: 70% !important;
    font-size: 18px !important;
    padding: 12px !important;
    max-width: 100% !important;
  }

  .form-right div {
    flex-direction: row !important;
    flex-wrap: wrap !important;
    justify-content: flex-start;
  }

   .form-left {
    width: 100% !important;
    text-align: start !important;
  }

  .form-left h2 {
    font-size: 18px !important;
    margin-bottom: 16px !important;
    max-width: 90% !important; /* фикс вылазящего заголовка */
    word-break: break-word !important;
  }

  .form-left div {
    font-size: 14px !important;
    max-width: 90% !important;
    margin: 0;
    word-break: break-word !important;
  }
}
      `}</style>
    </section>
  );
};

export default EarlyAccessForm;
