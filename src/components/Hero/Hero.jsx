// Hero.jsx
import React from "react";
import { useTranslation } from "react-i18next"; // ← Agrega esta importación
import ThreeBackground from "../../components/ThreeBackground/ThreeBackground";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation(); // ← Agrega esta línea

  return (
    <section className="hero">
      <ThreeBackground />

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span>{t('hero.line1')}</span>  {/* ← Cambia esto */}
              <span>{t('hero.line2')}</span>  {/* ← Cambia esto */}
              <span>{t('hero.line3')}</span>  {/* ← Cambia esto */}
              <span>{t('hero.line4')}</span>  {/* ← Cambia esto */}
            </h1>
            <div className="hero-actions">
              <Link to="/pricing" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                {t('hero.cta')} 
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/gridlogo.png" alt="Digital Tools" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;