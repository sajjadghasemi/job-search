import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdsSection from "./AdsSection";
import MailSection from "./MailSection";
import TopBox from "./TopBox";

const SingleCompany = () => {
    const params = useParams().name;
    const companies = useSelector(
        (state: any) => state.employersSlice.employers
    );

    const ads = useSelector((state: any) => state.adsSlice.ads);

    const singleCompany = companies.find(
        (item: any) => item.company.name === params
    );

    const companyAds = ads.filter(
        (item: any) => item.employerId === singleCompany.id
    );

    console.log(companyAds);

    return (
        <Container>
            <TopBox
                about={
                    singleCompany.company
                        ? singleCompany.company.describtions
                        : "چیزی ثبت نشده"
                }
                activityTitle={
                    singleCompany.company
                        ? singleCompany.company.activityTitle
                        : "چیزی ثبت نشده"
                }
                address={
                    singleCompany.company
                        ? singleCompany.company.address
                        : "چیزی ثبت نشده"
                }
                membersCount={
                    singleCompany.company
                        ? singleCompany.company.membersCount
                        : "چیزی ثبت نشده"
                }
                name={
                    singleCompany.company
                        ? singleCompany.company.name
                        : "چیزی ثبت نشده"
                }
            />
            <MailSection />
            <Box
                sx={{
                    padding: "2rem",
                    display: "flex",
                    gap: 3,
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {companyAds
                    ? companyAds.map((item: any) => (
                          <AdsSection
                              id={item.id}
                              adsInfo={item.adsInfo}
                              salary={item.salary}
                          />
                      ))
                    : ""}
            </Box>
        </Container>
    );
};

export default SingleCompany;
