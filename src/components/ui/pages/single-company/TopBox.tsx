import { Box, Typography, CardMedia } from "@mui/material";
import { FC } from "react";
import singleCompanyImage from "../../../../assets/uiImages/singleCompanyImage.png";

const TopBox: FC<{
    about: string;
    address: string;
    name: string;
    activityTitle: string;
    membersCount: string;
}> = ({ about, address, name, activityTitle, membersCount }) => {
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
                            {about}
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
                            {address}{" "}
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
                            {name}{" "}
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="subtitle2"
                        >
                            {activityTitle}{" "}
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam" }}
                            variant="subtitle2"
                        >
                            {membersCount} کارمند
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TopBox;
