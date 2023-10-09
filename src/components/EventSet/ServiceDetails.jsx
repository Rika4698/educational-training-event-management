/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import swal from "sweetalert";
import RatingSet from "./RatingSet";


const ServiceDetails = ({services}) => {
    const{id,name,image,detailsDescription,price,category,starRatings,classHours} = services || {};

    const handleAddToCart = () => {
        const addedCartArray = [];
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        if (!cartItems) {
            addedCartArray.push(services);
            localStorage.setItem("cart", JSON.stringify( addedCartArray));
            swal("Good job!", "Added cart successfully.", "success");
        }
        else {
            const isExits = cartItems.find((services) => services.id == id);
           
            
            if (!isExits) {
      
                addedCartArray.push(...cartItems, services);
              localStorage.setItem("cart", JSON.stringify(addedCartArray));
              swal("Good job!", "Added cart successfully.", "success");
             
            } else {
              swal("Sorry!", "Already added this cart !", "error");
            }
      
      
          }
      
    };


    return (
        <div>
            <hr className="border-[2px]" />
            <h1 className="font-bold text-5xl  text-teal-500 ml-4 lg:ml-20 mt-10">Event Details__</h1>
            <div className="card lg:card-side bg-base-100  m-10">
  <figure className=" w-auto  lg:w-[550px] lg:h-[500px]"><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-3xl">{name}</h2>
    <h3 className="text-gray-400">category: {category}</h3>
  <div className="flex gap-2">
  <RatingSet  rating={starRatings}></RatingSet>
 <p className="text-base ">({starRatings})</p>
  </div>
    <h3 className="font-bold text-emerald-700">Class Hours: {classHours} hr</h3>
    <br />
    {detailsDescription?.map((paragraph, index) => (
          <p className="" key={index}>{paragraph}</p>
        ))}
        <hr className="w-[300px] lg:w-auto"/>
    
    <div className="card-actions justify-between">
    <h3 className="font-bold text-pink-500 text-xl mt-2">Price: {price}TK</h3>
      <button onClick={handleAddToCart} className="btn bg-gradient-to-r from-pink-300 to-blue-400 font-bold">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;