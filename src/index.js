import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


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
