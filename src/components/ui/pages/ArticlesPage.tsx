import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AlarmIcon from "@mui/icons-material/Alarm";
import articleImage from "../../../assets/uiImages/article1.svg";
import Container from "@mui/material/Container";

const ArticlesPage = () => {
    return (
        <Container>
            {" "}
            <Box sx={{ marginTop: "2rem",padding:"1rem" }}>
                <Typography sx={{ fontFamily: "shabnam" }} variant="h3">
                    مقالات
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
                        paddingX: "2.5rem",
                        paddingY: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 250,
                    }}
                >
                    <Box sx={{ bgcolor: "orange" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            width="160"
                            image={articleImage}
                        />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            marginY: "1rem",
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="h6"
                        >
                            تعریف مصاحبه آنلاین
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            مصاحبه آنلاین مانند مصاحبه حضوری است با این تفاوت که
                            نیازی نیست حتما در محل مصاحبه حضور داشته باشید. . .
                        </Typography>
                        <Button
                            sx={{
                                marginTop: "1rem",
                                fontFamily: "shabnam",
                                background: "#FFFFFF",
                                color: "#5C147E",
                                border: "1px solid #F3A9FF",
                                borderRadius: "5px",
                                ":hover": {
                                    background: "#5C147E",
                                    color: "#FFFFFF",
                                },
                            }}
                        >
                            ادامه مطلب
                        </Button>
                        <Box
                            sx={{
                                display: "flex",
                                marginTop: "1rem",
                                color: "#7E2C856B",
                            }}
                        >
                            <EditIcon sx={{ fontSize: "1.3rem" }} />
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    marginRight: "1rem",
                                }}
                                variant="subtitle2"
                            >
                                نوشته ی سجاد قاسمی
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: ".5rem",
                            }}
                        >
                            <Box sx={{ color: "#7E2C856B", display: "flex" }}>
                                <AlarmIcon sx={{ fontSize: "1.3rem" }} />
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                        marginRight: "1rem",
                                    }}
                                    variant="subtitle2"
                                >
                                    1400/06/21
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    color: "gray",
                                }}
                            >
                                <ThumbUpIcon
                                    sx={{
                                        fontSize: "1.3rem",
                                        marginLeft: "1rem",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                    }}
                                    variant="subtitle2"
                                >
                                    125
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(220, 106, 230, 0.15)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "20px",
                        paddingX: "2.5rem",
                        paddingY: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 250,
                    }}
                >
                    <Box sx={{ bgcolor: "orange" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            width="160"
                            image={articleImage}
                        />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            marginY: "1rem",
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="h6"
                        >
                            تعریف مصاحبه آنلاین
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            مصاحبه آنلاین مانند مصاحبه حضوری است با این تفاوت که
                            نیازی نیست حتما در محل مصاحبه حضور داشته باشید. . .
                        </Typography>
                        <Button
                            sx={{
                                marginTop: "1rem",
                                fontFamily: "shabnam",
                                background: "#FFFFFF",
                                color: "#5C147E",
                                border: "1px solid #F3A9FF",
                                borderRadius: "5px",
                                ":hover": {
                                    background: "#5C147E",
                                    color: "#FFFFFF",
                                },
                            }}
                        >
                            ادامه مطلب
                        </Button>
                        <Box
                            sx={{
                                display: "flex",
                                marginTop: "1rem",
                                color: "#7E2C856B",
                            }}
                        >
                            <EditIcon sx={{ fontSize: "1.3rem" }} />
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    marginRight: "1rem",
                                }}
                                variant="subtitle2"
                            >
                                نوشته ی سجاد قاسمی
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: ".5rem",
                            }}
                        >
                            <Box sx={{ color: "#7E2C856B", display: "flex" }}>
                                <AlarmIcon sx={{ fontSize: "1.3rem" }} />
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                        marginRight: "1rem",
                                    }}
                                    variant="subtitle2"
                                >
                                    1400/06/21
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    color: "gray",
                                }}
                            >
                                <ThumbUpIcon
                                    sx={{
                                        fontSize: "1.3rem",
                                        marginLeft: "1rem",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                    }}
                                    variant="subtitle2"
                                >
                                    125
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(220, 106, 230, 0.15)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "20px",
                        paddingX: "2.5rem",
                        paddingY: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 250,
                    }}
                >
                    <Box sx={{ bgcolor: "orange" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            width="160"
                            image={articleImage}
                        />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            marginY: "1rem",
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="h6"
                        >
                            تعریف مصاحبه آنلاین
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            مصاحبه آنلاین مانند مصاحبه حضوری است با این تفاوت که
                            نیازی نیست حتما در محل مصاحبه حضور داشته باشید. . .
                        </Typography>
                        <Button
                            sx={{
                                marginTop: "1rem",
                                fontFamily: "shabnam",
                                background: "#FFFFFF",
                                color: "#5C147E",
                                border: "1px solid #F3A9FF",
                                borderRadius: "5px",
                                ":hover": {
                                    background: "#5C147E",
                                    color: "#FFFFFF",
                                },
                            }}
                        >
                            ادامه مطلب
                        </Button>
                        <Box
                            sx={{
                                display: "flex",
                                marginTop: "1rem",
                                color: "#7E2C856B",
                            }}
                        >
                            <EditIcon sx={{ fontSize: "1.3rem" }} />
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    marginRight: "1rem",
                                }}
                                variant="subtitle2"
                            >
                                نوشته ی سجاد قاسمی
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: ".5rem",
                            }}
                        >
                            <Box sx={{ color: "#7E2C856B", display: "flex" }}>
                                <AlarmIcon sx={{ fontSize: "1.3rem" }} />
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                        marginRight: "1rem",
                                    }}
                                    variant="subtitle2"
                                >
                                    1400/06/21
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    color: "gray",
                                }}
                            >
                                <ThumbUpIcon
                                    sx={{
                                        fontSize: "1.3rem",
                                        marginLeft: "1rem",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                    }}
                                    variant="subtitle2"
                                >
                                    125
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default ArticlesPage;
