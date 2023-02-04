import { Box, AppBar, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar
            sx={{
                position: "sticky",
                bgcolor: "#664482",
                height: "86px",
                display: "flex",
                justifyContent: "center",
                boxShadow: 0,
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
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "#FFFFFF",
                        }}
                        to="/"
                    >
                        Job
                    </Link>
                </Typography>
                <Box sx={{ display: "flex", padding: 2 }}>
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

export default Header;
