import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background : "transparent", color:"white", border:"none"}}>
            <div className="container">
                <NavLink className="navbar-brand" to="/" style={{color:"white"}}><img src="https://preview.tabler.io/static/logo-small-white.svg" alt="myimage" width="35" height="35" /> &nbsp; &nbsp; ANKIT KUMAR</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="https://github.com/AnkitAvi11" target="_blank" rel="noreferrer" className="nav-link"><i className="bi bi-github" style={{color:"white"}}></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="https://instagram.com/ankit_avi_11" target="_blank" rel="noreferrer" className="nav-link"><i className="bi bi-instagram" style={{color:"white"}}></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="https://fb.com/AnkitAvi11" target="_blank" rel="noreferrer" className="nav-link"><i className="bi bi-facebook" style={{color:"white"}}></i></a>
                    </li>
                </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar;