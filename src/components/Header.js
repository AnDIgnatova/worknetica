import React, { useState, useEffect } from 'react';
import logoHeader from '../Logo-header.svg';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1210);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isMobile ? '10px' : '32px 83px 21px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: 'transparent',
    fontFamily: '"Open Sans", sans-serif',
  };

 

  const logoStyles = {
    fontSize: '30px',
    fontWeight: 600,
    color: 'rgba(0, 0, 0, 1)',
    cursor: 'pointer',
  };

  const navStyles = {
    display: isMobile ? 'none' : 'flex',
    gap: '68px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 1)',
  };

  const navItemStyles = {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
  };

  const buttonStyles = {
    backgroundColor: 'rgba(74, 134, 255, 1)',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: 400,
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    display: isMobile ? 'none' : 'inline-block',
  };

  const burgerStyles = {
    display: isMobile ? 'block' : 'none',
    fontSize: '28px',
    cursor: 'pointer',
    color: 'black',
    marginLeft: 'auto',
  };

  const dropdownMenuStyles = {
    position: 'absolute',
    top: '100%',
    right: '0',
    width: '250px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '10px 0',
    display: menuOpen ? 'block' : 'none',
    zIndex: 33,
  };

  const dropdownItemStyle = {
    padding: '10px 16px',
    fontSize: '16px',
    color: '#222',
    textDecoration: 'none',
    display: 'block',
    cursor: 'pointer',
  };

  const handleBurgerClick = () => {
    setMenuOpen(prev => !prev);
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header style={headerStyles}>
      <img src={logoHeader} alt="WorkNetika Logo" style={{ height: '56px', cursor: 'pointer' }} />

      <nav>
      <ul style={navStyles}>
  <li><span onClick={() => handleNavClick('search-flow')} style={navItemStyles}>Возможности</span></li>
  <li><span onClick={() => handleNavClick('faq')} style={navItemStyles}>Ответы на вопросы</span></li>
  <li><span onClick={() => handleNavClick('footer')} style={navItemStyles}>Контакты</span></li>
</ul>
      </nav>

      <button
        style={buttonStyles}
        onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(60, 120, 255, 1)')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(74, 134, 255, 1)')}
      >
        Получить ранний доступ
      </button>

      {/* Бургер-меню */}
      <div style={burgerStyles} onClick={handleBurgerClick}>
        ☰
      </div>

      {/* Выпадающее меню справа */}
{isMobile && (
  <div style={dropdownMenuStyles}>
    <div style={dropdownItemStyle} onClick={() => handleNavClick('search-flow')}>Возможности</div>
    <div style={dropdownItemStyle} onClick={() => handleNavClick('faq')}>Ответы на вопросы</div>
    <div style={dropdownItemStyle} onClick={() => handleNavClick('footer')}>Контакты</div>
    <div style={{ padding: '10px 16px' }}>
      <button
        onClick={() => console.log('Получить ранний доступ')}
        style={{
          backgroundColor: 'rgba(74, 134, 255, 1)',
          color: '#ffffff',
          border: 'none',
          padding: '12px 16px',
          fontSize: '14px',
          fontWeight: 400,
          borderRadius: '16px',
          width: '100%',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(60, 120, 255, 1)')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(74, 134, 255, 1)')}
      >
        Получить ранний доступ
      </button>
    </div>
  </div>
)}

    </header>
  );
};

export default Header;
