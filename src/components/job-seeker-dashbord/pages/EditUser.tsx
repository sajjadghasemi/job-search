import styled from "@emotion/styled";
import { Box, Button, InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editUserReducer } from "../../../store/usersSlice";

const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
        borderRadius: 5,
        position: "relative",
        border: "1px solid #ced4da",
        fontSize: 14,
        width: "auto",
        padding: "14px 18px",
        fontFamily: ["shabnam"].join(","),
    },
}));

type CompanyEditInputTypes = {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
};

const EditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let schema = yup.object().shape({
        email: yup.string().email().required("ایمیل را وارد کنید"),
        password: yup.string().min(4).max(10).required("رمزعبور را وارد کنید"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CompanyEditInputTypes>();

    const onSubmit: SubmitHandler<CompanyEditInputTypes> = (data) => {
        dispatch(
            editUserReducer({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
            })
        );
        navigate("/user");
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
                    justifyContent: "center",
                }}
            >
                <Box
                    component={"form"}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginTop: "2rem",
                    }}
                >
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
                                <input hidden accept="image/*" type="file" />
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

                    <BootstrapInput
                        placeholder="نام"
                        type="text"
                        {...register("firstName", { required: true })}
                    />
                    <BootstrapInput
                        placeholder="نام خانوادگی"
                        type="text"
                        {...register("lastName", { required: true })}
                    />
                    <BootstrapInput
                        placeholder="ایمیل"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <BootstrapInput
                        placeholder="رمز عبور"
                        type="password"
                        {...register("password", { required: true })}
                    />
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

export default EditUser;
