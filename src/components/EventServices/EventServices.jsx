/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import Event from "./Event";







const Events = () => {
    const service = useLoaderData();
   
    return (
        <div className="bg-cyan-50 w-[100%] m-0">
            
            <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8 ">
            {
            service.map(services =><Event key={services.id} services={services}></Event>
             )
            }
            </div>
           
      
        </div>
    );
};

export default Events;