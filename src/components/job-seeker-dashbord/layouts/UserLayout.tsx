import { Outlet } from "react-router-dom";
import Header from "../../ui/layouts/Header";
import UserRightBar from "./UserRightBar";

const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <UserRightBar />
        </>
    );
};

export default UserLayout;
