import * as React from "react";
import styled from "@emotion/styled";
import { Box, Button, InputBase, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signUpReducer } from "../../../store/usersSlice";
import { useNavigate } from "react-router-dom";

type SignUpInputs = {
    firstName: string;
    lastName: string;
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

const SignUp: React.FC<ChangeForm> = ({ login, setLogin }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let schema = yup.object().shape({
        firstName: yup.string().required("نام را وارد کنید"),
        lastName: yup.string().required("نام خانوادگی را وارد کنید"),
        email: yup.string().email().required("ایمیل را وارد کنید"),
        password: yup.string().min(4).max(10).required("رمزعبور را وارد کنید"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpInputs>({ resolver: yupResolver(schema) });

    const signUp: SubmitHandler<SignUpInputs> = (data) => {
        dispatch(
            signUpReducer({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
            })
        );
        navigate("/");
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
            onSubmit={handleSubmit(signUp)}
        >
            <div>
                <BootstrapInput
                    sx={{ width: "5rem" }}
                    placeholder="نام"
                    type="text"
                    {...register("firstName", { required: true })}
                />
                <BootstrapInput
                    sx={{ width: "7rem", marginRight: ".4rem" }}
                    placeholder="نام خانوادگی"
                    type="text"
                    {...register("lastName", { required: true })}
                />
                {errors.firstName?.message && (
                    <Typography
                        sx={{
                            // width: "100%",
                            marginTop: ".5rem",
                            fontSize: ".8rem",
                            padding: ".3rem",
                            color: "red",
                            fontFamily: "shabnam",
                            border: "1px solid red",
                            borderRadius: "10px",
                        }}
                    >
                        نام را وارد کنید
                    </Typography>
                )}
                {errors.lastName?.message && (
                    <Typography
                        sx={{
                            // width: "100%",
                            marginTop: ".5rem",
                            fontSize: ".8rem",
                            padding: ".3rem",
                            color: "red",
                            fontFamily: "shabnam",
                            border: "1px solid red",
                            borderRadius: "10px",
                        }}
                    >
                        نام خانوادگی را وارد کنید
                    </Typography>
                )}
            </div>
            <BootstrapInput
                placeholder="ایمیل"
                type="email"
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
                        // width: "100%",
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
                عضویت
            </Button>
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
                    حساب کاربری دارید؟
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
                     وارد شوید
                </Typography>
            </Box>
        </Box>
    );
};

export default SignUp;
