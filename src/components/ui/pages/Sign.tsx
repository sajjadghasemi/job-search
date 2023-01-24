import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Box } from "@mui/material";

const Sign = () => {
    const [login, setLogin] = useState<boolean>(false);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    marginTop: "2rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        height: "420px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            border: "1px solid rgba(0, 0, 0, 0.24)",
                            borderRadius: "10px",
                            padding: "2.3rem",
                        }}
                    >
                        {login ? <Login /> : <SignUp />}
                    </Box>
                    <Box>
                        <img src="./images/user-login.png" height={420} />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Sign;
