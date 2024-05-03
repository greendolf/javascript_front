function Header(props) {

    return (
        <div className="header">
            <header>
                <img src="waves.png" alt="волны"></img>
                <h1>Распределение тепла</h1>
            </header>
            <>{props.children}</>
        </div>
    );
}

export default Header;
