// hooks/useProjects.js
import { useTranslation } from 'react-i18next';
import { projectImages } from '../data/projectsData';

export const useProjects = () => {
  const { t } = useTranslation();

  //Mapeo de imágenes por ID de proyecto real
    const imageMap = {
      // Visual identity
      1: [projectImages.VisualIdentityWork1, projectImages.VisualIdentityIMG1, projectImages.VisualIdentityIMG2],
      2: [projectImages.VisualIdentityWork2],

      // Web Design
      3: [projectImages.WebDesignWork1, projectImages.WebDesignIMG1],

      //Social Media
      4: [projectImages.SocialMediaWork1, projectImages.SocialMediaIMG1],

      //Concept Art
      5: [projectImages.ConceptArtWork1, projectImages.ConceptArtIMG1],
      6: [projectImages.ConceptArtWork2, projectImages.ConceptArtIMG2],


      // 3: [projectImages.work3, projectImages.work_3],
      // 4: [projectImages.work4],
      // 5: [projectImages.work5],
    };
  

  // Mapeo de imágenes por ID de proyecto
  // const imageMap = {
  //   1: [projectImages.work1, projectImages.work_2],
  //   2: [projectImages.work2, projectImages.work4],
  //   3: [projectImages.work3, projectImages.work_3],
  //   4: [projectImages.work4],
  //   5: [projectImages.work5],
  //   6: [projectImages.WebDesignWork1, projectImages.WebDesignIMG1],
  //   7: [projectImages.VisualIdentityWork1],
  // };

  const getProjectsData = () => {
    const projects = [1, 2, 3, 4, 5, 6].map(id => ({
      id,
      title: t(`projects.project${id}.title`),
      category: t(`projects.project${id}.category`),
      overview: t(`projects.project${id}.overview`),
      capability: t(`projects.project${id}.capability`),
      team: t(`projects.project${id}.team`),
      achievements: t(`projects.project${id}.achievements`),
      image: imageMap[id][0],
      images: imageMap[id]
    }));

    // Convertir a objeto con IDs como keys (igual que tu estructura original)
    const projectsObject = {};
    projects.forEach(project => {
      projectsObject[project.id] = project;
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