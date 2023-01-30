import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Person2Icon from "@mui/icons-material/Person2";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const BuildCv = () => {
    return (
        <Box
            sx={{
                padding: "2rem",
                marginY: "2rem",
            }}
        >
            <Box
                sx={{
                    background:
                        "linear-gradient(98.94deg, #F3A9FF 0.7%, rgba(243, 169, 255, 0) 100%)",
                    border: "1px solid rgba(220, 106, 230, 0.15)",
                    borderRadius: "10px",
                    display: "flex",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "2rem",
                        width: "50%",
                        float: "right",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                gap: 3,
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 170,
                                    height: 130,
                                    bgcolor: "#AB339F",
                                    borderRadius: "10px",
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    width: 150,
                                    height: 110,
                                    bgcolor: "#F3A9FF",
                                    borderRadius: "10px",
                                }}
                            ></Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 3,
                                alignItems: "center",
                                marginTop: "1rem",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 150,
                                    height: 110,
                                    bgcolor: "#F3A9FF",
                                    borderRadius: "10px",
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    width: 170,
                                    height: 130,
                                    bgcolor: "#AB339F",
                                    borderRadius: "10px",
                                }}
                            ></Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <Typography
                        sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                        variant="h5"
                    >
                        اقدامات لازم قبل از پیداکردن کار موردنظر
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Person2Icon />
                        <Typography
                            sx={{ fontFamily: "shabnam", marginRight: "1rem" }}
                            variant="subtitle1"
                        >
                            ثبت نام
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <EditIcon />
                        <Typography
                            sx={{ fontFamily: "shabnam", marginRight: "1rem" }}
                            variant="subtitle1"
                        >
                            ساخت رزومه
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <SendIcon />
                        <Typography
                            sx={{ fontFamily: "shabnam", marginRight: "1rem" }}
                            variant="subtitle1"
                        >
                            ارسال رزومه
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: "1rem" }}>
                        <Button
                            sx={{
                                width: "100%",
                                fontFamily: "shabnam",
                                background: "#FFFFFF",
                                color: "#5C147E",
                                border: "2px solid #F3A9FF",
                                borderRadius: "5px",
                                ":hover": {
                                    background: "#5C147E",
                                    color: "#FFFFFF",
                                },
                            }}
                        >
                            ساخت رزومه
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BuildCv;
