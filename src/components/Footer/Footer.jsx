import React from "react";
import "./Footer.css";
// Importar imágenes
import facebookIcon from "../../assets/images/services/facebook.svg";
import twitterIcon from "../../assets/images/services/Twitter.svg";
import instagramIcon from "../../assets/images/services/Instagram.svg";
import tiktokicon from "../../assets/images/services/Tiktok.svg";
import { useTranslation } from "react-i18next";

const Footer = ({ id }) => {
    const { t } = useTranslation();
      const sociales = [
    {
      id: 1,
      nombre: "facebook",
      url: "https://www.facebook.com/profile.php?id=61581489309416",
      icono: facebookIcon,
    },
    {
      id: 2,
      nombre: "twitter",
      url: "https://twitter.com",
      icono: twitterIcon,
    },
    {
      id: 3,
      nombre: "instagram",
      url: "https://www.instagram.com/grid.sm/",
      icono: instagramIcon,
    },
    {
      id: 4,
      nombre: "tiktok",
      url: "https://tiktok.com",
      icono: tiktokicon,
    },
  ];

  return (
    <footer id={id} className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Columna 1: Logo y descripción */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/gridlogo.png" alt="Grid Studio" className="logo-img" />
              <span className="footer-brand">Grid Studio</span>
            </div>
            <p className="footer-description">
              {t("footer.description")}
            </p>
            <div className="social-icons">
              {sociales.map((social) => (
                <a key={social.id} href={social.url}>
                  <img src={social.icono} alt="" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Extra links */}
          <div className="footer-section">
            <h3 className="footer-title"> {t("footer.extraLinks")}</h3>
            <div className="footer-links">
              <a
                href="https://www.behance.net/gridstudiosm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </div>
          </div>

          {/* Columna 3: Contact info */}
          <div className="footer-section">
            <h3 className="footer-title"> {t("footer.contact")}</h3>
            <div className="footer-contact">
              <a href="mailto:gridstudiosm@gmail.com">gridstudiosm@gmail.com</a>
              <a href="tel:+50433112233">(504) 3311-2233</a>
              <a href="tel:+32244112233">(322) 4411-2233</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2025 Grid Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
