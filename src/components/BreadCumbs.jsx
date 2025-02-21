import { Link, useMatches } from "react-router-dom";
import "../styles/breadcums.css"
const Breadcrumbs = () => {
    const matches = useMatches();

    return (
        <nav className="breadcrumbs">
            <ul className="breadcrumbs">
                <li className="breadcrumbs"><Link to="/">Home</Link></li>
                {matches.map((match, index) => {
                    if (!match.pathname || match.pathname === "/") return null;
                    const breadcrumbName = match.pathname
                        .split("/")
                        .filter(Boolean)
                        .pop();
                    return (
                        <li className="breadcrumbs" key={index}>
                            <Link to={match.pathname}>{breadcrumbName}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;