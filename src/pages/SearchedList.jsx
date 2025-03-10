import { data, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from "../api"
import axios from "axios";

import "../styles/projects.css"
import "../styles/search_list.css"


function SearchList() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('q');
    const [projects, setProjects] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => getSearch(), [keyword])

    const getSearch = () => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/search/?=${keyword}`)
            .then((res) => res.data)
            .then((data) => 
                {
                     data.projects ? setProjects(data.projects) : ""
                     console.log(data.blogs)
                     data.blogs ? setBlogs(data.blogs) : ""     
                })

            .catch((err) => alert(err))
    }
    return (
        <div>
            <h3 className='page_title'>
                Searched '{keyword}' :
            </h3>

            <div className='search_list'>
                {projects ?
                    projects.map((item) => (
                        <div key={item.id} className="projects__card search__item">
                            <img src={item.img} alt={item.title} />
                            <div className="info__card">
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    ))
                    : ""
                }
               {
                    blogs ?
                        blogs.map((item) => (
                            <div key={item.id} className="projects__card search__item">
                                <img src={item.img} alt={item.title} />
                                <div className="info__card">
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        ))
                        :""
                }

                {
                    blogs.length == 0 && projects.length == 0 ?   (
                        <div className='nothing'>
                            <p>Nothing to show Shusshh!, Try Something else...</p>
                        </div>
                    ):""
                }
            </div>  
        </div>
    )

}

export default SearchList