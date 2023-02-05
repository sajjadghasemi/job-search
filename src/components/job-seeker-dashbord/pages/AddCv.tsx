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
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddCv } from "../../../store/usersSlice";

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

type AddCvTypes = {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    city: string;
    address: string;
    phoneNumber: string;
    companyName: string;
    title: string;
    enterYear: string;
    exitYear: string;
    university: string;
    major: string;
    grade: string;
};

const Cv = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [day, setDay] = React.useState("");
    const [month, setMonth] = React.useState("");
    const [year, setYear] = React.useState("");
    const [skills, setSkills] = React.useState<React.SetStateAction<any>>([]);
    const [skillInput, setSkillInput] = React.useState("");
    const [langs, setLangs] = React.useState<React.SetStateAction<any>>([]);
    const [langInput, setLangInput] = React.useState("");
    const handleChangeDay = (event: { target: { value: string } }) => {
        setDay(event.target.value);
    };
    const handleChangeMonth = (event: { target: { value: string } }) => {
        setMonth(event.target.value);
    };
    const handleChangeYear = (event: { target: { value: string } }) => {
        setYear(event.target.value);
    };

    const addSkill = () => {
        if (!skillInput) return alert("Type Something!!!");
        const newSkill: string = skillInput;
        const list: string[] = [...skills];
        list.push(newSkill);
        setSkills(list);
        setSkillInput("");
    };

    const addLang = () => {
        if (!langInput) return alert("Type Something!!!");
        const newLang: string = langInput;
        const list: string[] = [...langs];
        list.push(newLang);
        setLangs(list);
        setLangInput("");
    };

    let schema = yup.object().shape({
        email: yup.string().email().required("ایمیل را وارد کنید"),
        password: yup.string().min(4).max(10).required("رمزعبور را وارد کنید"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddCvTypes>();

    const onSubmit: SubmitHandler<AddCvTypes> = (data) => {
        dispatch(
            AddCv({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                cv: {
                    address: data.address,
                    city: data.city,
                    dateOfBirth: `${day}/${month}/${year}`,
                    educationExp: {
                        university: data.university,
                        major: data.major,
                        grade: data.grade,
                    },
                    img: null,
                    languages: langs,
                    phoneNumber: data.phoneNumber,
                    skills: skills,
                    workExp: {
                        conpanyName: data.companyName,
                        title: data.title,
                        enterYear: data.enterYear,
                        exitYear: data.exitYear,
                    },
                },
            })
        );
        navigate("/user/cv");
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
                    onSubmit={handleSubmit(onSubmit)}
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
                        <BootstrapInput
                            {...register("firstName", { required: true })}
                            placeholder="نام"
                            type="text"
                        />
                        <BootstrapInput
                            {...register("lastName", { required: true })}
                            placeholder="نام خانوادگی"
                            type="text"
                        />
                        <BootstrapInput
                            {...register("city", { required: true })}
                            placeholder="شهر"
                            type="text"
                        />
                        <BootstrapInput
                            {...register("address", { required: true })}
                            placeholder="آدرس"
                            type="text"
                        />
                        <BootstrapInput
                            {...register("phoneNumber", { required: true })}
                            placeholder="شماره تماس"
                            type="text"
                        />
                        <BootstrapInput
                            {...register("email", { required: true })}
                            placeholder="ایمیل"
                            type="email"
                        />
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
                                value={day}
                                onChange={handleChangeDay}
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
                                value={month}
                                onChange={handleChangeMonth}
                                input={<BootstrapInput />}
                                sx={{ fontFamily: "shabnam" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>مهر</option>
                                <option value={20}>بهمن</option>
                                <option value={30}>اردیبهشت</option>
                            </NativeSelect>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={year}
                                onChange={handleChangeYear}
                                input={<BootstrapInput />}
                                sx={{ fontFamily: "shabnam" }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>1400</option>
                                <option value={20}>1401</option>
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
                        <BootstrapInput
                            {...register("companyName", { required: true })}
                            placeholder="نام شرکت"
                            type="text"
                        />
                        <BootstrapInput
                            {...register("title", { required: true })}
                            placeholder="عنوان شغلی"
                            type="text"
                        />
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
                            <BootstrapInput
                                {...register("enterYear", { required: true })}
                                placeholder="از"
                                type="text"
                            />
                            <BootstrapInput
                                {...register("exitYear", { required: true })}
                                placeholder="تا"
                                type="text"
                            />
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
                        <BootstrapInput
                            {...register("university", { required: true })}
                            placeholder="نام دانشگاه"
                            type="text"
                        />
                        <BootstrapInput
                            {...register("major", { required: true })}
                            placeholder="رشته تحصیلی"
                            type="text"
                        />
                        <BootstrapInput
                            {...register("grade", { required: true })}
                            placeholder="مقطع تحصیلی"
                            type="text"
                        />
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
                            alignItems: "center",
                        }}
                    >
                        <BootstrapInput
                            placeholder="افزودن مهارت"
                            type="text"
                            fullWidth
                            onChange={(event: any) => {
                                setSkillInput(event.target.value);
                            }}
                            value={skillInput}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                            }}
                        >
                            {skills &&
                                skills.map((item: any) => (
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            border: "1px solid limegreen",
                                            padding: ".2rem",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                        </Box>
                        <Button
                            sx={{
                                width: "10rem",
                                fontFamily: "shabnam",
                                background: "green",
                                color: "#FFFFFF",
                                borderRadius: "5px",
                                ":hover": {
                                    background: "darkgreen",
                                    color: "#FFFFFF",
                                },
                            }}
                            onClick={addSkill}
                        >
                            افزودن مهارت
                        </Button>
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
                            alignItems: "center",
                        }}
                    >
                        <BootstrapInput
                            value={langInput}
                            fullWidth
                            onChange={(event: any) => {
                                setLangInput(event.target.value);
                            }}
                            placeholder="افزودن زبان"
                            type="text"
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                            }}
                        >
                            {langs &&
                                langs.map((item: any) => (
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            border: "1px solid limegreen",
                                            padding: ".2rem",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                        </Box>
                        <Button
                            sx={{
                                width: "10rem",
                                fontFamily: "shabnam",
                                background: "green",
                                color: "#FFFFFF",
                                borderRadius: "5px",
                                ":hover": {
                                    background: "darkgreen",
                                    color: "#FFFFFF",
                                },
                            }}
                            onClick={addLang}
                        >
                            افزودن مهارت
                        </Button>
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
            </Box>
        </Box>
    );
};

export default Cv;
