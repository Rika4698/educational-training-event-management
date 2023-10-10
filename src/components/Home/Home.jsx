import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeService from "../Services/HomeService";
import BlogSection from "../PurchaseList/BlogSection";
import Section from "../section/section";




const Home = () => {
    const service = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <HomeService service={service}></HomeService>
            <BlogSection></BlogSection>
            <Section></Section>
        </div>
    );
};

export default Home;