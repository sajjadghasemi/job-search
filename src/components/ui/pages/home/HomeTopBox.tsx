import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import homeImage from "../../../../assets/uiImagres/homeImage.svg";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";

const names = ["تهران", "تبریز"];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const HomeTopBox = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Box>
                <Typography sx={{ fontFamily: "shabnam" }} variant="h3">
                    هنوز شغل دلخواهتو پیدا نکردی؟
                </Typography>
                <Typography sx={{ fontFamily: "shabnam" }} variant="h5">
                    ما بهت کمک میکنیم شغل دلخواهتو پیدا کنی!!{" "}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        marginTop: "1rem",
                    }}
                >
                    <Box
                        sx={{
                            m: 1,
                            width: 150,
                            mt: 5,
                            padding: ".3rem",
                            borderRadius: "5px",
                            border: "2px solid #E9DBDB",
                            flexGrow: 1,
                        }}
                    >
                        <Select
                            sx={{
                                "& > fieldset": {
                                    border: "none",
                                },
                                fontFamily: "shabnam",
                                borderLeft: "2px solid #E9DBDB",
                            }}
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <b>شهر</b>;
                                }

                                return selected.join(", ");
                            }}
                            inputProps={{
                                "aria-label": "Without label",
                            }}
                        >
                            <MenuItem sx={{ fontFamily: "shabnam" }} value="">
                                <b>شهر</b>
                            </MenuItem>
                            {names.map((name) => (
                                <MenuItem
                                    sx={{ fontFamily: "shabnam" }}
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            sx={{
                                "& > fieldset": {
                                    border: "none",
                                },
                                fontFamily: "shabnam",
                                borderLeft: "2px solid #E9DBDB",
                            }}
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <b>نوع همکاری</b>;
                                }

                                return selected.join(", ");
                            }}
                            inputProps={{
                                "aria-label": "Without label",
                            }}
                        >
                            <MenuItem sx={{ fontFamily: "shabnam" }} value="">
                                <b>نوع همکاری</b>
                            </MenuItem>
                            {names.map((name) => (
                                <MenuItem
                                    sx={{ fontFamily: "shabnam" }}
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            sx={{
                                "& > fieldset": {
                                    border: "none",
                                },
                                fontFamily: "shabnam",
                                borderLeft: "2px solid #E9DBDB",
                            }}
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <b>دسته بندی مشاغل</b>;
                                }

                                return selected.join(", ");
                            }}
                            inputProps={{
                                "aria-label": "Without label",
                            }}
                        >
                            <MenuItem sx={{ fontFamily: "shabnam" }} value="">
                                <b>دسته بندی مشاغل</b>
                            </MenuItem>
                            {names.map((name) => (
                                <MenuItem
                                    sx={{ fontFamily: "shabnam" }}
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <Button
                            sx={{
                                fontFamily: "shabnam",
                                background: "#CAAADD",
                                color: "#000000",
                                borderRadius: "7px",
                                marginRight: "1rem",
                                ":hover": {
                                    background: "#5C147E",
                                    color: "#FFFFFF",
                                },
                            }}
                        >
                            جستجو
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    // position: "relative",
                }}
            >
                <Box component="img" src={homeImage} />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "3rem",
                    }}
                >
                    <Box
                        sx={{
                            gap: 2,
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            sx={{
                                fontFamily: "shabnam",
                                background: "#D81896",
                                color: "#FFFFFF",
                                borderRadius: "7px",
                                paddingX: "3rem",
                                paddingY: "1.1rem",
                                ":hover": {
                                    background: "#5C147E",
                                    color: "#FFFFFF",
                                },
                            }}
                        >
                            شرکت
                        </Button>
                        <Button
                            sx={{
                                fontFamily: "shabnam",
                                background: "#D81896",
                                color: "#FFFFFF",
                                borderRadius: "7px",
                                paddingX: "3rem",
                                paddingY: "1.1rem",
                                ":hover": {
                                    background: "#5C147E",
                                    color: "#FFFFFF",
                                },
                            }}
                        >
                            شرکت
                        </Button>
                        <Button
                            sx={{
                                fontFamily: "shabnam",
                                background: "#D81896",
                                color: "#FFFFFF",
                                borderRadius: "7px",
                                paddingX: "3rem",
                                paddingY: "1.1rem",
                                ":hover": {
                                    background: "#5C147E",
                                    color: "#FFFFFF",
                                },
                            }}
                        >
                            شرکت
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HomeTopBox;
