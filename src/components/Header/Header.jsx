import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Header.css";
import { useTranslation } from "react-i18next"; 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();     
  const location = useLocation();
  const { t } = useTranslation();

  // Verificar si estamos en la página Home
  const isHomePage = location.pathname === "/";

  const handleNavigation = (section) => {
    if (isHomePage) {
      // En Home, hacer scroll a la sección
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // En otras páginas, navegar a Home con hash
      navigate(`/#${section}`);
      // Y hacer scroll después de navegar
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handlePortfolioClick = () => {
    if (isHomePage) {
      // En Home, hacer scroll a portfolio
      const element = document.getElementById("portfolio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // En otras páginas, ir a la página de projects
      navigate("/projects");
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="logo">
              <img src="/gridlogo.png" alt="Grid" className="logo-img" />
              <h4 className="header_name">GRID</h4>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="nav-desktop">
            <Link to="/">{t("header.navDesktop.home")}</Link>
            <a
              href={isHomePage ? "#portfolio" : "/#portfolio"}
              onClick={(e) => {
                e.preventDefault();
                handlePortfolioClick();
              }}
            >
              {t("header.navDesktop.portfolio")}
            </a>
            <a
              href={isHomePage ? "#services" : "/#services"}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("services");
              }}
            >
              {t("header.navDesktop.services")}
            </a>
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("contact");
              }}
            >
              {t("header.navDesktop.contact")}
            </a>
            <LanguageSwitcher />      
          </nav>

          {/* Menú Hamburguesa */}
          <div className="header-actions">
            <button
              className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Menú Mobile */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <nav className="nav-mobile">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              {t("header.navMobile.home")}
            </Link>
            <a
              href={isHomePage ? "#portfolio" : "/#portfolio"}
              onClick={(e) => {
                e.preventDefault();
                handlePortfolioClick();
              }}
            >
              {t("header.navMobile.portfolio")}
            </a>
            <a
              href={isHomePage ? "#services" : "/#services"}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("services");
              }}
            >
              {t("header.navMobile.services")}
            </a>
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("contact");
              }}
            >
              {t("header.navMobile.contact")}
            </a>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
