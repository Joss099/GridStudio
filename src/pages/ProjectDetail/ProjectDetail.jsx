import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetail.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Cambiar esta importación:
import { useProjects } from "../../data/useProjects";
import { useTranslation } from "react-i18next"; 

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // Usar el hook en lugar de importar projectsData directamente
  const { getAllProjectsArray, getProjectById } = useProjects();

  // Encontrar el proyecto actual por ID
  const project = getProjectById(parseInt(id));
  const allProjects = getAllProjectsArray();

  // Encontrar índice para navegación
  const currentIndex = allProjects.findIndex(
    (proj) => proj.id === parseInt(id)
  );
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1].id
      : null;
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1].id : null;

  const handleNextProject = () => {
    if (nextProject) {
      navigate(`/projects/${nextProject}`);
    }
  };

  const handlePrevProject = () => {
    if (prevProject) {
      navigate(`/projects/${prevProject}`);
    }
  };

  // Si no encuentra el proyecto
  if (!project) {
    return (
      <div className="project-detail">
        <Header />
        <div className="project-container">
          <h1>{t("projectDetail.projectNotFound")}</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Header />
      <div className="project-container">
        {/* Header con título */}
        <header className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-category">{project.category}</p>
        </header>

        {/* Sección de texto en GRID horizontal */}
        <div className="project-text-grid">
          <div className="text-column">
            <h2 className="section-title"> {t("project.generalOverview")}</h2>
            <p className="section-text">{project.overview}</p>
          </div>

          <div className="text-column">
            <h2 className="section-title"> {t("project.coreCapability")}</h2>
            <p className="section-text">{project.capability}</p>
          </div>

          <div className="text-column">
            <h2 className="section-title"> {t("project.team")}</h2>
            <p className="section-text">{project.team}</p>
          </div>

          <div className="text-column">
            <h2 className="section-title"> {t("project.keyAchievements")}</h2>
            <p className="section-text">{project.achievements}</p>
          </div>
        </div>

        {/* Sección de imágenes */}
        <div className="project-images-section">
          <div className="images-grid">
            {project.images.map((image, index) => (
              <div key={index} className="project-image-container">
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="project-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <footer className="project-navigation">
          <div className="nav-buttons">
            <button
              className={`nav-btn prev-btn ${!prevProject ? "disabled" : ""}`}
              onClick={handlePrevProject}
              disabled={!prevProject}
            >
              {t("project.previousProject")}
            </button>

            <button
              className={`nav-btn next-btn ${!nextProject ? "disabled" : ""}`}
              onClick={handleNextProject}
              disabled={!nextProject}
            >
              {t("project.nextProject")}
            </button>
          </div>
        </footer>
      </div>
      <Footer />
    </div>
  );


};

export default ProjectDetail;