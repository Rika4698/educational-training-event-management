/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";

import Event from "./Event";







const Events = () => {
    const service = useLoaderData();
   
    return (
        <div className="bg-cyan-50 w-[100%] m-0 dark:bg-black pt-20">
            
            <div className="grid grid-cols-1 mx-4 pb-14    md:grid-cols-2  lg:grid-cols-3 lg:mx-8  gap-8 ">
            {
            service.map(services =><Event key={services.id} services={services}></Event>
             )
             
            }
            </div>
           
      
        </div>
    );
};

export default Events;