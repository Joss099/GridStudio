import React from "react";
import "./RecentWork.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Importar el hook en lugar del data directo
import { useProjects } from "../../data/useProjects"; 
import { useTranslation } from "react-i18next"; 

const RecentWork = ({ id }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { getAllProjectsArray } = useProjects();

  const handleSeeAllProjects = () => {
    navigate("/projects");
  };

  // Usar el hook para obtener los proyectos (YA VIENEN TRADUCIDOS)
  const projects = getAllProjectsArray();

  return (
    <section id={id} className="recent-work">
      <div className="container">
        <div className="section-header">
          <h2>{t("recentWork.title")}</h2>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="project-link"
            >
              <div className="work-item">
                <div className="work-image">
                  <img src={project.image} alt={project.title} /> {/* ← Ya traducido */}
                  <div className="work-overlay">
                    <div className="work-info">
                      <h3>{project.title}</h3> {/* ← Ya traducido */}                               
                      <span>{project.category}</span> {/* ← Ya traducido */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="button-more">
          <button onClick={handleSeeAllProjects} className="btn btn-secondary">
            {t("recentWork.seeMore")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;