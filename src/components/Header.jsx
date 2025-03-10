import { useNavigate, NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../styles/header.css"

import { LuMenu } from "react-icons/lu";
import { useState } from "react";
function Header() {

    const [nav, setNav] = useState(false)
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
  
 

    return <>
    
        <header className={nav?"header":["header open"].join(" ")}>
            <Link to="/">
                <div className="logo">
                    
                    <img className="" src="/logo.svg" alt="logo" />
                    <p>PORTFOLIO</p>
                </div>
            </Link>
            <SearchBar/>
            <div className={nav?["nav_active"].join(" ") :"menu"}>
                <nav className="navbar">
                    <NavLink
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isActive ? "active__nav" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    
                    to="/" end>
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
                    
                    to="/projects" end>
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
                    
                    to="/blogs" end>Blogs</NavLink>
                    <NavLink to="/about"
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isPending ? "pending" : "animate: pulse 1s infinite;",
                        isActive ? "active__nav" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    
                    >About</NavLink>
                </nav>
            </div>

            <LuMenu onClick={()=>{setNav(!nav); console.log(nav)}} size={35} className="menu__icon"/>
        </header>
    
    </>




    
    
    

}

export default Header