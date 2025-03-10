import "../styles/hero.css"
import { Link } from "react-router-dom"

function Hero() {



    return (
        <div className="hero">
            <div>
                <h1 className="title">Hello, My name is Jorge Esteban, Software Developer</h1>
            </div>
            <div>
                <p className="text">I lean to Build solutions that make a difference</p>
            </div>

            <div className="about">
                <Link to="/about" className="button_cta" >
                    Get to know me
                </Link>
            </div>
        </div>


    )
}

export default Hero