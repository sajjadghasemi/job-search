import { Box, Typography, CardMedia } from "@mui/material";
import singleCompanyImage from "../../../../assets/uiImages/singleCompanyImage.png";

const TopBox = () => {
    return (
        <Box sx={{ padding: "1rem" }}>
            <Box
                sx={{
                    padding: "2rem",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                    }}
                >
                    <CardMedia component="img" image={singleCompanyImage} />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "1rem",
                            position: "absolute",
                            bgcolor: "#F4F4F4",
                            borderRadius: "14px",
                            width: 320,
                            bottom: -60,
                        }}
                    >
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h6">
                            درباره شرکت{" "}
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="subtitle2"
                        >
                            علی‌بابا را به سفر می‌شناسند؛ شرکتی بزرگ با 700
                            همکار که در کنار برندهایی مثل جاباما، دکتر نکست،
                            سیمرغ، آوایار و...، هلدینگ گروه علی‌بابا را تشکیل
                            می‌دهد.
                        </Typography>
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h6">
                            {" "}
                            بیشتر{" "}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: ".5rem",
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "start",
                            alignItems: "start",
                            padding: "1rem",
                            bgcolor: "#F3DBA5",
                            borderRadius: "10px",
                            width: 220,
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam" }}
                            variant="subtitle1"
                        >
                            آدرس:
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="subtitle2"
                        >
                            تهران - نارمک - بزرگراه رسالت
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "start",
                            alignItems: "start",
                            padding: "1rem",
                            bgcolor: "#F3DBA5",
                            borderRadius: "10px",
                            width: 220,
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam" }}
                            variant="subtitle1"
                        >
                            فروش بلیت قطار،اتوبوس و رزرو
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="subtitle2"
                        >
                            500 کارمند
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam" }}
                            variant="subtitle2"
                        >
                            10 آگهی
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TopBox;
