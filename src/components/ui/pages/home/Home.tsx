import { Container } from "@mui/system";
import Articles from "./Articles";
import BuildCv from "./BuildCv";
import HomeTopBox from "./HomeTopBox";
import JobsByCat from "./JobsByCat";
import NewestAds from "./NewestAds";

const Home = () => {
    return (
        <Container>
            <HomeTopBox />
            <JobsByCat />
            <NewestAds />
            <BuildCv />
            <Articles />
        </Container>
    );
};

export default Home;
