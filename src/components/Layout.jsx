import { Outlet } from "react-router-dom";
import Breadcrumbs from "./BreadCumbs";

const Layout = () => {
    return (
        <div>
            <Breadcrumbs />
            <Outlet /> {}
        </div>
    );
};

export default Layout;