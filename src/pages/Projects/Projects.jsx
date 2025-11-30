import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Projects.css";
import { useTranslation } from "react-i18next";
// Importar el hook en lugar del data directo
import { useProjects } from "../../data/useProjects";   

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { getAllProjectsArray } = useProjects();
  const { t } = useTranslation();

  // Usar el hook para obtener los proyectos
  const allProjects = getAllProjectsArray();

  // Obtener todas las categorías únicas
  const categories = [
    "All",
    ...new Set(allProjects.map((project) => project.category)),
  ];

  // Filtrar proyectos por categoría
  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-page">
      <Header />
      <main className="projects-main">
        <div className="container">
          <div className="projects-header">
            <h1> {t("projects.title")}</h1>
            <p> {t("projects.description")}</p>
          </div>

          {/* Filtro de categorías */}
          <div className="categories-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="project-link"
              >
                <div className="project-card">
                  <img src={project.image} alt={project.title} />
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <span>{project.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mensaje si no hay proyectos en la categoría */}
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in {activeCategory} category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;