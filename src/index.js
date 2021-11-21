import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import background_image from './background_image.jpg'
import profile_image from './profile.jpeg'


function HeaderItem(props) {
    return (
        <a className="header-item" href="">{props.text}</a>
    );
}

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>Aidan Clyens</h1>
                <nav>
                    <HeaderItem text="About" />
                    <HeaderItem text="Projects" />
                    <HeaderItem text="Contact" />
                </nav>
            </header>
        );
    }
}


function HomeSection(props) {
    return (
        <div className="home">
            <img className="home-background" src={background_image} />
            <img className="home-profile" src={profile_image} />
            <div className="home-intro-text">
                Hi! My name is Aidan Clyens. I am a junior software engineer and recent graduate from the University of Waterloo.
            </div>
        </div>
    );
}

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <HomeSection />
            </div>
        );
    }
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
