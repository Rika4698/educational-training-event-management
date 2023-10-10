/* eslint-disable react/prop-types */

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";


const Navbar = () => {
    const{user,logOut} = useContext(AuthContext);
    
const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
}
        return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to="/"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>Home</NavLink></li>
      <li><NavLink to="/services"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>Event-Services</NavLink></li>
                 <li><NavLink to="/contact"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>Contact</NavLink></li>
      <li><NavLink to="/about"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>About Us</NavLink></li>
     
         
      </ul>
    </div>
   <img className=" lg:w-10 "  src="https://i.ibb.co/q7KyqzJ/browser.png" alt="" />
   <img className="w-36 lg:w-48 " src="https://i.ibb.co/s1fFGFB/194977.png
" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-6 text-xl ml-10 font-normal xl:gap-8">
      <li><NavLink to="/"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>Home</NavLink></li>
      <li><NavLink to="/services"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>Event-Services</NavLink></li>
      <li><NavLink to="/contact"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>Contact</NavLink></li>
      <li><NavLink to="/about"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>About Us</NavLink></li>
                <li><NavLink to='/cart' className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "bg-slate-300 rounded-btn ml-2" : "ml-2"
                }>
                {/* <div className="indicator">  */}
                <FontAwesomeIcon icon={faCartShopping} color="blue" />
                {/* <span className="badge badge-sm indicator-item">{cartCount}</span>
                </div> */}
                </NavLink>
               
                </li>
                <li><NavLink to="/purchase"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double text-base" : "font-semibold text-base"
                }>Purchase</NavLink></li>
      
    </ul>
  </div>
  {
    user?
   <div className="navbar-end">
    
    <img className="w-8 ml-10" src={user.photoURL} alt="" />
    <h3 className=" text-sm text-center font-semibold ml-2 mr-2">{user.displayName}</h3>
    <button className="btn text-white bg-gradient-to-r from-sky-400 to-green-500 w-16 h-8 lg:w-auto"  onClick={handleSignOut}>Logout</button> 
    </div>
       :
    <div className="navbar-end">
    <NavLink to='/login'>
    <button className="btn text-white bg-gradient-to-r from-violet-400 to-blue-500">Login</button>
    </NavLink>
  </div>
  }
</div>
        </div>
    );
};

export default Navbar;