import { Button, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AlarmIcon from "@mui/icons-material/Alarm";
import articleImage from "../../../assets/uiImages/article1.svg";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import Search from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextareaAutosize from "@mui/base/TextareaAutosize";

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

const SingleArticle = () => {
    return (
        <Container>
            {" "}
            <Box sx={{ marginTop: "1rem", padding: "1rem" }}>
                <Box
                    sx={{
                        padding: "2rem",
                    }}
                >
                    <Box
                        sx={{
                            background:
                                "linear-gradient(257.7deg, #D1DAFB 2.31%, rgba(227, 239, 242, 0) 137.33%)",
                            border: "1px solid rgba(220, 106, 230, 0.15)",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <Box
                            sx={{
                                padding: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <Typography
                                sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                                variant="h4"
                            >
                                مصاحبه شغلی
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                        marginRight: "1rem",
                                    }}
                                    variant="subtitle1"
                                >
                                    هر آنچه لازم است برای موفقیت
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography
                                    sx={{
                                        fontFamily: "shabnam",
                                        marginRight: "1rem",
                                    }}
                                    variant="subtitle1"
                                >
                                    در مصاحبه شغلی بدانید
                                </Typography>
                            </Box>
                            <Box sx={{ marginTop: "2rem" }}>
                                <InputBase
                                    sx={{
                                        bgcolor: "#FFFFFF",
                                        padding: "0.7rem",
                                        borderRadius: "10px",
                                        width: "22rem",
                                        fontFamily: "shabnam",
                                        boxShadow:
                                            "0px 2px 4px rgba(0, 0, 0, 0.15)",
                                    }}
                                    placeholder={"جستجوی مقاله"}
                                    endAdornment={<Search />}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "2rem",
                                width: "50%",
                                float: "right",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 3,
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 170,
                                            height: 130,
                                            bgcolor: "#D1DAFB",
                                            borderRadius: "10px",
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            width: 150,
                                            height: 110,
                                            bgcolor: "#D1DAFB",
                                            borderRadius: "10px",
                                        }}
                                    ></Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 3,
                                        alignItems: "center",
                                        marginTop: "1rem",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 150,
                                            height: 110,
                                            bgcolor: "#D1DAFB",
                                            borderRadius: "10px",
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            width: 170,
                                            height: 130,
                                            bgcolor: "#D1DAFB",
                                            borderRadius: "10px",
                                        }}
                                    ></Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    padding: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(220, 106, 230, 0.45)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
                        borderRadius: "20px",
                        paddingX: "2.5rem",
                        paddingY: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        width: 550,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            marginY: "1rem",
                        }}
                    >
                        <Typography
                            sx={{ fontFamily: "shabnam", marginY: "1rem" }}
                            variant="h5"
                        >
                            انچه باید در جلسه مصاحبه بپرسید
                        </Typography>
                        <Typography
                            sx={{ fontFamily: "shabnam", color: "gray" }}
                            variant="subtitle1"
                        >
                            آنچه باید در جلسه مصاحبه بپرسید «آیا سؤالی دارید؟»
                            موردی است که به‌طور معمول در پایان هر مصاحبه از شما
                            پرسیده می‌شود. اگر پیش از جلسه به‌خوبی آماده شده
                            باشید، به‌احتمال ‌زیاد چند گزینه برای پرسیدن دارید؛
                            اما ما می‌خواهیم در مصاحبه بسیار بهتر از «خوب» عمل
                            کنیم. می‌خواهیم داوطلبی باشیم که کارفرما با دیدنمان
                            شگفت‌زده شود و به‌سرعت پیشنهاد شغلی خود را ارئه دهد.
                            اندرو کوین (Andrew Quinn)، معاون سابق آموزش و توسعه
                            هاب اسپات (HubSpot)، می‌گوید: «همیشه تعجب می‌کنم که
                            چرا برخی از متقاضیان کار هیچ سؤالی نمی‌کنند و همیشه
                            به داوطلبانی که هنگام مصاحبه سؤال می‌کنند، احترام
                            می‌گذارم.» در اینجا سؤالاتی را مطرح می‌کنیم که به
                            شما کمک می‌کند تا برای مصاحبه بعدی خود آماده باشید،
                            سپس گزینه‌های مهمی را که هنگام مکالمه تلفنی با منابع
                            انسانی می‌توانید بپرسید، ذکر می‌کنیم. از آنها در
                            مصاحبه بعدی خود استفاده کنید و ببینید که چگونه روند
                            مکالمه‌ شما را تغییر می‌دهد. مطلب مرتبط: نمونه
                            سوالات مصاحبه استخدامی ۱. آیا این جایگاه شغلی در
                            دستیابی به اهداف بزرگ‌تر شرکت کمک می‌کند؟ یافتن شخصی
                            که بتواند نقش خود را اجرا کند، خیلی دشوار نیست.
                            یافتن شخصی که بتواند نقش خود را اجرا کند و درک کند
                            که در دستیابی به اهداف بزرگ شرکت نیز نقش دارد، بسیار
                            دشوار است. این شخص باید بتواند کارهای خود را مدیریت
                            و اولویت‌بندی کند و همچنین در جهت پیشرفت شرکت رشد
                            کند. این سؤال چه کمکی به شما می‌کند؟ به‌دست‌آوردن
                            این اطلاعات دشوار است، بنابراین این فرصت خوبی است که
                            این اطلاعات را به دست آورید و در صورت استخدام‌شدن،
                            از آنها برای تصمیم‌‌گیری استفاده کنید. ۲. در ماه
                            اول، موفق‌ترین استخدام‌های جدید چه کاری را انجام
                            می‌دهند؟ مطرح کردن این سؤال در مصاحبه نشان می‌دهد که
                            فردی هستید که به‌جای اینکه وقت خود را برای پر‌کردن
                            فرم‌های منابع انسانی صرف کنید، یک‌راست به سراغ اصل
                            مطلب می‌روید؛ همچنین نشان می‌دهد که الگوهای موفقیت
                            را می‌شناسید و می‌خواهید فقط از انسان‌های موفق و
                            مؤثر الگوبرداری کنید. این سؤال چه کمکی به شما
                            می‌کند؟ هر شرکتی جزئیات عجیب‌و‌غریب، محیط خاص خود و
                            انتظارات ناگفته‌ای دارد. این سؤال به شما کمک می‌کند
                            تا اطلاعات جزئی‌تری را بدانید و در آینده پشیمان
                            نشوید و نگویید: «کاش چیزی را که الان می‌دانم، آن
                            موقع می‌دانستم.» ۳. برای تشخیص میزان موفقیت کارمندان
                            خود چه معیارهایی دارید؟ سؤالاتی از این قبیل در
                            مصاحبه نشان می‌دهد که فردی هدف‌گرا و هستید، در برابر
                            وظایفتان مسئولیت پذیری نشان می‌دهید، پاسخ‌گوی تمام
                            مشکلات و پرسش‌ها خواهید بود و از مسئولیت‌هایتان شانه
                            خالی نمی‌کنید؛ همچنین از وظایف خود به‌خوبی استقبال
                            می‌کنید و برای رسیدن به اهدافی که مسئول آن هستید،
                            سرسختانه کار خواهید کرد.
                        </Typography>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    color: "#7E2C856B",
                                }}
                                variant="subtitle2"
                            >
                                نوشته ی سجاد قاسمی
                            </Typography>
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
                        border: "1px solid rgba(220, 106, 230, 0.45)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
                        borderRadius: "20px",
                        paddingX: "2.5rem",
                        paddingY: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        width: 300,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h6">
                            پربازدیدترین ها
                        </Typography>
                        <Box
                            sx={{
                                borderBottom: "6px solid rgba(20, 24, 31, 0.3)",
                                width: 162,
                                marginBottom: ".6rem",
                                marginRight: ".7rem",
                            }}
                        ></Box>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            marginY: "2rem",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ bgcolor: "orange" }}>
                            <CardMedia
                                component="img"
                                height="70"
                                width="100"
                                image={articleImage}
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    marginRight: "1rem",
                                }}
                                variant="subtitle1"
                            >
                                نکاتی که برای مصاحبه باید به آن توجه کنید
                                <Box
                                    sx={{
                                        display: "flex",
                                        marginTop: "1rem",
                                        color: "#C542D0",
                                    }}
                                >
                                    <VisibilityIcon
                                        sx={{ fontSize: "1.3rem" }}
                                    />
                                    <Typography
                                        sx={{
                                            fontFamily: "shabnam",
                                            marginRight: ".5rem",
                                        }}
                                        variant="subtitle2"
                                    >
                                        4023
                                    </Typography>
                                </Box>
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            marginY: "2rem",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ bgcolor: "orange" }}>
                            <CardMedia
                                component="img"
                                height="70"
                                width="100"
                                image={articleImage}
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    marginRight: "1rem",
                                }}
                                variant="subtitle1"
                            >
                                نکاتی که برای مصاحبه باید به آن توجه کنید
                                <Box
                                    sx={{
                                        display: "flex",
                                        marginTop: "1rem",
                                        color: "#C542D0",
                                    }}
                                >
                                    <VisibilityIcon
                                        sx={{ fontSize: "1.3rem" }}
                                    />
                                    <Typography
                                        sx={{
                                            fontFamily: "shabnam",
                                            marginRight: ".5rem",
                                        }}
                                        variant="subtitle2"
                                    >
                                        4023
                                    </Typography>
                                </Box>
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h6">
                            دسته بندی ها
                        </Typography>
                        <Box
                            sx={{
                                borderBottom: "6px solid rgba(20, 24, 31, 0.3)",
                                width: 162,
                                marginBottom: ".6rem",
                                marginRight: ".7rem",
                            }}
                        ></Box>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "shabnam",
                            }}
                            variant="subtitle1"
                        >
                            فرصت های شغلی
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "shabnam",
                            }}
                            variant="subtitle1"
                        >
                            معرفی شرکت ها
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "shabnam",
                            }}
                            variant="subtitle1"
                        >
                            ساخت رزومه
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    paddingX: "3rem",
                    paddingY: "1rem",
                }}
            >
                <Box
                    sx={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(220, 106, 230, 0.45)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
                        borderRadius: "20px",
                        paddingX: "2.5rem",
                        paddingY: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        width: 550,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h6">
                            ثبت نظر شما
                        </Typography>
                        <Box
                            sx={{
                                borderBottom: "6px solid rgba(20, 24, 31, 0.3)",
                                width: "75%",
                                marginBottom: ".6rem",
                                marginRight: ".7rem",
                            }}
                        ></Box>
                    </Box>

                    {/* Comment Section  */}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={5}
                            placeholder="Minimum 3 rows"
                            style={{
                                width: "95%",
                                border: "1px solid gray",
                                padding: "1rem",
                                borderRadius: "10px",
                                marginTop: "1rem",
                                resize: "none",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "1rem",
                            gap: 2,
                        }}
                    >
                        <BootstrapInput placeholder="نام" type="text" />
                        <BootstrapInput placeholder="ایمیل" type="email" />
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
                            ثبت نظر
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    paddingX: "3rem",
                    paddingY: "1rem",
                }}
            >
                <Box
                    sx={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(220, 106, 230, 0.45)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
                        borderRadius: "20px",
                        paddingX: "2.5rem",
                        paddingY: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        width: 550,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography sx={{ fontFamily: "shabnam" }} variant="h6">
                            نظرات شما
                        </Typography>
                        <Box
                            sx={{
                                borderBottom: "6px solid rgba(20, 24, 31, 0.3)",
                                width: "75%",
                                marginBottom: ".6rem",
                                marginRight: ".7rem",
                            }}
                        ></Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box
                            sx={{
                                display: "flex",
                                marginTop: "1rem",
                                gap: 2,
                            }}
                        >
                            <Typography sx={{ fontFamily: "shabnam" }}>
                                سجاد نوشته:
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    color: "gray",
                                }}
                            >
                                این مطلب فوق العاده بود ممنونم از شما{" "}
                            </Typography>
                        </Box>
                        <Divider sx={{ paddingY: ".8rem" }} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box
                            sx={{
                                display: "flex",
                                marginTop: "1rem",
                                gap: 2,
                            }}
                        >
                            <Typography sx={{ fontFamily: "shabnam" }}>
                                سجاد نوشته:
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "shabnam",
                                    color: "gray",
                                }}
                            >
                                این مطلب فوق العاده بود ممنونم از شما{" "}
                            </Typography>
                        </Box>
                        <Divider sx={{ paddingY: ".8rem" }} />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default SingleArticle;
