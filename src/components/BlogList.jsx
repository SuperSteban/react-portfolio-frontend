import { useEffect, useState } from "react";
import api from "../api";
import BlogItem from "./Blog";

function BlogList() {
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState(null)

    const [blogs, setBlogs] = useState([])

    useEffect(()=> getBlogs(), [])
    
    const getBlogs = ()=> {
        api
            .get("api/blogs/")
            .then((res)=>res.data)
            .then((data) =>{setBlogs(data.results); console.log(data.results)})
            .catch((err) => alert(err))
    }
    const deleteBlog = (id) => {
        api.delete(`/api/projects/${id}/`)
        .then((res) => {
            if (res.status == 204) {
                 alert("Projecto Borrado")
                 setBlogs(blogs.filter((blog) => blog.id !== id)); 
            }
            else{
                alert("Fallo en borrado")
            }
            }).
            catch((error) => alert(error))
            getBlogs()
    }

    const createBlog = (e) => {
        e.preventDefault();
        api.post(`/api/blogs/`, {title, description, img}, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res)=>{
            if(res.status === 201 || res.status === 200) {
                alert("Blog Creado")
                getBlogs()
            }else
            {
                alert("No creado")
            }
        }).catch((err) => alert(err))
    }

    return (
        <div>
            <div>
                <h3>BlogList</h3>
                {
                    blogs.map((item) => (
                        <BlogItem key={item.id} item={item} onDelete={deleteBlog}></BlogItem>
                    ))
                }

            </div>
            <div>
                <h3>Create Blog</h3>

                <form onSubmit={createBlog}>
                    <label htmlFor="title">Titulo</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                    <label htmlFor="description">Contenido</label>
                    <textarea 
                            name="description" 
                            id="description"
                            onChange={(e)=>{setDescription(e.target.value)}}
                            >
                    </textarea>
                    <input type="file" name="img" id="img" 
                        onChange={(e)=>{setImg(e.target.files[0])}}
                        />

                    <button type="submit">
                        POSTEAR
                    </button>
                </form>
            </div>

        </div>
        
    )
}

export default BlogList