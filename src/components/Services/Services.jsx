import React, { useEffect } from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

// Importar SVG
import VisualIdentity from "../../assets/images/services/visual.svg";
import SocialMedia from "../../assets/images/services/socialmedia.svg";
import WebDevelopment from "../../assets/images/services/web.svg";
import Advertising from "../../assets/images/services/design.svg";
import WebDesign from "../../assets/images/services/web2.svg";
import Maintenance from "../../assets/images/services/maintenance.svg";
import { useTranslation } from "react-i18next"; 


const Services = ({ id }) => {
    useEffect(() => {
    // Preload de imágenes
    const imageUrls = [
      VisualIdentity,
      SocialMedia,
      WebDevelopment,
      Advertising,
      WebDesign,
      Maintenance
    ];

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };
  const services = [
    {
      id: 1,
      title: t("services.visual"),
      description: "Loren itspum dest aun de maunsi nandu tren dow",
      icon: VisualIdentity,
    },
    {
      id: 2,
      title: t("services.social"),
      description: "Loren itspum dest aun de maunsi nandu tren dow",
      icon: SocialMedia,
    },
    {
      id: 3,
      title:    t("services.webdev"),
      description: "Loren itspum dest aun de maunsi nandu tren dow",
      icon: WebDevelopment,
    },
    {
      id: 4,
      title:    t("services.advertising"),
      description: "Loren itspum dest aun de maunsi nandu tren dow",
      icon: Advertising,
    },
    {
      id: 5,
      title: t("services.webdesign"),
      description: "Loren itspum dest aun de maunsi nandu tren dow",
      icon: WebDesign,
    },
    {
      id: 6,
      title: t("services.maintenance"),
      description: "Loren itspum dest aun de maunsi nandu tren dow",
      icon: Maintenance,
    },
  ];

  return (
    <section id={id} className="services">
      <div className="container">
        <div className="section-header">
          <h2>  {t("services.title")}</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => handleServiceClick(service.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="service-icon">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-svg"
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
