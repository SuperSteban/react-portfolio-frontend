
import { useState, useEffect } from "react";
import Breadcrumbs from "../components/BreadCumbs";
import api from "../api";
import axios from "axios";
import "../styles/projects.css"


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
            });
            setProjects(response.data.results);
        } catch (error) {
            console.error("Error al obtener Proyectos:", error.response?.data || error.message);
        }
    };
    return (
        <div className="">
            <h2>Projects</h2>
            <Breadcrumbs></Breadcrumbs>
            <div className="">
                <div className="">

                    {
                        projects.length < 0 ? (
                            <p>There is nothing here...</p>
                        ) : (
                            <div className="projects__container">
                                {
                                    projects.map((item) =>

                                    (
                                        <div key={item.id} className="projects__card">
                                            <img src={item.img} alt={item.title} />
                                            <div className="info__card">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>

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
        </div>
    )
}

export default PublicProjecs

