import { useEffect, useState } from "react"
import ProjectItem from "./Project"
import api from "../api"

function ProjectList() {
    
    const [projects, setProjects] = useState([])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState(null)
    const [pinned, setPin] = useState(false)



    useEffect(()=> getProjects(), [])

    const getProjects = ()=> {
        api
            .get("api/projects/")
            .then((res)=>res.data)
            .then((data) =>{setProjects(data.results); console.log(data.results)})
            .catch((err) => alert(err))
    }

    const deleteProject = (id) => {
        api.delete(`/api/projects/${id}/`)
        .then((res) => {
            if (res.status == 204) {
                 alert("Projecto Borrado")
                 setProjects(projects.filter((proyecto) => proyecto.id !== id)); 
            }
            else{
                alert("Fallo en borrado")
            }
            }).
            catch((error) => alert(error))
            getProjects()
    }

    const createProject = (e) => {
       
        e.preventDefault();
        api.post(`/api/projects/`, {title, description, pinned, img}, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res)=>{
            if(res.status === 201 || res.status === 200) {
                alert("Projecto Creado")
                getProjects()
            }else
            {
                alert("No creado")
            }
        }).catch((err) => alert(err))
    }
    return (

        <div>
            <div>
                <h2>Projects List</h2>
            </div>
            <div>

            { 
                projects.map( (item) => (
                        <ProjectItem item={item} onDelete={deleteProject} key={item.id}></ProjectItem>
    

                ))
            }
            </div>

            <div>
                <h2>
                    Project Create
                </h2>
                <div>
                    <form onSubmit={createProject} >
                        <label htmlFor="title">Title:</label>
                    
                        <input 
                            type="text" name="title" id="title" 
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                        <br />
                        <textarea 
                            name="description" 
                            id="description"
                            onChange={(e)=>{setDescription(e.target.value)}}
                            >
                        </textarea>
                        

                        <label htmlFor="pinned">Pin Project</label>
                        <input type="checkbox" name="pinned" id="pinned" onChange={(e)=>{setPin(e.target.value)}}/>

                        <input type="file" name="img" id="img" 
                        onChange={(e)=>{setImg(e.target.files[0])}}
                        />

                        <button type="submit">Crear</button>
                    </form>


                </div>
            </div>
            
        </div>
        
    )
}

export default ProjectList