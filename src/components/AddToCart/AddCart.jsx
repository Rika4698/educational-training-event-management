/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const AddCart = ({services,handleRemove}) => {

    const {id,name,image,price,shortDescription} = services || {};
    

    return (
        <div className="" >
          
            <div className=" relative ">
  <div className="absolute   -top-24 left-2  xl:w-auto xl:h-auto xl:-top-24 xl:left-4 ">
    <button onClick={() => handleRemove(id)} className="rounded bg-emerald-300 font-bold  mt-24 mr-24 "> Remove</button>
  </div> 

      <div className=" bg-base-200 w-[360px] m-2  md:w-[640px] lg:w-[640px]   xl:w-[630px] xl:h-[300px] xl:mx-4 xl:my-10 ">
  <div className="hero-content flex-col  md:flex-row md:mt-4 lg:flex-row">
    <img src={image} className="w-64 h-52 rounded-lg mt-4  xl:h-[200px] xl:w-[280px]" />
    <div>
      <h1 className="text-xl font-bold">{name}</h1>
     
      <p className="font-normal text-base text-slate-500 py-2">{shortDescription}</p>
     <h3 className="text-2xl text-pink-400 font-semibold pb-2">Price: {price}TK</h3>
     <div className="flex gap-4">
     <Link to={`/service/${id}`}>
<button className="btn bg-gradient-to-r from-teal-200 to-blue-400 text-cyan-900 font-bold text-base">View Details</button>
</Link>

{/* <button onClick={()=> handleBuy()} className="btn bg-gradient-to-r from-rose-400 to-blue-400 text-slate-900 font-bold text-base">Make Purchase</button> */}

     </div>
    </div>
  </div>
</div>
    
 
</div>
            
        </div>
    );
};

export default AddCart;