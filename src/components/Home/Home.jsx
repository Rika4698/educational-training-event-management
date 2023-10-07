import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeService from "../Services/HomeService";



const Home = () => {
    const service = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <HomeService service={service}></HomeService>
            
        </div>
    );
};

export default Home;