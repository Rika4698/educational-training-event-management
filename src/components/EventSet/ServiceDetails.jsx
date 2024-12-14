/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import swal from "sweetalert";
import RatingSet from "./RatingSet";
import  { useContext } from "react";
import { CartContext } from "../../Hook/CartContext";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ServiceDetails = ({services}) => {

  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
    const{id,name,image,detailsDescription,price,category,starRatings,classHours} = services || {};
    const handleAddToCart = () => {
      const isExits = cart.find((item) => item.id === services.id);
      if (isExits) {
        // Item already in cart
        swal("Sorry!", "Already added this cart !", "error");
      } else {
        // Add item to cart
        addToCart(services);
        swal({
          title: "Good job!",
          text: "Added to cart successfully!",
          icon: "success",
          buttons:{
            
            Cart: {
              text: "OK",
              value: "Cart",
            },
          },
        }).then((value) => {
          if (value === "Cart") {
            // Redirect to the cart page
            navigate("/cart"); 
          }
        });
      }
    };

    // const handleAddToCart = () => {
    //     const addedCartArray = [];
    //     const cartItems = JSON.parse(localStorage.getItem("cart"));
    //     if (!cartItems) {
    //         addedCartArray.push(services);
    //         localStorage.setItem("cart", JSON.stringify( addedCartArray));
    //         swal("Good job!", "Added cart successfully.", "success");
    //     }
    //     else {
    //         const isExits = cartItems.find((services) => services.id == id);
           
            
    //         if (!isExits) {
      
    //             addedCartArray.push(...cartItems, services);
    //           localStorage.setItem("cart", JSON.stringify(addedCartArray));
    //           swal("Good job!", "Added cart successfully.", "success");
             
    //         } else {
    //           swal("Sorry!", "Already added this cart !", "error");
    //         }
      
      
    //       }
    //       console.log(addedCartArray.length);
      
    // };


    return (
        <div className=" dark:bg-black">
            <hr className="" />
            <h1 className="font-bold text-5xl  text-teal-500 ml-4 lg:ml-20 mt-10">Event Details__</h1>
            <div className="card  mx-6 lg:card-side lg:mx-10 bg-base-100  mt-8 pb-8  dark:bg-black">
  <figure className=" w-auto  lg:w-[550px] lg:h-[500px]"><img src={image} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-3xl dark:text-white">{name}</h2>
    <h3 className="text-gray-400">category: {category}</h3>
  <div className="flex gap-2">
  <RatingSet  rating={starRatings}></RatingSet>
 <p className="text-base font-bold dark:text-white  ">({starRatings})</p>
  </div>
    <h3 className="font-bold text-emerald-700 dark:text-emerald-400">Class Hours: {classHours} hr</h3>
    <br />
    {detailsDescription?.map((paragraph, index) => (
          <p className="dark:text-white" key={index}>{paragraph}</p>
        ))}
        <hr />
    
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