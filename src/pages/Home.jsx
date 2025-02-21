
import "../styles/home-public.css"
import { useState, useEffect } from "react"
import axios from "axios"






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
        <div className="container">
            <div className="container-content">
                <h1>Portfolio</h1>
            </div>
            <div className="container-content">
                <h2>Hello My name is Jorge</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia labore earum ipsa, tempore quam accusamus facilis eos repellat tempora maxime eius et quo sint placeat.
                    Soluta illum quod tenetur.</p>
            </div>

            <div className="container-content">
                <h2>Experience</h2>
                <ul>
                    <li><h4>Intership</h4></li>
                    <li><h5>GCL Mexico</h5></li>
                    <p>
                        Developed a web app to administrate part of the process that involves
                        the ISO certification
                    </p>
                    <li><span>2024/02/1~~2024/05/30 </span></li>
                </ul>
            </div>



            <div className="container-content">

                <h2>PROJECTOS</h2>
                {
                    featuredProjects.length < 0 ? (
                            <p>
                                There is nothing to show... try later
                            </p>
    
                    ) : (
                        <div className="container-projects">
                            {
                                featuredProjects.map((item) => 
                                    
                                    (

                                        <div key={item.id} className="project-card">
                                            <h3>{item.title}</h3>
                                            <img src={item.img} alt={item.title} />
                                            <p>{item.description}</p>
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