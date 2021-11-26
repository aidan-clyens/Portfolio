import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './header.js'
import { ExperienceSection } from './experience.js'

import './index.css'

import background_image from './images/background_image.jpg'
import profile_image from './images/profile.jpeg'
import terrain_gen_image from './images/forest.png'

import linkedin_icon from './images/linkedin.png'
import github_icon from './images/github.png'
import email_icon from './images/email.png'

import about_data from './data/about.json'


function HomeSection(props) {
    return (
        <div className="body-section-home">
            <img className="home-background" src={background_image} />
            <img className="home-profile" src={profile_image} />
            <div className="home-intro-text">
                <p>Hi! My name is</p>
                <p id="name">Aidan Clyens</p>
                <p>I am a junior software engineer and recent graduate from the University of Waterloo.</p>
                <div className="home-intro-icons">
                    <a href="https://www.linkedin.com/in/aidan-clyens/"><img src={linkedin_icon} /></a>
                    <a href="https://github.com/aidan-clyens"><img src={github_icon} /></a>
                    <a href="#"><img src={email_icon} /></a>
                </div>
            </div>
        </div>
    );
}

function AboutSection(props) {
    var content = about_data.map((about) => <p>{about}</p>);

    return (
        <div id="about" className="body-section">
            <h1>About</h1>
            <hr></hr>
            <div className="body-section-content">
                {content}
            </div>
        </div>
    );
}

function ProjectsSection(props) {
    return (
        <div id="projects" className="body-section">
            <h1>Projects</h1>
            <hr></hr>
            <ProjectsSectionContent title="Procedural Terrain Generator" image={terrain_gen_image} />
        </div>
    );
}

function ProjectsSectionContent(props) {
    return (
        <div className="body-projects-section">
            <div className="body-projects-section-content">
                <h1>{props.title}</h1>
                <div className="body-projects-github-button">GitHub</div>
            </div>
            <br />
            <div className="body-projects-section-content">
                <div className="body-projects-section-content-col">
                    <img src={terrain_gen_image}></img>
                </div>
                <div className="body-projects-section-content-col">
                    <div className="body-projects-section-text">
                        This is a Procedural Terrain Generator for use in Unity projects. Using random noise algorithms, physics simulation, random object placement, custom materials, textures, and colours an endless variety of worlds can be created using this tool.
                    </div>
                </div>
            </div>
        </div>
    );
}

function Body(props) {
    return (
        <div className="body">
            <HomeSection />
            <div className="body-content">
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
            </div>
        </div>
    );
}

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header />
                <Body />
            </div>
        );
    }
}


ReactDOM.render(
    <Home />,
    document.getElementById("root")
);
