import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
};

export default AdminLayout;
