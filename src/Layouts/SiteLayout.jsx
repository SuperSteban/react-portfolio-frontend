import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import "../styles/site-layout.css"



function SiteLayout() {

    return (
        <div className="site-layout">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )



}

export default SiteLayout