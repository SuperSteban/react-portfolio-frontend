import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import "../styles/site-layout.css"
import Header from "../components/Header"



function SiteLayout() {

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )



}

export default SiteLayout