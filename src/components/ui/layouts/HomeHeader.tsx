import { Box, AppBar, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";

const HomeHeader = () => {
    return (
        <AppBar
            sx={{
                position: "sticky",
                bgcolor: "#664482",
                height: "86px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2rem",
                    margin: 3,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: "white",
                        fontFamily: "cursive",
                    }}
                >
                    Job
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ display: "flex" }}>
                        <PersonIcon />
                        <Typography
                            sx={{ fontFamily: "shabnam", fontWeight: 500 }}
                        >
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "#FFFFFF",
                                }}
                                to="/employer-sign"
                            >
                                کارفرما
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <PersonIcon />
                        <Typography
                            sx={{ fontFamily: "shabnam", fontWeight: 500 }}
                        >
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "#FFFFFF",
                                }}
                                to="/user-sign"
                            >
                                کارجو
                            </Link>
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 5,
                    }}
                >
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <BusinessCenterIcon />
                        <Link
                            to="JobAds"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            <Typography
                                sx={{ fontFamily: "shabnam", fontWeight: 500 }}
                            >
                                فرصت های شغلی
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <BusinessIcon />
                        <Typography
                            sx={{ fontFamily: "shabnam", fontWeight: 500 }}
                        >
                            معرفی شرکتها
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <DescriptionIcon />
                        <Link
                            to="/user/cv"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            <Typography
                                sx={{ fontFamily: "shabnam", fontWeight: 500 }}
                            >
                                ساخت رزومه
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <ArticleIcon />
                        <Link
                            to="articles"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            <Typography
                                sx={{ fontFamily: "shabnam", fontWeight: 500 }}
                            >
                                مقاله ها
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "white",
                            fontFamily: "shabnam",
                        }}
                    >
                        تماس باما
                        <PhoneIcon
                            sx={{ width: 18, height: 18, marginRight: 2 }}
                        />
                    </Typography>
                </Box>
            </Box>
        </AppBar>
    );
};

export default HomeHeader;
