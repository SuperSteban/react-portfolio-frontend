import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css"

function NavBar() {

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        setIsAuthenticated(!!token);
    }, []);



    return (
        <>

            <nav className="navbar">
                <div className="logo-container">
                    <img className="logo" src="/logo.svg" alt="logo" />
                </div>
                <NavLink
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "animate: pulse 1s infinite;",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                
                to="/" end>
                    Home
                </NavLink>
                <NavLink to="/projects" end>
                    Projects
                </NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>

        </>
    )
}

export default NavBar