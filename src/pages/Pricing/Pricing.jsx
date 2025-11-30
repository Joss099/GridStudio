import React, { useState } from 'react';
import './Pricing.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckWhite from "../../assets/images/services/CheckWhite.svg";
import CheckBlack from "../../assets/images/services/CheckBlack.svg";
import CheckGreen from "../../assets/images/services/CheckGreen.svg";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const [expandedId, setExpandedId] = useState(null);
  const { t } = useTranslation();

  // Datos de planes - AHORA CON TRADUCCIONES
  const plans = [
    {
      id: 1,
      title: t("pricing.plans.starter.title"),
      subtitle: t("pricing.plans.starter.subtitle"),
      price: t("pricing.plans.starter.price"),
      buttonText: t("pricing.plans.starter.buttonText"),
      buttonVariant: 'light',
      variant: 'dark',
      icon: CheckWhite,
      features: t("pricing.plans.starter.features", { returnObjects: true })
    },
    {
      id: 2,
      title: t("pricing.plans.standard.title"),
      subtitle: t("pricing.plans.standard.subtitle"),
      price: t("pricing.plans.standard.price"),
      buttonText: t("pricing.plans.standard.buttonText"),
      buttonVariant: 'lime',
      variant: 'outlined',
      icon: CheckGreen,
      features: t("pricing.plans.standard.features", { returnObjects: true })
    },
    {
      id: 3,
      title: t("pricing.plans.premium.title"),
      subtitle: t("pricing.plans.premium.subtitle"),
      price: t("pricing.plans.premium.price"),
      buttonText: t("pricing.plans.premium.buttonText"),
      buttonVariant: 'black',
      variant: 'lime',
      icon: CheckBlack,
      features: t("pricing.plans.premium.features", { returnObjects: true })
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getExpandText = (isExpanded) => {
    return isExpanded ? t("pricing.uiTexts.hideDetails") : t("pricing.uiTexts.whatIncludes");
  };

  return (
    <>
      <Header />
      <div className="pricing-page">
        <div className="pricing-header">
          <div className="pill">{t("pricing.title")}</div>
          <h1 className="main-title">
            {t("pricing.mainTitle")}<br />
            <span className="highlight">{t("pricing.highlight")}</span>
          </h1>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.variant} ${expandedId === plan.id ? 'expanded' : ''}`}
              onClick={() => toggleExpand(plan.id)}
            >
              <div className="card-content">
                <h2 className="plan-title">{plan.title}</h2>
                <p className="plan-subtitle">{plan.subtitle}</p>
                <div className="plan-price">{plan.price}</div>
                
                <button 
                  className={`plan-btn ${plan.buttonVariant}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {plan.buttonText}
                </button>
                
                <div className="expand-indicator">
                  {getExpandText(expandedId === plan.id)}
                  <span className={`arrow ${expandedId === plan.id ? 'up' : 'down'}`}>▼</span>
                </div>

                <div className="plan-features-content">
                  <p className="features-label">{t("pricing.uiTexts.whatIncludes")}:</p>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <img src={plan.icon} alt="check" className="check-icon" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space"></div>
      <Footer />
    </>
  );
};

export default Pricing;