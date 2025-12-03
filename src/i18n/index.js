// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones en inglés
const en = {
  translation: {

    //Header 

    "header.navDesktop.home": "Home",
    "header.navDesktop.portfolio": "Portfolio",
    "header.navDesktop.services": "Services",
    "header.navDesktop.contact": "Contact",
    "header.navMobile.home": "Home",
    "header.navMobile.portfolio": "Portfolio",
    "header.navMobile.services": "Services",
    "header.navMobile.contact": "Contact",

    // Hero Section
    "hero.line1": "We create",
    "hero.line2": "digital tools", 
    "hero.line3": "that make your",
    "hero.line4": "business flow",
    "hero.cta": "Work with us",
    
    // Services Section
    "services.title": "Services",
    "services.visual": "Visual identity",
    "services.social": "Social media design",
    "services.webdev": "Web development",
    "services.advertising": "Advertising design", 
    "services.webdesign": "Web design",
    "services.maintenance": "Website Maintenance",
    "services.description": "Loren itspum dest aun de maunsi nandu tren dow",
    
    //Recent Work
    "recentWork.title": "Recent Work", 
     "recentWork.seeMore": "See More", 
    
    
    // Navigation (si necesitas)
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    //Footer
    "footer.title": "Contact us",
    "footer.description": "Loren itspum dest aun de maunsi nandu tren dow",
    "footer.cta": "Contact us",
    "footer.extraLinks": "Extra links",
    "footer.contact": "Contact",

    //Projects
    "projects.title": "Projects",
    "projects.description": "Discover our complete portfolio",

    //Project Detail
    "project.generalOverview": "General Overview",
    "project.coreCapability": "Core Capability",
    "project.team": "Team",
    "project.keyAchievements": "Key Achievements",
    "project.projectNotFound": "Project not found",
    "project.previousProject": "← Previous project",
    "project.nextProject": "Next project →",

    //Projects
    "projects": {
      "project1": {
        "title": "Pink Flash",
        "category": "Visual identity", 
        "overview": "This represents Project One. You are the source of your own work and you can be found in the book. Our own work is also included in the book, and our business has been done with many other sources.",
        "capability": "Our Web Design Systems will find the key components to successful brand identity.",
        "team": "Web Design Team: Focus on creating memorable visual identities and brand experiences.",
        "achievements": "During the last year, we have successfully launched 10+ brand identities with 95% client satisfaction."
      },
      "project2": {
        "title": "Libreros", 
        "category": "Visual identity",
        "overview": "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
        "capability": "Our Web Design Systems create intuitive and beautiful user interfaces.",
        "team": "Web Design Team: Specialists in UI/UX design and front-end development.",
        "achievements": "Delivered 15+ responsive websites with 40% increase in user engagement."
      },
            "project3": {
        "title": "Online shopping", 
        "category": "Development",
        "overview": "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
        "capability": "Our Web Design Systems create intuitive and beautiful user interfaces.",
        "team": "Web Design Team: Specialists in UI/UX design and front-end development.",
        "achievements": "Delivered 15+ responsive websites with 40% increase in user engagement."
      },
            "project4": {
        "title": "Ficohsa", 
        "category": "Social media",
        "overview": "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
        "capability": "Our Web Design Systems create intuitive and beautiful user interfaces.",
        "team": "Web Design Team: Specialists in UI/UX design and front-end development.",
        "achievements": "Delivered 15+ responsive websites with 40% increase in user engagement."
      },
            "project5": {
        "title": "Robot", 
        "category": "Concept Art",
        "overview": "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
        "capability": "Our Web Design Systems create intuitive and beautiful user interfaces.",
        "team": "Web Design Team: Specialists in UI/UX design and front-end development.",
        "achievements": "Delivered 15+ responsive websites with 40% increase in user engagement."
      },
            "project6": {
        "title": "Lost", 
        "category": "Concept Art",
        "overview": "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
        "capability": "Our Web Design Systems create intuitive and beautiful user interfaces.",
        "team": "Web Design Team: Specialists in UI/UX design and front-end development.",
        "achievements": "Delivered 15+ responsive websites with 40% increase in user engagement."
      },  
    },
        // Services Detail
    "servicesDetail": {
      "visualIdentity": "Visual Identity",
      "socialMedia": "Social Media Design", 
      "webDevelopment": "Web Development",
      "advertising": "Advertising Design",
      "webDesign": "Web Design",
      "maintenance": "Website Maintenance",
      
      "branding": "Branding",
      "socialMediaCategory": "Social Media",
      "development": "Development",
      "design": "Design",
      "uiux": "UI/UX",
      "maintenanceCategory": "Maintenance",
      
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      
      "recentWork": "Recent Work",
      "viewInPortfolio": "View in portfolio",
      
      "strategy": "Strategy",
      "strategyDescription": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, voluptas delectus. Recusandae iste aspernatur eius",
      
      "project1": "Visual Identity Example",
      "project2": "Social Media Project", 
      "project3": "Web Development Project",
      "project4": "Advertising Campaign",
      "project5": "UI/UX Design Project",
      "project6": "Maintenance Project"
    },
      // Pricing Section
    "pricing": {
      "title": "Pricing",
      "mainTitle": "Plans that works best for your",
      "highlight": "business",
      
      "plans": {
        "starter": {
          "title": "Starter",
          "subtitle": "Perfect for small business",
          "price": "$99",
          "buttonText": "Get Started",
          "features": [
            "Basic Web Design",
            "Visual Identity",
            "1 Page Website",
            "Standard Hosting for 1 Domain",
            "Basic SEO Optimization",
            "1 Revision per Month"
          ]
        },
        "standard": {
          "title": "Standard", 
          "subtitle": "Designed for growing businesses",
          "price": "$180",
          "buttonText": "Get Started",
          "features": [
            "Advanced Web Design",
            "Complete Visual Identity",
            "3 Pages Website",
            "Standard Hosting for 2 Domains",
            "Advanced SEO Optimization",
            "3 Revisions per Month"
          ]
        },
        "premium": {
          "title": "Premium",
          "subtitle": "Tailored for large enterprises", 
          "price": "$390",
          "buttonText": "Get Started",
          "features": [
            "Full Custom Web Design",
            "Premium Visual Identity",
            "5 Pages Website",
            "Premium Hosting for 3 Domains",
            "Premium SEO Optimization",
            "Unlimited Revisions"
          ]
        }
      },
      
      "uiTexts": {
        "whatIncludes": "What Includes",
        "hideDetails": "Hide Details",
        "showDetails": "Show Details"
      }
    }
  }
};

