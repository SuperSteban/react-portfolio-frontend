import Form from "../components/Form"
import "../styles/login.css"

function Login() {

    return (
        <div className="">
            <div className="login__container">
                <Form  route="/api/token/" method="login" />
            </div>
        </div>
    )
    
    
}

export default Login
