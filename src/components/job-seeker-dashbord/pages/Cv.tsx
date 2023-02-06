import { useSelector } from "react-redux";
import {
    Avatar,
    Box,
    Button,
    Divider,
    Typography,
} from "@mui/material";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 400 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#D348EA" : "#308fe8",
    },
}));

const Cv = () => {
    const currentUser = useSelector(
        (state: any) => state.usersSlice.currentUser
    );

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
                    marginTop: "2rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        bgcolor: "#a10087",
                        padding: "2rem",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "220px",
                    }}
                >
                    <Avatar sx={{ width: "8rem", height: "8rem" }} />
                    <Box
                        sx={{
                            marginTop: "3rem",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    fontWeight: 700,
                                    color: "#fff",
                                }}
                            >
                                {currentUser.firstName}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    fontWeight: 700,
                                    color: "#fff",
                                }}
                            >
                                {currentUser.lastName}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            dispaly: "flex",
                            gap: 2,
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "shabnam",
                                fontWeight: 700,
                                color: "#fff",
                            }}
                            align="right"
                        >
                            تماس با من
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                paddingTop: 1,
                                color: "#FFF",
                            }}
                        >
                            <PhoneIphoneIcon sx={{ color: "#fff" }} />
                            {currentUser.cv
                                ? currentUser.cv.phoneNumber
                                : "شماره وارد نشده"}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                paddingTop: 1,
                                color: "#FFF",
                                gap: 1,
                            }}
                        >
                            <AlternateEmailIcon sx={{ color: "#fff" }} />
                            {currentUser.email}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                paddingTop: 1,
                                color: "#FFF",
                                gap: 1,
                                wordBreak: "break-all",
                            }}
                        >
                            <LocationOnIcon sx={{ color: "#fff" }} />
                            {currentUser.cv
                                ? currentUser.cv.address
                                : "آدرس وارد نشده"}
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "30px",
                        bgcolor: "lightblue",
                    }}
                ></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginTop: "2rem",
                    }}
                >
                    <Box sx={{ width: "350px", paddingX: "1rem" }}>
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h5">
                            تحصیلات
                        </Typography>
                        <Divider sx={{ bgcolor: "gray" }} />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                padding: "1rem",
                            }}
                        >
                            {currentUser.cv ? (
                                <>
                                    <Typography
                                        sx={{ fontFamily: "shabnam" }}
                                        variant="subtitle1"
                                    >
                                        دانشگاه:{" "}
                                        {currentUser.cv.educationExp.university}
                                    </Typography>
                                    <Typography
                                        sx={{ fontFamily: "shabnam" }}
                                        variant="subtitle1"
                                    >
                                        رشته:{" "}
                                        {currentUser.cv.educationExp.major}
                                    </Typography>
                                    <Typography
                                        sx={{ fontFamily: "shabnam" }}
                                        variant="subtitle1"
                                    >
                                        مقطع:{" "}
                                        {currentUser.cv.educationExp.grade}
                                    </Typography>
                                </>
                            ) : (
                                <Typography
                                    sx={{ fontFamily: "shabnam" }}
                                    variant="subtitle1"
                                >
                                    اطلاعات تحصیلی وارد نشده
                                </Typography>
                            )}
                        </Box>
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h5">
                            سابقه کاری
                        </Typography>
                        <Divider sx={{ bgcolor: "gray" }} />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                padding: "1rem",
                            }}
                        >
                            {currentUser.cv ? (
                                <>
                                    <Typography
                                        sx={{ fontFamily: "shabnam" }}
                                        variant="subtitle1"
                                    >
                                        نام شرکت:{" "}
                                        {currentUser.cv.workExp.companyName}
                                    </Typography>
                                    <Typography
                                        sx={{ fontFamily: "shabnam" }}
                                        variant="subtitle1"
                                    >
                                        عنوان شغلی:{" "}
                                        {currentUser.cv.workExp.title}
                                    </Typography>
                                    <Typography
                                        sx={{ fontFamily: "shabnam" }}
                                        variant="subtitle1"
                                    >
                                        سال ورود:{" "}
                                        {currentUser.cv.workExp.enterYear} - سال
                                        خروج: {currentUser.cv.workExp.exitYear}
                                    </Typography>
                                </>
                            ) : (
                                <Typography
                                    sx={{ fontFamily: "shabnam" }}
                                    variant="subtitle1"
                                >
                                    اطلاعات کاری وارد نشده
                                </Typography>
                            )}
                        </Box>
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h6">
                            مهارت ها
                        </Typography>
                        <Divider sx={{ bgcolor: "gray" }} />
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                padding: "1rem",
                            }}
                        >
                            {currentUser.cv ? (
                                currentUser.cv.skills.map((item: any) => (
                                    <Typography
                                        sx={{
                                            fontFamily: "shabnam",
                                            paddingX: "1rem",
                                            paddingY: ".5rem",
                                            border: "1px solid purple",
                                        }}
                                        variant="subtitle1"
                                    >
                                        {item}
                                    </Typography>
                                ))
                            ) : (
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                    }}
                                    variant="subtitle1"
                                >
                                    مهارتی ثبت نشده
                                </Typography>
                            )}
                        </Box>
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h6">
                            زبان ها
                        </Typography>
                        <Divider sx={{ bgcolor: "gray" }} />
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                padding: "1rem",
                            }}
                        >
                            {currentUser.cv ? (
                                currentUser.cv.languages.map((item: any) => (
                                    <Typography
                                        sx={{
                                            fontFamily: "shabnam",
                                            paddingX: "1rem",
                                            paddingY: ".5rem",
                                            border: "1px solid purple",
                                        }}
                                        variant="subtitle1"
                                    >
                                        {item}
                                    </Typography>
                                ))
                            ) : (
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                    }}
                                    variant="subtitle1"
                                >
                                    زبان ثبت نشده
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginTop: "2rem",
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            width: "200px",
                            marginRight: "1rem",
                            border: "1px solid gray",
                            padding: "1rem",
                        }}
                    >
                        <Typography variant="h6" sx={{ fontFamily: "shabnam" }}>
                            سطح رزومه{" "}
                        </Typography>
                        <BorderLinearProgress
                            sx={{ marginTop: "2rem" }}
                            variant="determinate"
                            value={
                                currentUser &&
                                currentUser.cv &&
                                currentUser.cv.workExp &&
                                currentUser.cv.educationExp
                                    ? 100
                                    : currentUser &&
                                      currentUser.cv &&
                                      currentUser.cv.workExp
                                    ? 50
                                    : currentUser && currentUser.cv
                                    ? 30
                                    : 0
                            }
                        />
                        <Box
                            sx={{
                                marginTop: "1rem",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{ fontFamily: "shabnam" }}
                            >
                                حرفه ای
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontFamily: "shabnam" }}
                            >
                                متوسط
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontFamily: "shabnam" }}
                            >
                                ضعیف
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                marginTop: "3rem",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                sx={{
                                    fontFamily: "shabnam",
                                    background: "purple",
                                    paddingX: "3rem",
                                    borderRadius: "10px",
                                    ":hover": {
                                        background: "#5C147E",
                                        color: "#FFFFFF",
                                    },
                                }}
                                type="submit"
                            >
                                <Link
                                    to="/user/add-cv"
                                    style={{
                                        textDecoration: "none",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    ویرایش رزومه
                                </Link>
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                marginTop: "1rem",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                sx={{
                                    fontFamily: "shabnam",
                                    color: "#5C147E",
                                    border: "1px solid #5C147E",
                                    paddingX: "3rem",
                                    borderRadius: "10px",
                                }}
                                type="submit"
                            >
                                دانلود رزومه
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Cv;
