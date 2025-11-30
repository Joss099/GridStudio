// src/components/LanguageSwitcher/LanguageSwitcher.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div style={{
      top: '20px',
      right: '20px', 
      zIndex: 1000,
      display: 'flex',
      gap: '8px'
    }}>
      <button 
        style={{
          background: i18n.language === 'en' ? '#b3e11f' : 'transparent',
          border: '1px solid #b3e11f',
          color: i18n.language === 'en' ? '#000' : '#b3e11f',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: '600'
        }}
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </button>
      <button 
        style={{
          background: i18n.language === 'es' ? '#b3e11f' : 'transparent',
          border: '1px solid #b3e11f', 
          color: i18n.language === 'es' ? '#000' : '#b3e11f',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: '600'
        }}
        onClick={() => i18n.changeLanguage('es')}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;