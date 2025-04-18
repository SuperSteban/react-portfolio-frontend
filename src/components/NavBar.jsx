import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css"

function NavBar(nav) {

    
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        setIsAuthenticated(!!token);
    }, []);

    const logout = () =>{
        localStorage.clear("ACCESS_TOKEN");
        localStorage.clear("REFRESH");

    }

    return (
        <>
          <div>
                <nav className="navbar">
                    <NavLink
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isActive ? "active__nav" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    
                    to="/admin-site" end>
                        Home
                    </NavLink>
                    <NavLink
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isPending ? "pending" : "animate: pulse 1s infinite;",
                        isActive ? "active__nav" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    
                    to="/admin-site/projects" end>
                        Projects
                    </NavLink>
                    
                    <NavLink
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isPending ? "pending" : "animate: pulse 1s infinite;",
                        isActive ? "active__nav" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    
                    to="/admin-site/blogs" end>
                        Blogs
                    </NavLink>
                    <NavLink
                    onClick={logout}
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isPending ? "pending" : "animate: pulse 1s infinite;",
                        isActive ? "" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    
                    to="/login" end>
                        Logout
                    </NavLink>
                </nav>
            </div>
            
            
        </>
    )
}

export default NavBar