import { useEffect, useState } from "react"
import axios from "axios"
import Breadcrumbs from "../components/BreadCumbs"
import BlogItem from "../components/Blog"

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
        <div className="container">
            <h1>Blogs</h1>
            <Breadcrumbs></Breadcrumbs>
            <div>


                {
                    blogs.length < 0 ? (
                        <p>no hay</p>
                    ) : (
                        <div>
                            {
                                
                                blogs.map((item) =>

                                (
                                    <div key={item.id}>
                                        <h3>{item.title}</h3>
                                        <img src={item.img} alt={item.title} />
                                        <p>{item.description}</p>
                                        <span>fecha: {new Date(item.created_at).toLocaleDateString("en-US")}</span>
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