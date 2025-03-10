import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "../components/Hero"
import "../styles/home.css"
import "../styles/projects.css"




function Home() {

    const [featuredProjects, setFeaturedProjects] = useState([])
    useEffect(() => {
        getProjects()

    }, [])

    const getProjects = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/public/projects-filter/?pinned=true`, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: false,
            });
            setFeaturedProjects(response.data.results);
            console.log(featuredProjects)
        } catch (error) {
            console.error("Error al obtener Proyectos:", error.response?.data || error.message);
        }
    };

    return (
        <div>

            <Hero></Hero>

            <div>
                <h2>Experience</h2>
                <ul>
                    <li><p>Intership</p></li>
                    <li><p>GCL Mexico</p></li>
                    <li>
                        <p>
                            Developed a web app to create a breach between clients and GCL Mexico in the process of their ISO certifications.
                            Administrate users, projects and audits.
                        </p>
                    </li>
                    <li><span><p>2024/02/1~2024/05/30</p></span></li>
                </ul>
            </div>

            <div>

                <h3>Projects</h3>
                {
                    featuredProjects.length < 0 ? (
                        <p>
                            There is nothing to show... try later
                        </p>

                    ) : (
                        <div className="projects__container">
                            {
                                featuredProjects.map((item) =>

                                (

                                    <div key={item.id} className="projects__card">

                                        <img src={item.img} alt={item.title} />
                                        <div className="info__card">
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                )


                                )
                            }
                        </div>
                    )
                }

            </div>
        </div>
    )
}


export default Home