import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, InputBase, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import NativeSelect from "@mui/material/NativeSelect";

const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
        borderRadius: 5,
        position: "relative",
        border: "1px solid #ced4da",
        fontSize: 14,
        width: "100%",
        padding: "12px 16px",
        fontFamily: ["shabnam"].join(","),
    },
}));

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
    const [age, setAge] = React.useState("");
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };

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
                    justifyContent: "space-around",
                }}
            >
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        marginTop: "2rem",
                        width: "22rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="h5" sx={{ fontFamily: "shabnam" }}>
                            مشخصات فردی
                        </Typography>
                        <Badge
                            sx={{ width: "5rem", height: "5rem" }}
                            overlap="circular"
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            badgeContent={
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="label"
                                >
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                    />
                                    <AddCircleIcon
                                        sx={{
                                            color: "#664887",
                                            fontSize: "2.1rem",
                                        }}
                                    />
                                </IconButton>
                            }
                        >
                            <Avatar
                                sx={{ width: "5rem", height: "5rem" }}
                                alt="Travis Howard"
                                src=""
                            />
                        </Badge>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <BootstrapInput placeholder="نام" type="text" />
                        <BootstrapInput
                            placeholder="نام خانوادگی"
                            type="text"
                        />
                        <BootstrapInput placeholder="شهر" type="text" />
                        <BootstrapInput placeholder="آدرس" type="text" />
                        <BootstrapInput placeholder="شماره تماس" type="text" />
                        <BootstrapInput placeholder="ایمیل" type="email" />
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: ".4rem",
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{ fontFamily: "shabnam", color: "gray" }}
                            >
                                تاریخ تولد
                            </Typography>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                sx={{ fontFamily: "shabnam" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>1</option>
                                <option value={20}>2</option>
                                <option value={30}>3</option>
                            </NativeSelect>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                sx={{ fontFamily: "shabnam" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>1</option>
                                <option value={20}>2</option>
                                <option value={30}>3</option>
                            </NativeSelect>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                sx={{ fontFamily: "shabnam" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>1</option>
                                <option value={20}>2</option>
                                <option value={30}>3</option>
                            </NativeSelect>
                        </Box>
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{ fontFamily: "shabnam", marginTop: "1.5rem" }}
                    >
                        سوابق شغلی
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <BootstrapInput placeholder="نام شرکت" type="text" />
                        <BootstrapInput placeholder="عنوان شغلی" type="text" />
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: ".4rem",
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{ fontFamily: "shabnam", color: "gray" }}
                            >
                                تاریخ همکاری
                            </Typography>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                sx={{ fontFamily: "shabnam" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>1</option>
                                <option value={20}>2</option>
                                <option value={30}>3</option>
                            </NativeSelect>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontFamily: "shabnam", color: "gray" }}
                            >
                                تا
                            </Typography>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                sx={{ fontFamily: "shabnam" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>1</option>
                                <option value={20}>2</option>
                                <option value={30}>3</option>
                            </NativeSelect>
                        </Box>
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{ fontFamily: "shabnam", marginTop: "1.5rem" }}
                    >
                        سوابق تحصیلی
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <BootstrapInput placeholder="نام دانشگاه" type="text" />
                        <BootstrapInput placeholder="رشته تحصیلی" type="text" />
                        <BootstrapInput placeholder="مقطع تحصیلی" type="text" />
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{ fontFamily: "shabnam", marginTop: "1.5rem" }}
                    >
                        مهارت ها
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <BootstrapInput
                            placeholder="افزودن مهارت"
                            type="text"
                        />
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{ fontFamily: "shabnam", marginTop: "1.5rem" }}
                    >
                        زبان ها
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <BootstrapInput placeholder="افزودن زبان" type="text" />
                    </Box>
                    <Button
                        sx={{
                            fontFamily: "shabnam",
                            background: "#CAAADD",
                            color: "#000000",
                            borderRadius: "5px",
                            ":hover": {
                                background: "#5C147E",
                                color: "#FFFFFF",
                            },
                        }}
                        type="submit"
                    >
                        ذخیره
                    </Button>
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
                            width: "250px",
                        }}
                    >
                        <Typography variant="h6" sx={{ fontFamily: "shabnam" }}>
                            سطح رزومه{" "}
                        </Typography>
                        <BorderLinearProgress
                            sx={{ marginTop: "2rem" }}
                            variant="determinate"
                            value={30}
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
                                    background: "#CAAADD",
                                    color: "#000000",
                                    paddingX: "3rem",
                                    borderRadius: "10px",
                                    ":hover": {
                                        background: "#5C147E",
                                        color: "#FFFFFF",
                                    },
                                }}
                                type="submit"
                            >
                                نمایش رزومه
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
