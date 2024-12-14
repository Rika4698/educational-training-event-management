/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";


const AddCart = ({services,handleRemove}) => {

    const {id,name,image,price,shortDescription} = services || {};
    

    return (
     
        <div className=" flex justify-center items-center min-[376px]:mx-6  " >
     {/* <RxCrossCircled  size={40}  style={{
    stroke: "red", 
    strokeWidth: 0.5, 
  }}  /> */}
    
            <div className=" sticky  ">
  <div className="absolute   top-0 left-0 z-10 lg:top-3 xl:-top-7 xl:left-4 xl:z-10 ">
    <button onClick={() => handleRemove(id)} className=" rounded font-bold focus:outline-none xl:mt-10"> 
    <RxCrossCircled className="w-6 h-6 text-red-700" size={40}  style={{
    stroke: "red", 
    strokeWidth: 0.5, 
  }} />
    
      </button>
  </div> 

      <div className="card rounded-xl bg-base-200 w-[340px] md:w-[324px] md:h-[500px] lg:w-[640px] lg:h-[270px]   xl:w-[630px] xl:h-[265px] xl:mx-4 lg:my-3  ">
  <div className="px-10 py-10 flex-col lg:hero-content   lg:flex-row ">
    <img src={image} className="w-64 h-52 rounded-lg mt-4  xl:h-[200px] xl:w-[280px] " />
    <div className="card pt-4 gap-3 items-center text-center  xl:w-[250px] ">
      <h1 className=" text-lg font-bold    ">{name}</h1>
     
      <h3 className="font-normal text-base text-slate-500 xl:w-[200px]  ">{shortDescription}</h3>
     <h3 className="text-base text-pink-400 font-semibold ">Price: {price}TK</h3>
     <div className="card-actions">
     <Link to={`/service/${id}`}>
<button className="btn bg-gradient-to-r from-teal-200 to-blue-400 text-cyan-900 font-bold text-base ">View Details</button>
</Link>

{/* <button onClick={()=> handleBuy()} className="btn bg-gradient-to-r from-rose-400 to-blue-400 text-slate-900 font-bold text-base">Make Purchase</button> */}

     </div>
    </div>
  </div>
</div>
    
 
</div>


{/* <div className="card  bg-base-100 h-[560px]  xl:h-auto ">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className=" w-[500px]  h-[255px] rounded-xl" />
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
</div> */}
            
        </div>
        
    );
};

export default AddCart;