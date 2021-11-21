import './header.css'

export {Header};

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