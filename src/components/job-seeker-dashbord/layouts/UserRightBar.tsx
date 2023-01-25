import { Box, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import WalletIcon from "@mui/icons-material/Wallet";
import FeedIcon from "@mui/icons-material/Feed";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import { Link } from "react-router-dom";

const UserRightBar = () => {
    return (
        <Box
            sx={{
                width: 180,
                height: "100vh",
                bgcolor: "#664482",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                gap: 5,
            }}
        >
            <Box sx={{ display: "flex", gap: 3 }}>
                <CreateIcon sx={{ color: "white" }} />
                <Link
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    to="/user/edit"
                >
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "white", fontFamily: "shabnam" }}
                    >
                        ویرایش اطلاعات
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
                <WalletIcon sx={{ color: "white" }} />
                <Link
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    to="/user/massages"
                >
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "white", fontFamily: "shabnam" }}
                    >
                        پیام ها
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
                <NoteAddIcon sx={{ color: "white" }} />
                <Link
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    to="/user/cv"
                >
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "white", fontFamily: "shabnam" }}
                    >
                        رزومه
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
                <FeedIcon sx={{ color: "white" }} />
                <Link
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    to="/user/suggestions"
                >
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "white", fontFamily: "shabnam" }}
                    >
                        آگهی های پیشنهادی
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
                <InterpreterModeIcon sx={{ color: "white" }} />
                <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "shabnam" }}
                >
                    مصاحبه آنلاین
                </Typography>
            </Box>
        </Box>
    );
};

export default UserRightBar;
