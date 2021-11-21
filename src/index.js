import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import background_image from './background_image.jpg'
import profile_image from './profile.jpeg'


function HeaderItem(props) {
    return (
        <a className="header-item" href={props.link}>{props.text}</a>
    );
}

function HeaderItemTitle(props) {
    return (
        <h1><a className="header-item-title" href={props.link}>{props.text}</a></h1>
    );
}

function Header(props) {
    return (
        <header className="header">
            <HeaderItemTitle text="Aidan Clyens" link="#" />
            <nav>
                <HeaderItem text="About" link="#about" />
                <HeaderItem text="Projects" link="#" />
                <HeaderItem text="Contact" link="#" />
            </nav>
        </header>
    );
}


function HomeSection(props) {
    return (
        <div className="body-section-home">
            <img className="home-background" src={background_image} />
            <img className="home-profile" src={profile_image} />
            <div className="home-intro-text">
                Hi! My name is Aidan Clyens. I am a junior software engineer and recent graduate from the University of Waterloo.
            </div>
        </div>
    );
}

function BodySection(props) {
    return (
        <div id={props.id} className="body-section">
            <h1>{props.title}</h1>
            <hr></hr>
            <div className="body-section-content">
                Using an introduction has several benefits. The first is that introductions can coax the user further into the website. If the introduction is colorful, well-designed and has a good title, the user will be interested in the rest of the content. The other advantage is that you can provide quick information about your business or website to new users.
            </div>
        </div>
    );
}

function Body(props) {
    return (
        <div className="body">
            <HomeSection />
            <div className="body-content">
                <BodySection id="about" title="About" />
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
