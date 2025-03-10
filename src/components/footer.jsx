import "../styles/footer.css"
import { FaRegCopyright } from "react-icons/fa";




function Footer() {


    return (

        <div className="footer">
            <div className="footer__icon">

                <p>Portfolio Footer</p> 
            </div>
            <div className="copyrights">
                Jorge Esteban CS  <FaRegCopyright/>
            </div>
            <div className="sitemap">
                <p>Site Map</p>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/projects">projects</a></li>
                    <li><a href="/blogs">blogs</a></li>
                    <li><a href="/about">about</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer