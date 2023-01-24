import styled from "@emotion/styled";
import { Box, Button, InputBase, Typography } from "@mui/material";

const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
        borderRadius: 10,
        position: "relative",
        border: "1px solid #ced4da",
        fontSize: 14,
        width: "auto",
        padding: "8px 10px",
        fontFamily: ["shabnam"].join(","),
    },
}));

const SignUp = () => {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: "flex",
                flexDirection: "column",
                gridTemplateColumns: { sm: "1fr 1fr" },
                gap: 2,
                marginTop: "2rem",
            }}
        >
            <div>
                <BootstrapInput
                    sx={{ width: "5rem" }}
                    placeholder="نام"
                    type="text"
                />
                <BootstrapInput
                    sx={{ width: "7rem", marginRight: ".4rem" }}
                    placeholder="نام خانوادگی"
                    type="text"
                />
            </div>
            <BootstrapInput placeholder="ایمیل" type="email" />
            <BootstrapInput placeholder="رمز عبور" type="password" />
            <Button
                sx={{
                    fontFamily: "shabnam",
                    background: "#CAAADD",
                    color: "#000000",
                    borderRadius: "10px",
                    ":hover": {
                        background: "#5C147E",
                        color: "#FFFFFF",
                    },
                }}
                type="submit"
            >
                عضویت
            </Button>
            <Box
                sx={{
                    background: "#FFFFFF",
                    border: "1px solid #5C147E",
                    borderRadius: "10px",
                    paddingY: ".4rem",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "shabnam",
                        color: "#000000",
                        fontSize: ".7rem",
                        display: "inline-block",
                    }}
                >
                    حساب کاربری دارید؟
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "shabnam",
                        color: "#5C147E",
                        fontSize: ".7rem",
                        display: "inline-block",
                        borderBottom: "1px solid #5C147E",
                        cursor: "pointer",
                    }}
                >
                     وارد شوید
                </Typography>
            </Box>
        </Box>
    );
};

export default SignUp;
