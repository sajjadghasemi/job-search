import React, { FC } from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const AdsSection: FC<{
    id: string;
    adsInfo: string;
    salary: string;
}> = ({ id, adsInfo, salary }) => {
    return (
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
            <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/JobAds/${id}`}
            >
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
                        sx={{
                            fontFamily: "shabnam",
                            marginY: "1rem",
                        }}
                        variant="subtitle1"
                    >
                        {adsInfo}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "shabnam",
                            color: "gray",
                        }}
                        variant="subtitle1"
                    >
                        {salary}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "shabnam",
                            color: "gray",
                        }}
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
            </Link>
        </Box>
    );
};

export default AdsSection;
