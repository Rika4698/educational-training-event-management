/* eslint-disable react/prop-types */

import Services from "./Services";


const HomeService = ({service}) => {
    return (
        <div className="bg-cyan-50 w-[100%] m-0">
            <h1 className="text-center font-bold text-4xl text-indigo-900 underline pt-12">Our Event Services</h1>
            <div className="grid grid-cols-1 ml-16 pb-12 mt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8 ">
            {
            service.slice(0,6).map(services =><Services key={services.id} services={services}></Services>
             )
            }
            
            
             
            
            
        </div>
        </div>
    );
};

export default HomeService;