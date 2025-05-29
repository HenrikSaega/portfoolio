import { useState } from "react";
import projects from "../utils/projectsData";
import "../styles/projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
        <div className="projektid-container">
            <div className="projektid-content-width">
                <div className="projektid-tekst">
                    <h1 className="no-select">PROJECTS</h1>
                </div>
            </div>

            <div className="projektid-grid-container">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="projektid-grid-item no-select"
                    onClick={() => openModal(project)}>
                    <p>{project.title}</p>
                    <img src={project.image} alt={project.title} className="grid-item-image" />
                </div>
            ))}
            </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-grid">
              <div className="modal-left">
                <img src={selectedProject.image} alt="Project preview" />
              </div>
              <div className="modal-right">
                <h2>{selectedProject.title}</h2>
                <p><strong>CATEGORY:</strong> {selectedProject.category}</p>
                <p><strong>RELEASE DATE:</strong> {selectedProject.releaseDate}</p>
                <p>{selectedProject.description}</p>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                {selectedProject.live && (
                    <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-button"
                    >
                        LIVE
                    </a>
                )}
              </div>
            </div>
            <div className="modal-gallery">
              {selectedProject.gallery.map((img, i) => (
                <img key={i} src={img} alt={`Preview ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2025 Kõik õigused kaitstud</p>
      </footer>
    </>
  );
};

export default Projects;
