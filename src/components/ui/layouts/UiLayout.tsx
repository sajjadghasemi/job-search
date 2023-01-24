import React from "react";
import { Link, Outlet } from "react-router-dom";

const UiLayout = () => {
    return (
        <>
            <h1>
                <Link to="/">sss</Link>
                <Link to="/sign">bbb</Link>
            </h1>
            <Outlet />
        </>
    );
};

export default UiLayout;
