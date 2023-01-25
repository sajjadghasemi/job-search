import { Box, Typography, FormControl, MenuItem } from "@mui/material";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MainPage = () => {
    const [age, setAge] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
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
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box>
                    <Typography variant="h4" sx={{ fontFamily: "shabnam" }}>
                        ایمیل های اطلاع رسانی من
                    </Typography>
                </Box>
                <Box sx={{ fontFamily: "shabnam" }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            sx={{ fontFamily: "shabnam" }}
                            size="small"
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                        >
                            <MenuItem sx={{ fontFamily: "shabnam" }} value="">
                                فیلتر
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box>
                <TableContainer sx={{ marginTop: "2rem" }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                        fontFamily: "shabnam",
                                    },
                                }}
                            >
                                <TableCell align="right">
                                    ادمین اینستاگرام (خانم) در دسته‌بندی تولید و
                                    مدیریت محتوا تهران
                                </TableCell>
                                <TableCell align="right">
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <VisibilityIcon
                                            sx={{ color: "#664482" }}
                                        />
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                            }}
                                            to=""
                                        >
                                            مشاهده
                                        </Link>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <EditIcon sx={{ color: "#664482" }} />
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                            }}
                                            to=""
                                        >
                                            ویرایش
                                        </Link>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <DeleteIcon sx={{ color: "#664482" }} />
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                            }}
                                            to=""
                                        >
                                            حذف
                                        </Link>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default MainPage;
