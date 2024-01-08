import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {category, imageURL, title, description, projectLink} = projectDetails
  return (
    <>
      <div className="project-item-container">
        <div className="project-content-container">
          <h1 className="project-title">{title}</h1>
          <p className="project-category">{category}</p>
          <p className="project-description">{description}</p>
          <a href={projectLink} target="_blank" rel="noreferrer">
            <button type="button" className="view-project-button">
              View Project
            </button>
          </a>
        </div>
        <img src={imageURL} className="project-image" alt="projectImage" />
      </div>
    </>
  )
}

export default ProjectItem
