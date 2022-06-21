import './css/projects.css'
import './css/mobile/projects.css'

import terrain_gen_image from './images/forest.png'
import gameboy_image from './images/TetrisGame.png'

import projects_data from './data/projects.json'


const project_images = {
    "terrain_gen_image": terrain_gen_image,
    "gameboy_image": gameboy_image
}


export {ProjectsSection}


function ProjectsSection(props) {
    var projects = projects_data.map(
        (project, i) => <ProjectsSectionContent key={project.title} title={project.title} image={project_images[project.image]} description={project.description} tech={project.tech} link={project.github} />
    );

    return (
        <div id="projects" className="body-section">
            <h1 className="body-section-header">Projects</h1>
            <hr></hr>
            {projects}
        </div>
    );
}

function ProjectsSectionContent(props) {
    var tech = props.tech.map(
        (t, i) => <div key={i}>{t}</div>
    );

    return (
        <div className="body-projects-section">
            <div className="body-projects-section-content">
                <h1 className="body-projects-section-header">{props.title}</h1>
                <a href={props.link}><div className="body-projects-github-button">GitHub</div></a>
            </div>
            <br />
            <div className="body-projects-section-content">
                <div className="body-projects-section-content-col">
                    <img src={props.image}></img>
                </div>
                <div className="body-projects-section-content-col">
                    <div className="body-projects-section-text">
                        <p>
                            {props.description}
                        </p>
                        <div className="body-projects-section-text-tech">
                            {tech}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}