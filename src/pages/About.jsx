import Breadcrumbs from "../components/BreadCumbs"
import "../styles/about.css"
function AboutMe() {


    return (

        <div className="container-section">
                <h1>About Me</h1>
                <Breadcrumbs />
            <div className="content ">

                <img src="/slime_s.svg" alt="me" className="mepeneje logo_slime" />
                <h2>Hello, I'm Jorge Esteban!
                I'm from Mexico</h2>
                <div className="mensaje">
                    <p>
                        I love building things. I have a strong desire to create software that delivers positive interactions and impacts real users.

                        I've worked with stacks like Django, React, and PHP. I'm also planning to explore Golang, and Angular in the future.

                        My goal is to become a great software developer — constantly improving my skills, learning new technologies, and building solutions that make a difference.

                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe