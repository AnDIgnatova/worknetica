import React, { useEffect, useState } from 'react';
import logoFooter from '../logo-footer.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1135);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const footerContainerStyle = {
    background: 'transparent',
    padding: isMobile ? '80px 20px' : '80px',
    borderTop: '1.5px solid #ececec',
    maxWidth: '1567px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  };

  const columnsRowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'flex-start' : 'space-between',
    maxWidth: '1567px',
    margin: '0 auto',
    flexWrap: 'wrap',
    gap: isMobile ? '40px' : '0',
  };

  const colStyle = {
    flex: '1 1 0',
    minWidth: '180px',
    display: 'flex',
    flexDirection: 'column',
  };

  const leftColStyle = {
    ...colStyle,
    alignItems: 'flex-start',
  };

  const logoStyle = {
    width: '100%',
    maxWidth: '304px',
    height: 'auto',
  };

  const headingStyle = {
    fontWeight: 700,
    fontSize: '32px',
    color: '#222',
    marginBottom: '16px',
    letterSpacing: '100%',
  };

  const menuListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const menuItemStyle = {
    fontSize: '20px',
    color: '#111',
    textDecoration: 'none',
    transition: 'color 0.15s',
  };

  const contactInfoStyle = {
    fontSize: '20px',
    color: '#111',
    marginBottom: '8px',
    lineHeight: '100%',
  };

  const copyrightStyle = {
    textAlign: isMobile ? 'center' : 'start',
    color: '#888888',
    fontSize: '24px',
    marginTop: '56px',
    letterSpacing: '0.01em',
  };

  return (
    <footer id="footer" style={footerContainerStyle}>
      <div style={columnsRowStyle}>
        <div style={leftColStyle}>
          <img src={logoFooter} alt="Логотип" style={logoStyle} />
        </div>

        <div style={colStyle}>
          <div style={headingStyle}>Меню</div>
          <ul style={menuListStyle}>
            <li><a href="#features" style={menuItemStyle}>Возможности</a></li>
            <li><a href="#faq" style={menuItemStyle}>Ответы на вопросы</a></li>
          </ul>
        </div>

        <div style={colStyle}>
          <div style={headingStyle}>О компании</div>
          <ul style={menuListStyle}>
  <li><Link href="/documents" style={menuItemStyle}>Документы</Link></li>
  <li><a href="#" style={menuItemStyle}>Пользовательское соглашение</a></li>
  <li><a href="#" style={menuItemStyle}>Политика конфиденциальности</a></li>
</ul>
        </div>

        <div style={colStyle}>
          <div style={headingStyle}>Социальные сети</div>
          <div style={{ fontSize: '20px', color: '#111', marginBottom: '40px' }}>Скоро появятся!</div>

          <div style={headingStyle}>Контакты</div>
          <div style={contactInfoStyle}>info@worknetika.ru</div>
          <div style={contactInfoStyle}>+7 999-999-99-99</div>
          <div style={contactInfoStyle}>г. Хабаровск, ул. Тихоокеанская, д. 15</div>
        </div>
      </div>
      <div style={copyrightStyle}>
        © ООО “Воркнетик”, 2025
      </div>
    </footer>
  );
};

export default Footer;
