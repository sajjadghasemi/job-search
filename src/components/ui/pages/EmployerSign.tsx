import { useState } from "react";
import EmployerLogin from "./EmployerLogin";
import EmployerSignUp from "./EmployerSignUp";
import { Box } from "@mui/material";

const EmployerSign = () => {
    const [login, setLogin] = useState<boolean>(true);

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
                            width: "200px",
                            overflow: "hidden",
                        }}
                    >
                        {login ? (
                            <EmployerLogin login={login} setLogin={setLogin} />
                        ) : (
                            <EmployerSignUp login={login} setLogin={setLogin} />
                        )}
                    </Box>
                    <Box>
                        <img
                            src="./assets/uiImages/user-login.png"
                            height={420}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default EmployerSign;
