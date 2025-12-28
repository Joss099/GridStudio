// data/projectsData.js

//Visual Identity
//Project1
import VisualIdentityWork1 from "../assets/images/VisualIdentity-Work1.webp";
import VisualIdentityIMG1 from "../assets/images/VisualIdentity-IMG1.webp";
import VisualIdentityIMG2 from "../assets/images/VisualIdentity-IMG2.webp";
// Project2
import VisualIdentityWork2 from "../assets/images/VisualIdentity-Work2.webp";

//WebDesign
//Project1
import WebDesignWork1 from "../assets/images/WebDesign-Work1.webp";
import WebDesignIMG1 from "../assets/images/WebDesign-IMG1.webp";

//Social Media
//Project1
import SocialMediaWork1 from "../assets/images/SocialMedia-Work1.webp";
import SocialMediaIMG1 from "../assets/images/SocialMedia-IMG1.webp";

//Concept Art
//Project1
import ConceptArtWork1 from "../assets/images/ConceptArt-Work1.webp";
import ConceptArtIMG1 from "../assets/images/ConceptArt-IMG1. webp";

//Project2
import ConceptArtWork2 from "../assets/images/ConceptArt-Work2.webp";
import ConceptArtIMG2 from "../assets/images/ConceptArt2-IMG1.webp";

// Exportamos solo las imágenes para usarlas en cualquier idioma  
export const projectImages = {
 WebDesignWork1, WebDesignIMG1, VisualIdentityWork1, VisualIdentityIMG1, VisualIdentityIMG2, VisualIdentityWork2, SocialMediaWork1, SocialMediaIMG1, ConceptArtWork1, ConceptArtIMG1, ConceptArtWork2, ConceptArtIMG2 
};  

export const projects = [
  {
    id: 1,
    title: "Pink Flash",
    category: "Visual identity",
    images: [VisualIdentityWork1, VisualIdentityIMG1, VisualIdentityIMG2],
    en: {
      overview: "This represents Project One. You are the source of your own work and you can be found in the book. Our own work is also included in the book, and our business has been done with many other sources.",
      capability: "Our Web Design Systems will find the key components to successful brand identity.",
      team: "Web Design Team: Focus on creating memorable visual identities and brand experiences.",
      achievements: "During the last year, we have successfully launched 10+ brand identities with 95% client satisfaction."
    },
    es: {
      overview: "This represents Project One. You are the source of your own work and you can be found in the book. Our own work is also included in the book, and our business has been done with many other sources.",
      capability: "Our Branding Systems will find the key components to successful brand identity.",
      team: "Branding Team: Focus on creating memorable visual identities and brand experiences.",
      achievements: "During the last year, we have successfully launched 10+ brand identities with 95% client satisfaction."
    }
  },
  {
    id: 2,
    title: "Libreros",
    category: "Visual identity",
    images: [VisualIdentityWork2],
    en: {
      overview: "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
      capability: "Our Web Design Systems create intuitive and beautiful user interfaces.",
      team: "Web Design Team: Specialists in UI/UX design and front-end development.",
      achievements: "Delivered 15+ responsive websites with 40% increase in user engagement."
    },
    es: {
      overview: "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
      capability: "Our Web Design Systems create intuitive and beautiful user interfaces.",
      team: "Web Design Team: Specialists in UI/UX design and front-end development.",
      achievements: "Delivered 15+ responsive websites with 40% increase in user engagement."
    }
  },
  {
    id: 3,
    title: "Online shopping", // EN title
    title_es: "Tienda en línea", // ES title
    category: "Development",
    images: [WebDesignWork1, WebDesignIMG1],
    en: {
      overview: "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
      capability: "Our Web Design Systems create intuitive and beautiful user interfaces.",
      team: "Web Design Team: Specialists in UI/UX design and front-end development.",
      achievements: "Delivered 15+ responsive websites with 40% increase in user engagement."
    },
    es: {
      overview: "This represents Project Three. We build robust and scalable applications using cutting-edge technologies.",
      capability: "Our Development Systems ensure high-performance and maintainable code.",
      team: "Development Team: Experts in React, Node.js, and modern web technologies.",
      achievements: "Built 20+ applications with 99.9% uptime and excellent performance metrics."
    }
  },
  {
    id: 4,
    title: "Ficohsa",
    category: "Social media",
    images: [SocialMediaWork1, SocialMediaIMG1],
    en: {
      overview: "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
      capability: "Our Web Design Systems create intuitive and beautiful user interfaces.",
      team: "Web Design Team: Specialists in UI/UX design and front-end development.",
      achievements: "Delivered 15+ responsive websites with 40% increase in user engagement."
    },
    es: {
      overview: "This represents Project Four. We develop comprehensive marketing strategies that drive growth.",
      capability: "Our Marketing Systems analyze data to create effective campaigns.",
      team: "Marketing Team: Data-driven specialists in digital marketing and analytics.",
      achievements: "Increased client ROI by 150% through targeted marketing campaigns."
    }
  },
  {
    id: 5,
    title: "Robot",
    category: "Concept Art",
    images: [ConceptArtWork1, ConceptArtIMG1],
    en: {
      overview: "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
      capability: "Our Web Design Systems create intuitive and beautiful user interfaces.",
      team: "Web Design Team: Specialists in UI/UX design and front-end development.",
      achievements: "Delivered 15+ responsive websites with 40% increase in user engagement."
    },
    es: {
      overview: "This represents Project Five. We design user-centered experiences that solve real problems.",
      capability: "Our UI/UX Systems focus on user research and iterative design.",
      team: "UI/UX Team: User experience researchers and interface designers.",
      achievements: "Improved user satisfaction by 60% through redesigned user flows."
    }
  },
  {
    id: 6,
    title: "Lost", // EN
    title_es: "Perdido", // ES
    category: "Concept Art",
    images: [ConceptArtWork2, ConceptArtIMG2],
    en: {
      overview: "This represents Project Two. We create stunning web experiences that captivate users and drive engagement.",
      capability: "Our Web Design Systems create intuitive and beautiful user interfaces.",
      team: "Web Design Team: Specialists in UI/UX design and front-end development.",
      achievements: "Delivered 15+ responsive websites with 40% increase in user engagement."
    },
    es: {
      overview: "This represents Project Six. We create native and cross-platform mobile applications.",
      capability: "Our Mobile Systems deliver seamless experiences across all devices.",
      team: "Mobile Team: iOS and Android developers with focus on performance.",
      achievements: "Launched 8 mobile apps with 4.5+ star ratings on app stores."
    }
  }
];
