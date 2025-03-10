import { useState } from "react";
import api from "../api";
import { useNavigate} from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constansts";
import "../styles/Form.css"
import "../styles/login.css"
import { FaUserAlt } from "react-icons/fa";

function Form({route, method}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleSubmit  = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {

            const res = await api.post(route, {username, password})
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/admin-site")
            }else {
                navigate("/login")
            }

        }catch (error){
            alert(error)
        }finally {
            setLoading(false)
        }
    }
    const name = method === "login" ? "Login" : "Register"
    return (
        <div className="login__container">
            <form  onSubmit={handleSubmit} className="login">
                <FaUserAlt size={45} />
                <h2>{name}</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder="username"
                />

                <input
                    type="password"
                    className="#password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="password"
                />
                <button
                    type="submit"
                    >
                    {name}
                </button>
            </form>
        </div>

    )

    
}

export default Form