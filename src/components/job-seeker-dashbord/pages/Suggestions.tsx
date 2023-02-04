import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Suggestions = () => {
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
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box>
                    <Typography variant="h4" sx={{ fontFamily: "shabnam" }}>
                        آگهی های پیشنهادی
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    padding: "2rem",
                    marginTop: "2rem",
                    display: "flex",
                    gap: 3,
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(220, 106, 230, 0.15)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "20px",
                        paddingX: "2.8rem",
                        paddingY: "2.3rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 130,
                    }}
                >
                    <Box>
                        <Avatar sx={{ width: 70, height: 70 }} />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginY: "1rem",
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="h6"
                        >
                            حسابدار شرکت
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            تهران
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            2 روز پیش
                        </Typography>
                        <Box sx={{ marginTop: "1rem" }}>
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
                                ارسال رزومه
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(220, 106, 230, 0.15)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "20px",
                        paddingX: "2.8rem",
                        paddingY: "2.3rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 130,
                    }}
                >
                    <Box>
                        <Avatar sx={{ width: 70, height: 70 }} />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginY: "1rem",
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="h6"
                        >
                            حسابدار شرکت
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            تهران
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            2 روز پیش
                        </Typography>
                        <Box sx={{ marginTop: "1rem" }}>
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
                                ارسال رزومه
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(220, 106, 230, 0.15)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "20px",
                        paddingX: "2.8rem",
                        paddingY: "2.3rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 130,
                    }}
                >
                    <Box>
                        <Avatar sx={{ width: 70, height: 70 }} />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginY: "1rem",
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="h6"
                        >
                            حسابدار شرکت
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            تهران
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            2 روز پیش
                        </Typography>
                        <Box sx={{ marginTop: "1rem" }}>
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
                                ارسال رزومه
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(220, 106, 230, 0.15)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "20px",
                        paddingX: "2.8rem",
                        paddingY: "2.3rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 130,
                    }}
                >
                    <Box>
                        <Avatar sx={{ width: 70, height: 70 }} />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginY: "1rem",
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="h6"
                        >
                            حسابدار شرکت
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            تهران
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            2 روز پیش
                        </Typography>
                        <Box sx={{ marginTop: "1rem" }}>
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
                                ارسال رزومه
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Suggestions;
