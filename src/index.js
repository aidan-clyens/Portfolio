import React from 'react'
import ReactDOM from 'react-dom'


function HeaderItem(props) {
    return (
        <td>{props.text}</td>
    );
}


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <table>
                    <tr>
                        <HeaderItem text="Aidan Clyens" />
                        <HeaderItem text="About" />
                        <HeaderItem text="Projects" />
                        <HeaderItem text="Contact" />
                    </tr>
                </table>
            </div>
        );
    }
}


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header />
            </div>
        );
    }
}


ReactDOM.render(
    <Home />,
    document.getElementById("root")
);
