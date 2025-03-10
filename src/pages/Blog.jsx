import { useEffect, useState } from "react"
import axios from "axios"
import api from "../api";

import Breadcrumbs from "../components/BreadCumbs"
import "../styles/blog.css"
import { ImOpt } from "react-icons/im"

function PublicBlogs() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        getBlogs()

    }, [])

    const getBlogs = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/public/blogs/`, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: false,
            });
            setBlogs(response.data.results);
        } catch (error) {
            console.error("Error al obtener blogs:", error.response?.data || error.message);
        }
    };


    return (
        <div className="">
            <h2>Blogs</h2>
            <Breadcrumbs></Breadcrumbs>
            <div className="">


                {
                    blogs.length < 0 ? (
                        <p>no hay</p>
                    ) : (
                        <div className="blog__container">
                            {
                                
                                blogs.map((item) =>

                                (
                                    <div key={item.id} className="blog">
                                        <h4>{item.title}</h4>
                                        <img src={item.img} alt={item.title} />
                                        <p>{item.description}</p>
                                        <span><p>{new Date(item.created_at).toLocaleDateString("en-US")}</p></span>
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

export default PublicBlogs