import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import "./ServicesDetail.css";

import { useTranslation } from "react-i18next";
import NextServiceIcon from "../../assets/images/services/arrow.svg";
import VisualMainImage from "../../assets/images/Visual.webp";
import WebMainImage from "../../assets/images/Web.webp";
import SocialMainImage from "../../assets/images/Social.webp";
import AdvertisingMainImage from "../../assets/images/Advertising.webp";
import WebDesignMainImage from "../../assets/images/WebDesign.webp";
import MaitenanceMainImage from "../../assets/images/Maintenance.webp";

import RecentProjectImage from "../../assets/images/Visual2.png";

const ServicesDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();

  // Datos de todos los servicios - AHORA CON TRADUCCIONES
  const allServices = {
    1: {
      title: t("servicesDetail.visualIdentity"),
      category: t("servicesDetail.branding"),
      description: t("servicesDetail.description"),
      serviceMainImage: VisualMainImage,
      recentProject: {
        title: t("servicesDetail.project1"),
        description: t("servicesDetail.viewInPortfolio"),
        image: RecentProjectImage,
      },
    },
    2: {
      title: t("servicesDetail.socialMedia"),
      category: t("servicesDetail.socialMediaCategory"),
      description: t("servicesDetail.description"),
      serviceMainImage: SocialMainImage,
      recentProject: {
        title: t("servicesDetail.project2"),
        description: t("servicesDetail.viewInPortfolio"),
        image: RecentProjectImage,
      },
    },
    3: {
      title: t("servicesDetail.webDevelopment"),
      category: t("servicesDetail.development"),
      description: t("servicesDetail.description"),
      serviceMainImage: WebMainImage,
      recentProject: {
        title: t("servicesDetail.project3"),
        description: t("servicesDetail.viewInPortfolio"),
        image: RecentProjectImage,
      },
    },
    4: {
      title: t("servicesDetail.advertising"),
      category: t("servicesDetail.design"),
      description: t("servicesDetail.description"),
      serviceMainImage: AdvertisingMainImage,
      recentProject: {
        title: t("servicesDetail.project4"),
        description: t("servicesDetail.viewInPortfolio"),
        image: RecentProjectImage,
      },
    },
    5: {
      title: t("servicesDetail.webDesign"),
      category: t("servicesDetail.uiux"),
      description: t("servicesDetail.description"),
      serviceMainImage: WebDesignMainImage,
      recentProject: {
        title: t("servicesDetail.project5"),
        description: t("servicesDetail.viewInPortfolio"),
        image: RecentProjectImage,
      },
    },
    6: {
      title: t("servicesDetail.maintenance"),
      category: t("servicesDetail.maintenanceCategory"),
      description: t("servicesDetail.description"),
      serviceMainImage: MaitenanceMainImage,
      recentProject: {
        title: t("servicesDetail.project6"),
        description: t("servicesDetail.viewInPortfolio"),
        image: RecentProjectImage,
      },
    },
  };

  // Obtener el servicio actual basado en el ID
  const serviceId = id ? parseInt(id) : 1;
  const serviceData = allServices[serviceId] || allServices[1];

  const handleNextService = () => {
    const nextId = serviceId === 6 ? 1 : serviceId + 1;
    navigate(`/services/${nextId}`);
  };

  return (
    <div className="services-detail-page">
      <Header />
      <br />
      <main className="services-detail-main">
        <div className="container">
          <div className="services-detail-grid">
            {/* Columna 1: Imagen grande */}
            <div className="detail-main-visual">
              <img
                src={serviceData.serviceMainImage}
                alt={serviceData.title}
                className="detail-main-image"
              />
            </div>

            {/* Columna 2: Información dividida en 2 partes */}
            <div className="detail-info-section">
              {/* Parte superior: Texto e información */}
              <div className="detail-text-content">
                <div className="detail-category">{serviceData.category}</div>
                <h1 className="detail-title">{serviceData.title}</h1>
                <p className="detail-description">{serviceData.description}</p>

                {/* Información adicional */}
                <div className="service-features">
                  <div className="feature">
                    <h4>{t("servicesDetail.strategy")}</h4>
                    <p>{t("servicesDetail.strategyDescription")}</p>
                  </div>
                </div>
              </div>

              {/* Parte inferior: Proyecto reciente */}
              <div className="detail-recent-project">
                <div className="project-image-container">
                  <img
                    src={serviceData.recentProject.image}
                    alt={serviceData.recentProject.title}
                    className="project-image"
                  />
                  {/* Overlay con información superpuesta */}
                  <div className="project-overlay">
                    <span className="project-label">
                      {t("servicesDetail.recentWork")}
                    </span>
                    <h3 className="project-title2">
                      {serviceData.recentProject.title}
                    </h3>
                    <p className="project-description">
                      {serviceData.recentProject.description}
                    </p>

                    {/* Flecha indicadora de click */}
                    <div className="click-indicator">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 3: Botón siguiente servicio */}
            <div className="detail-navigation">
              <button
                className="next-service-btn"
                onClick={handleNextService}
                aria-label="Next service"
              >
                <img
                  src={NextServiceIcon}
                  alt="Next"
                  className="next-service-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </main>
      <br />
      <Footer />
    </div>
  );
};

export default ServicesDetail;