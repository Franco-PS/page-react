import snap from "../snap.svg";


export function NavBar(){
    return(
        <header className="container header__bar">
            <div className="container-fluit header__block">
                <img src={snap} alt="logo"/>
                <div className="icon__bar" >&#x2261;</div>
                <nav className="header__nav">
                    <ul className="nav__level1">
                        <li className="nav-li"><a>Home</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}