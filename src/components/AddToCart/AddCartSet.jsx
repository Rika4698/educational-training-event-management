import { useEffect, useState } from "react";

import AddCart from "./AddCart";


const AddCartSet = () => {
    const [cart, setCart] = useState([]);
    const [noFound, setNoFound] = useState(false);
    
    useEffect(() => {

        const cartItems = JSON.parse(localStorage.getItem("cart"));
       
        
        if(cartItems && cartItems.length>0) {
            setCart(cartItems);
        }
        else {
            setNoFound("Not Added Anything!");

        }
        
        
    }, []);
   
    const handleRemove = (id) => {
       
        const updatedCart = cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        if (updatedCart.length == 0) {
            localStorage.clear();
            setNoFound("Not Added Anything!")
          }
        

      };
      
  
    return (
        <div>
            
            {noFound ?
                <h1 className="h-[80vh] flex justify-center items-center font-bold text-4xl">{noFound}</h1> :
                <div className="">
                      {/* <Link to={`/cart`} cartCount={cart.length}>
                
                </Link>  */}
                       
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        {
                             cart.map((services) => (
                                <AddCart key={services.id} services={services} setCart={setCart} handleRemove={handleRemove}></AddCart>

                            ))
                               
                        }

                    </div>
                  
                    </div>  }

        </div>
    );
};

export default AddCartSet;