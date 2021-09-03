const ProjectCard =({title, url, languages, imagelink, description}) => {
    return (
        <div className="card" style={{marginBottom : "20px", marginTop:"20px"}}>
            <img src={imagelink} alt="project_image" />
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><a href={url} className="btn btn-outline-default" target="_blank" rel="noreferrer">View Project</a></p>
            </div>
        </div>
    )
}

export default ProjectCard;