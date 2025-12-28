import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import "./ServicesDetail.css";

import { useTranslation } from "react-i18next";
import { useProjects } from "../../data/useProjects";
import ImageLoader from "../../components/ImageLoader/ImageLoader"; // Import ImageLoader

import NextServiceIcon from "../../assets/images/services/arrow.svg";
import VisualMainImage from "../../assets/images/Visual.webp";
import WebMainImage from "../../assets/images/Web.webp";
import SocialMainImage from "../../assets/images/Social.webp";
import AdvertisingMainImage from "../../assets/images/Advertising.webp";
import WebDesignMainImage from "../../assets/images/WebDesign.webp";
import MaitenanceMainImage from "../../assets/images/Maintenance.webp";

const ServicesDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();
  const { getAllProjectsArray } = useProjects();

  // Obtener el servicio actual basado en el ID
  const serviceId = id ? parseInt(id) : 1;

  // Lógica para obtener el proyecto relevante
  const allProjects = getAllProjectsArray();

  const getRelevantProject = (sId) => {
    // Definir categorías de proyecto deseadas para cada ID de servicio
    const categoryMapping = {
        1: "Visual identity",
        2: "Social media",
        3: "Development",
        4: "Social media", // Publicidad -> Social media
        5: "Development",     // Diseño Web -> Development o Visual Identity
        6: "Development"      // Mantenimiento -> Development
    };

    const targetCategory = categoryMapping[sId] || "Visual identity";
    
    // Buscar el primer proyecto que coincida con la categoría
    const foundProject = allProjects.find(p => p.category === targetCategory);
    
    // Si no encuentra, devolver el primero general (fallback)
    return foundProject || allProjects[0];
  };

  const relevantProject = getRelevantProject(serviceId);

  // Manejador para ir al detalle del proyecto
  const handleProjectClick = () => {
    if (relevantProject) {
      navigate(`/projects/${relevantProject.id}`);
    }
  };

  const allServices = {
    1: {
      title: t("servicesDetail.visualIdentity"),
      category: t("servicesDetail.branding"),
      description: t("servicesDetail.visualDesc"),
      strategy: t("servicesDetail.visualStrategy"),
      serviceMainImage: VisualMainImage,
    },
    2: {
      title: t("servicesDetail.socialMedia"),
      category: t("servicesDetail.socialMediaCategory"),
      description: t("servicesDetail.socialDesc"),
      strategy: t("servicesDetail.socialStrategy"),
      serviceMainImage: SocialMainImage,
    },
    3: {
      title: t("servicesDetail.webDevelopment"),
      category: t("servicesDetail.development"),
      description: t("servicesDetail.webDevDesc"),
      strategy: t("servicesDetail.webDevStrategy"),
      serviceMainImage: WebMainImage,
    },
    4: {
      title: t("servicesDetail.advertising"),
      category: t("servicesDetail.design"),
      description: t("servicesDetail.advertisingDesc"),
      strategy: t("servicesDetail.advertisingStrategy"),
      serviceMainImage: AdvertisingMainImage,
    },
    5: {
      title: t("servicesDetail.webDesign"),
      category: t("servicesDetail.uiux"),
      description: t("servicesDetail.webDesignDesc"),
      strategy: t("servicesDetail.webDesignStrategy"),
      serviceMainImage: WebDesignMainImage,
    },
    6: {
      title: t("servicesDetail.maintenance"),
      category: t("servicesDetail.maintenanceCategory"),
      description: t("servicesDetail.maintenanceDesc"),
      strategy: t("servicesDetail.maintenanceStrategy"),
      serviceMainImage: MaitenanceMainImage,
    },
  };

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
              <ImageLoader
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
                    <p>{serviceData.strategy}</p>
                  </div>
                </div>
              </div>

              {/* Parte inferior: Proyecto reciente */}
              <div 
                className="detail-recent-project" 
                onClick={handleProjectClick}
                style={{ cursor: "pointer" }}
              >
                <div className="project-image-container">
                  <ImageLoader
                    src={relevantProject.image}
                    alt={relevantProject.title}
                    className="project-image"
                  />
                  {/* Overlay con información superpuesta */}
                  <div className="project-overlay">
                    <span className="project-label">
                      {t("servicesDetail.recentWork")}
                    </span>
                    <h3 className="project-title2">
                      {relevantProject.title}
                    </h3>
                    <p className="project-description">
                      {relevantProject.overview ? (relevantProject.overview.length > 80 ? relevantProject.overview.substring(0, 80) + "..." : relevantProject.overview) : t("servicesDetail.viewInPortfolio")}
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