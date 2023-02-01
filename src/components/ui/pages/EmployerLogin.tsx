import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    InputBase,
    Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from "../../../store/employersSlice";
import { useNavigate } from "react-router-dom";

type LoginInputs = {
    email: string;
    password: string;
};

const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
        borderRadius: 10,
        position: "relative",
        border: "1px solid #ced4da",
        fontSize: 14,
        width: "auto",
        padding: "8px 10px",
        fontFamily: ["shabnam"].join(","),
    },
}));

interface ChangeForm {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmployerLogin: FC<ChangeForm> = ({ login, setLogin }) => {
    const [userCheck, setUserCheck] = useState(false);
    const [done, setDone] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentEmployer = useSelector(
        (state: any) => state.employersSlice.currentEmployer
    );

    let schema = yup.object().shape({
        email: yup.string().email().required("ایمیل را وارد کنید"),
        password: yup.string().min(4).max(10).required("رمزعبور را وارد کنید"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>({ resolver: yupResolver(schema) });

    useEffect(() => {
        if (done) {
            if (!currentEmployer) {
                setUserCheck(true);
            } else {
                setUserCheck(false);
                navigate("/");
            }
        }
    }, [currentEmployer, done]);

    const loginHandler: SubmitHandler<LoginInputs> = (data) => {
        dispatch(
            loginReducer({
                email: data.email,
                password: data.password,
            })
        );
        setDone(true);

        // if (!currentEmployer) {
        //     setUserCheck(true);
        // } else {
        //     setUserCheck(false);
        //     navigate("/");
        // }
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: "flex",
                flexDirection: "column",
                gridTemplateColumns: { sm: "1fr 1fr" },
                gap: 2,
                marginTop: "2rem",
            }}
            onSubmit={handleSubmit(loginHandler)}
        >
            <BootstrapInput
                placeholder="ایمیل"
                type="text"
                {...register("email", { required: true })}
            />
            {errors.email?.message && (
                <Typography
                    sx={{
                        marginTop: ".5rem",
                        fontSize: ".8rem",
                        padding: ".3rem",
                        color: "red",
                        fontFamily: "shabnam",
                        border: "1px solid red",
                        borderRadius: "10px",
                    }}
                >
                    ایمیل را وارد کنید
                </Typography>
            )}
            <BootstrapInput
                placeholder="رمز عبور"
                type="password"
                {...register("password", { required: true })}
            />
            {errors.password?.message && (
                <Typography
                    sx={{
                        marginTop: ".5rem",
                        fontSize: ".8rem",
                        padding: ".3rem",
                        color: "red",
                        fontFamily: "shabnam",
                        border: "1px solid red",
                        borderRadius: "10px",
                    }}
                >
                    رمزعبور را وارد کنید
                </Typography>
            )}
            {userCheck && (
                <Typography
                    sx={{
                        marginTop: ".5rem",
                        fontSize: ".8rem",
                        padding: ".3rem",
                        color: "red",
                        fontFamily: "shabnam",
                        border: "1px solid red",
                        borderRadius: "10px",
                    }}
                >
                    این نام کاربری وجود ندارد
                </Typography>
            )}
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
                ورود
            </Button>
            <FormControlLabel
                label="مرا به خاطر بسپار"
                control={
                    <Checkbox
                        sx={{
                            color: "gray",
                            "&.Mui-checked": {
                                color: "#5C147E",
                            },
                        }}
                    />
                }
            />
            <Box
                sx={{
                    background: "#FFFFFF",
                    border: "1px solid #5C147E",
                    borderRadius: "10px",
                    paddingY: ".4rem",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "shabnam",
                        color: "#000000",
                        fontSize: ".7rem",
                        display: "inline-block",
                    }}
                >
                    کاربر جدید هستید؟
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "shabnam",
                        color: "#5C147E",
                        fontSize: ".7rem",
                        display: "inline-block",
                        borderBottom: "1px solid #5C147E",
                        cursor: "pointer",
                    }}
                    onClick={() => setLogin(!login)}
                >
                     ثبت نام
                </Typography>
            </Box>
        </Box>
    );
};

export default EmployerLogin;
