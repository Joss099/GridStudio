// hooks/useProjects.js
import { useTranslation } from 'react-i18next';
import { projects } from './projectsData';

export const useProjects = () => {
  const { i18n } = useTranslation();

  const getProjectsData = () => {
    const currentLang = i18n.language || 'en';
    const isSpanish = currentLang.startsWith('es');

    const projectsObject = {};
    
    projects.forEach(project => {
      const langData = isSpanish ? project.es : project.en;
      
      projectsObject[project.id] = {
        id: project.id,
        title: isSpanish && project.title_es ? project.title_es : project.title,
        category: project.category,
        overview: langData.overview,
        capability: langData.capability,
        team: langData.team,
        achievements: langData.achievements,
        image: project.images[0],
        images: project.images
      };
    });

    return projectsObject;
  };

  const getProjectById = (id) => {
    const projects = getProjectsData();
    return projects[id];
  };

  const getAllProjectsArray = () => {
    return Object.values(getProjectsData());
  };

  return { 
    getProjectsData, 
    getProjectById, 
    getAllProjectsArray 
  };
};