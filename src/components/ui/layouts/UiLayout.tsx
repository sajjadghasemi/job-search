import { Outlet } from "react-router-dom";
import Header from "./Header";

const UiLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default UiLayout;