//IDIOMA  ESPAÑOL

// Traducciones en español
const es = {
  translation: {

    //Header
    "header.navDesktop.home": "Inicio",
    "header.navDesktop.portfolio": "Portafolio",
    "header.navDesktop.services": "Servicios",
    "header.navDesktop.contact": "Contacto",
    "header.navMobile.home": "Inicio",
    "header.navMobile.portfolio": "Portafolio",
    "header.navMobile.services": "Servicios",
    "header.navMobile.contact": "Contacto",


    // Hero Section
    "hero.line1": "Creamos",
    "hero.line2": "herramientas digitales",
    "hero.line3": "que hacen que tu", 
    "hero.line4": "negocio fluya",
    "hero.cta": "Trabaja con nosotros",
    
    // Services Section
    "services.title": "Servicios",
    "services.visual": "Identidad visual",
    "services.social": "Diseño para redes sociales",
    "services.webdev": "Desarrollo web",
    "services.advertising": "Diseño publicitario",
    "services.webdesign": "Diseño web", 
    "services.maintenance": "Mantenimiento web",
    "services.description": "Texto descriptivo en español aquí",

    //Recent Work
    "recentWork.title": "Trabajo reciente", 
    "recentWork.seeMore": "Ver más", 
    
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios", 
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",

    //Footer
    "footer.title": "Contact us",
    "footer.description": "Loren itspum dest aun de maunsi nandu tren dow",
    "footer.extraLinks": "Links extras",
    "footer.contact": "Contacto",

    //Projects
    "projects.title": "Proyectos",
    "projects.description": "Descubre nuestro portafolio completo",

    //Project Detail
    "project.generalOverview": "Descripción General",
    "project.coreCapability": "Capacidad Central",
    "project.team": "Equipo",
    "project.keyAchievements": "Logros Clave",
    "project.projectNotFound": "Proyecto no encontrado",
    "project.previousProject": "← Proyecto anterior",
    "project.nextProject": "Proyecto siguiente →",   
  

    //Projects
  "projects": {
    //Proyecto 1

    "project1": {
      "title": "Pink Flash", 
      "category": "Visual identity", 
      "overview": "This represents Project One. You are the source of your own work and you can be found in the book. Our own work is also included in the book, and our business has been done with many other sources.",
      "capability": "Our Branding Systems will find the key components to successful brand identity.",
      "team": "Branding Team: Focus on creating memorable visual identities and brand experiences.",
      "achievements": "During the last year, we have successfully launched 10+ brand identities with 95% client satisfaction."
    },
    //Proyecto 2
    "project2": {
      "title": "Libreros", 
      "category": "Visual identity",
      "overview": "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
      "capability": "Our Web Design Systems create intuitive and beautiful user interfaces.",
      "team": "Web Design Team: Specialists in UI/UX design and front-end development.",
      "achievements": "Delivered 15+ responsive websites with 40% increase in user engagement."
    },
    //Proyecto 3
    "project3": {
      "title": "Tienda en línea", 
      "category": "Development",
      "overview": "This represents Project Three. We build robust and scalable applications using cutting-edge technologies.",
      "capability": "Our Development Systems ensure high-performance and maintainable code.",
      "team": "Development Team: Experts in React, Node.js, and modern web technologies.",
      "achievements": "Built 20+ applications with 99.9% uptime and excellent performance metrics."
    },
    //Proyecto 4
    "project4": {
      "title": "Ficohsa",
      "category": "Social media",
      "overview": "This represents Project Four. We develop comprehensive marketing strategies that drive growth.",
      "capability": "Our Marketing Systems analyze data to create effective campaigns.",
      "team": "Marketing Team: Data-driven specialists in digital marketing and analytics.",
      "achievements": "Increased client ROI by 150% through targeted marketing campaigns."
    },
    //Proyecto 5
    "project5": {
      "title": "Robot",
      "category": "Concept Art",
      "overview": "This represents Project Five. We design user-centered experiences that solve real problems.",
      "capability": "Our UI/UX Systems focus on user research and iterative design.",
      "team": "UI/UX Team: User experience researchers and interface designers.",
      "achievements": "Improved user satisfaction by 60% through redesigned user flows."
    },
    //Proyecto 6
    "project6": {
      "title": "Perdido",
      "category": "Concept Art",
      "overview": "This represents Project Six. We create native and cross-platform mobile applications.",
      "capability": "Our Mobile Systems deliver seamless experiences across all devices.",
      "team": "Mobile Team: iOS and Android developers with focus on performance.",
      "achievements": "Launched 8 mobile apps with 4.5+ star ratings on app stores."
    },
  },

   //Services Detail
   "servicesDetail": {
      "visualIdentity": "Identidad Visual",
      "socialMedia": "Diseño para Redes Sociales",
      "webDevelopment": "Desarrollo Web", 
      "advertising": "Diseño Publicitario",
      "webDesign": "Diseño Web",
      "maintenance": "Mantenimiento Web",
      
      "branding": "Branding",
      "socialMediaCategory": "Redes Sociales",
      "development": "Desarrollo",
      "design": "Diseño",
      "uiux": "UI/UX",
      "maintenanceCategory": "Mantenimiento",
      
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      
      "recentWork": "Trabajo Reciente",
      "viewInPortfolio": "Ver en portafolio",
      
      "strategy": "Estrategia",
      "strategyDescription": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, voluptas delectus. Recusandae iste aspernatur eius",
      
      "project1": "Ejemplo de Identidad Visual",
      "project2": "Proyecto de Redes Sociales",
      "project3": "Proyecto de Desarrollo Web",
      "project4": "Campaña Publicitaria", 
      "project5": "Proyecto de Diseño UI/UX",
      "project6": "Proyecto de Mantenimiento"
    },

    //Pricing
     "pricing": {
      "title": "Precios",
      "mainTitle": "Planes que funcionan mejor para tu",
      "highlight": "negocio",
      
      "plans": {
        "starter": {
          "title": "Básico",
          "subtitle": "Perfecto para pequeños negocios",
          "price": "$99",
          "buttonText": "Comenzar",
          "features": [
            "Diseño Web Básico",
            "Identidad Visual",
            "Sitio Web de 1 Página",
            "Hosting Estándar para 1 Dominio",
            "Optimización SEO Básica",
            "1 Revisión por Mes"
          ]
        },
        "standard": {
          "title": "Estándar",
          "subtitle": "Diseñado para negocios en crecimiento", 
          "price": "$180",
          "buttonText": "Comenzar",
          "features": [
            "Diseño Web Avanzado",
            "Identidad Visual Completa",
            "Sitio Web de 3 Páginas",
            "Hosting Estándar para 2 Dominios",
            "Optimización SEO Avanzada",
            "3 Revisiones por Mes"
          ]
        },
        "premium": {
          "title": "Premium",
          "subtitle": "Personalizado para grandes empresas",
          "price": "$390", 
          "buttonText": "Comenzar",
          "features": [
            "Diseño Web Personalizado Completo",
            "Identidad Visual Premium",
            "Sitio Web de 5 Páginas",
            "Hosting Premium para 3 Dominios",
            "Optimización SEO Premium",
            "Revisiones Ilimitadas"
          ]
        }
      },
      
      "uiTexts": {
        "whatIncludes": "Qué Incluye",
        "hideDetails": "Ocultar Detalles", 
        "showDetails": "Mostrar Detalles"
      }
    }
  },

  
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      es: es
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;