import singleCompanyLoc from "../../../../assets/uiImages/singleCompanyLoc.png";
import singleCompanyMore from "../../../../assets/uiImages/singleCompanyMore.png";
import { Box, Typography, CardMedia, Button, Avatar } from "@mui/material";

const MailSection = () => {
    return (
        <Box sx={{ paddingX: "3rem" }}>
            <Box
                sx={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}
            >
                <CardMedia component="img" image={singleCompanyLoc} />
            </Box>
            <Box
                sx={{
                    marginY: "1rem",
                }}
            >
                <Box>
                    <Typography
                        sx={{ fontFamily: "shabnam", padding: "1rem" }}
                        variant="h5"
                    >
                        تصاویر بیشتر
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        marginY: "1rem",
                        justifyContent: "space-between",
                    }}
                >
                    <Box sx={{ width: "30%", display: "flex" }}>
                        <CardMedia component="img" image={singleCompanyMore} />
                    </Box>
                    <Box sx={{ width: "30%", display: "flex" }}>
                        <CardMedia component="img" image={singleCompanyMore} />
                    </Box>
                    <Box sx={{ width: "30%", display: "flex" }}>
                        <CardMedia component="img" image={singleCompanyMore} />
                    </Box>
                </Box>
                <Box>
                    <Typography
                        sx={{ fontFamily: "shabnam", padding: "1rem" }}
                        variant="h5"
                    >
                        فرصت های 
                    </Typography>
                </Box>
                <Box
                    sx={{
                        padding: "2rem",
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
        </Box>
    );
};

export default MailSection;
