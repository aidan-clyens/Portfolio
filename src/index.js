import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function HeaderItem(props) {
    return (
        <div className="header-item">{props.text}</div>
    );
}


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <HeaderItem text="Aidan Clyens" />
                <HeaderItem text="About" />
                <HeaderItem text="Projects" />
                <HeaderItem text="Contact" />
            </div>
        );
    }
}


class Body extends React.Component {
    render() {
        return (
            <div className="body">
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
