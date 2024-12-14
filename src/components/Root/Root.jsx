import { Outlet } from "react-router-dom";
import Navbar from "../Navber/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import { CartProvider } from '../../Hook/CartContext'


const Root = () => {
    return (
        <div>
            <CartProvider>
            <ScrollToTop></ScrollToTop>
            
          <div className="sticky top-0 z-10"> <Navbar ></Navbar></div>
            <Outlet></Outlet>
            </CartProvider>
            <Footer></Footer>
        </div>
    );
};

export default Root;