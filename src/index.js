import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './header.js'
import { ExperienceSection } from './experience.js'
import { ProjectsSection } from './projects.js'

import './css/index.css'

import background_image from './images/background_image.jpg'
import profile_image from './images/profile.jpeg'

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
