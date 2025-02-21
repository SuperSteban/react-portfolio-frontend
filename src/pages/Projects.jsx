
import { useState, useEffect } from "react";
import Breadcrumbs from "../components/BreadCumbs";
import axios from "axios";
import "../styles/site-layout.css"
import "../styles/home-public.css"


function PublicProjecs()  {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()

    }, [])

    const getProjects = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/public/projects/`, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: false,
            });
            setProjects(response.data.results);
        } catch (error) {
            console.error("Error al obtener Proyectos:", error.response?.data || error.message);
        }
    };
    return (
        <div className="container">
            <h1>Projects</h1>
            <Breadcrumbs></Breadcrumbs>
            <div className="container-content">


                {
                    projects.length < 0 ? (
                        <p>There is nothing here...</p>
                    ) : (
                        <div className="container-projects">
                            {
                                projects.map((item) =>

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

export default PublicProjecs

