import styled from "@emotion/styled";
import { Box, Button, InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
        borderRadius: 5,
        position: "relative",
        border: "1px solid #ced4da",
        fontSize: 14,
        width: "auto",
        padding: "14px 18px",
        fontFamily: ["shabnam"].join(","),
    },
}));

const EditUser = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                marginRight: "20rem",
                width: "70%",
                position: "absolute",
                bgcolor: "#FCFCFC",
                paddingBlock: "1.9rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginTop: "2rem",
                    }}
                >
                    <Badge
                        sx={{ width: "5rem", height: "5rem" }}
                        overlap="circular"
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        badgeContent={
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                            >
                                <input hidden accept="image/*" type="file" />
                                <AddCircleIcon sx={{ color: "#664887", fontSize:"2.1rem" }} />
                            </IconButton>
                        }
                    >
                        <Avatar
                            sx={{ width: "5rem", height: "5rem" }}
                            alt="Travis Howard"
                            src=""
                        />
                    </Badge>

                    <BootstrapInput placeholder="نام" type="text" />
                    <BootstrapInput placeholder="نام خانوادگی" type="text" />
                    <BootstrapInput placeholder="شهر" type="text" />
                    <BootstrapInput placeholder="آدرس" type="text" />
                    <BootstrapInput placeholder="شماره تماس" type="text" />
                    <BootstrapInput placeholder="ایمیل" type="email" />
                    <Button
                        sx={{
                            fontFamily: "shabnam",
                            background: "#CAAADD",
                            color: "#000000",
                            borderRadius: "5px",
                            ":hover": {
                                background: "#5C147E",
                                color: "#FFFFFF",
                            },
                        }}
                        type="submit"
                    >
                        ذخیره
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default EditUser;
