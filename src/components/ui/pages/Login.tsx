import styled from "@emotion/styled";
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    InputBase,
    Typography,
} from "@mui/material";

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

const Login = () => {
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
            <BootstrapInput placeholder="ایمیل" type="text" />
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
                ورود
            </Button>
            <FormControlLabel
                label="مرا به خاطر بسپار"
                control={
                    <Checkbox
                        sx={{
                            color: "gray",
                            "&.Mui-checked": {
                                color: "#5C147E",
                            },
                        }}
                    />
                }
            />
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
                    کاربر جدید هستید؟
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
                     ثبت نام
                </Typography>
            </Box>
        </Box>
    );
};

export default Login;
