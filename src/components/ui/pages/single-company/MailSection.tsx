import singleCompanyLoc from "../../../../assets/uiImages/singleCompanyLoc.png";
import singleCompanyMore from "../../../../assets/uiImages/singleCompanyMore.png";
import { Box, Typography, CardMedia } from "@mui/material";

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
                        فرصت های شغلی
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default MailSection;
