import { useContext } from "react";
import { CartContext } from "../../Hook/CartContext";
// import { useEffect, useState } from "react";
import AddCart from "./AddCart";


const AddCartSet = () => {
    const { cart,  removeFromCart } = useContext(CartContext);
    console.log(cart.length);


    const handleRemoveFromCart = (id) => {
        removeFromCart(id); // Remove item from cart using context
      };
    // const [cart, setCart] = useState([]);
    // const [noFound, setNoFound] = useState(false);
    
    // useEffect(() => {

    //     const cartItems = JSON.parse(localStorage.getItem("cart"));
       
        
    //     if(cartItems && cartItems.length>0) {
    //         setCart(cartItems);
    //     }
    //     else {
    //         setNoFound("Not Added Anything!");

    //     }
        
        
    // }, []);
   
    // const handleRemove = (id) => {
       
    //     const updatedCart = cart.filter((item) => item.id !== id);
    //     localStorage.setItem("cart", JSON.stringify(updatedCart));
    //     setCart(updatedCart);
    //     if (updatedCart.length == 0) {
    //         localStorage.clear();
    //         setNoFound("Not Added Anything!")
    //       }
        

    //   };
      
    
    return (
        <div>
            
            {cart.length == 0?
                <h1 className="h-[80vh] flex justify-center items-center font-bold text-4xl">Not Added Anything!</h1> :
                <div className="">
                      {/* <Link to={`/cart`} cartCount={cart.length}>
                
                </Link>  */}
                       
                    <div className="grid grid-cols-1 pb-6 pt-10  md:grid-cols-2 lg:grid-cols-1  xl:grid-cols-2 gap-5  xl:px-6 dark:bg-black">
                        {
                             cart.map((services) => (
                                <AddCart key={services.id} services={services} handleRemove={handleRemoveFromCart}  ></AddCart>

                            ))
                               
                        }

                    </div>
                  
                    </div>  }  
        </div>
    );
};

export default AddCartSet;