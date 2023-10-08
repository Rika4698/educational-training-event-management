/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Services = ({services}) => {
    const {id,name,image,price,shortDescription} = services || {};

    return (
        <div>
  
           <div className="card  bg-base-100  ">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className=" w-[500px] h-[280px] rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-xl">{name}</h2>
    <p className="font-normal text-base text-slate-500">{shortDescription}</p>
     <h3 className="text-base text-pink-400 font-semibold">Price: {price}TK</h3>
    <div className="card-actions">
      <Link to={`/service/${id}`}>

      <button className="btn bg-gradient-to-r from-teal-200 to-blue-400 text-cyan-900 font-bold text-base">View Details</button>
      </Link>
    </div>
  </div>
</div>


          
        </div>
    );
};

export default Services;