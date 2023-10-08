import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";


const EventSet = () => {
    const[services,setServices] = useState({});
        const {id} = useParams();
        const service = useLoaderData();
        useEffect(() => {
            const findService = service.find((services) => services.id == id);
            setServices(findService);
        },[id,service])

    return (
        <div>
            <ServiceDetails services={services}></ServiceDetails>
        </div>
    );
};

export default EventSet;