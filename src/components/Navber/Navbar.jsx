/* eslint-disable react/prop-types */

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext, useEffect } from "react";
import {  NavLink } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";
import { AuthContext } from "../../Hook/AuthProvider";
import { CartContext } from "../../Hook/CartContext";

const Navbar = () => {
    const{user,logOut} = useContext(AuthContext);
    const { cart } = useContext(CartContext);
const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
}
const [isOpen, setIsOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    const rootElement = document.documentElement;

    if (isDarkMode) {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

        return (
        <div className=" ">
          {/* data-aos="fade-right" data-aos-duration="2000"  > */}
            <div className="navbar   bg-base-100 py-6 md:py-10 lg:py-6 dark:bg-gray-900 dark:text-white" >
  <div className="navbar-start "> 
  <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 lg:hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
  <div
          className={`fixed top-0 left-0 w-2/3 sm:w-1/2 bg-white dark:bg-gray-800 h-full z-50 p-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:flex lg:items-center lg:w-auto lg:p-0 lg:translate-x-0 `}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 z-[100]"
          >
            <LuX size={25} />
          </button>

          <ul className="space-y-4 lg:hidden">
            <li className="group  max-lg:py-3 px-3 relative">
            <label  htmlFor="darkModeToggle" className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" id="darkModeToggle" className="theme-controller" checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)} value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-12  text-amber-400 border-[2px] rounded-lg fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-12 text-white bg-black border-[2px] rounded-lg fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 px-3 relative">
            <NavLink to="/"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline  text-lg dark:text-sky-400 " : "font-semibold text-lg "
                }>Home</NavLink>
            </li>
      
            {
               !user? "": <>
                  
                <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/services"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline  text-lg dark:text-sky-400" : "font-semibold text-lg "
                }>Event-Services</NavLink></li>
 </>
      
    }
                <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to='/purchase'
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline  text-lg dark:text-sky-400" : "font-semibold text-lg "
                }>About Us</NavLink></li>
               
                <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/contact"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ?"text-blue-800 font-bold underline  text-lg dark:text-sky-400" : "font-semibold text-lg "
                }>Contact</NavLink></li>
                {
                    !user? "": <>
                 <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to='/cart' className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 dark:text-sky-400 " : "text-black  dark:text-white"
                }>
                <div className="indicator  mt-1"> 
                <FontAwesomeIcon className="h-6 " icon={faCartShopping} />
                <span className="badge badge-md indicator-item  border-3 font-semibold text-blue-800 ">{cart.length}</span>
                </div>
                </NavLink>
                </li>
                 </>
      
                }
                
            
          </ul>
        </div>

        <div className="flex items-center gap-x-3 max-[639px]:mx-2 sm:mx-6  md:mx-6 lg:hidden">
          
          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <LuMenu size={25} />
          </button>
        </div>



    
     
  {/* data-aos="fade-right"
     data-aos-duration="2000" */}
    {/* <div className="dropdown">
      {/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> */}
      {/* <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
      <li><NavLink to="/"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double gap-10" : "font-semibold gap-10"
                }>Home</NavLink></li>
      
                 
               {
                    !user? "": <>
                  
                <li><NavLink to="/services"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>Event-Services</NavLink></li>
 </>
      
    }
                <li><NavLink to='/purchase'
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double text-base" : "font-semibold text-base"
                }>Blog</NavLink></li>
               
                <li><NavLink to="/contact"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double" : "font-semibold"
                }>Contact</NavLink></li>
                {
                    !user? "": <>
                 <li><NavLink to='/cart' className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "bg-slate-300 rounded-btn ml-2" : "ml-2"
                }>
                <div className="indicator">  
                <FontAwesomeIcon icon={faCartShopping} color="blue" />
               <span className="badge badge-sm indicator-item">{cartCount}</span>
                </div> 
                </NavLink>
               
                </li>
                 </>
      
                }
     
         
      </ul> */}
    {/* </div>  */}


  <div className="flex  ">
  <img className=" lg:w-10 rounded-s-md"  src="https://i.ibb.co/q7KyqzJ/browser.png" alt="" />
   <img className="w-36 rounded-e-md  md:w-48 lg:w-48 " src="https://i.ibb.co/s1fFGFB/194977.png
" alt="" />
  </div>
  </div>


  <div className="navbar-center hidden lg:flex m-6" >
    
    
     {/* data-aos="zoom-in-down"
     data-aos-duration="2000"> */}
     


    <ul className="flex gap-6 text-xl ml-10 font-normal xl:gap-8">
      <li><NavLink to="/"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline dark:text-sky-400 " : "font-semibold"
                }>Home</NavLink></li>
     
      
                {
                    !user? "": <>
                  
                <li><NavLink to="/services"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline dark:text-sky-400" : "font-semibold"
                }>Event-Services</NavLink></li>
               
               </>
                 } 
                <li><NavLink to='/purchase'
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline dark:text-sky-400" : "font-semibold"
                }>About Us</NavLink></li>
                
                   
      <li><NavLink to="/contact"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 font-bold underline dark:text-sky-400" : "font-semibold"
                }>Contact</NavLink></li>
                 {
                    !user? "": <>
                  <li><NavLink to='/cart' className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-800 dark:text-sky-400 " : "text-black  dark:text-white"
                }>
                <div className="indicator  mt-1"> 
                <FontAwesomeIcon className="h-6 " icon={faCartShopping} />
                <span className="badge badge-md indicator-item  border-3 font-semibold text-blue-800 ">{cart.length}</span>
                </div>
                </NavLink>
                </li>
                </>
              } 
                 
                 
{/* //                 {/* <li><NavLink to='/buy'
// className={({ isActive, isPending }) =>
// isPending ? "pending" : isActive ? "text-blue-800 font-bold underline decoration-double text-base" : "font-semibold text-base"
//                 }>purchase</NavLink></li>
//                 </> */} 
      
                
    </ul>
  </div>
  <div className="hidden lg:flex  mx-3 ">
  <label  htmlFor="darkModeToggle" className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" id="darkModeToggle" className="theme-controller" checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)} value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-12 w-8  text-amber-400 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-12 w-8 text-white fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
          </div>
  {
    user?
   <div className="navbar-end min-[425px]:gap-4 max-[375px]:gap-2">
  {/* //    data-aos="fade-right"
  // //  data-aos-duration="3000"> */}
    <div className="flex items-center flex-col  md:flex-row md:gap-4">
    <img className="w-8 rounded-full" src={user.photoURL} alt="" />
    <h3 className=" w-12 mr-2  text-sm text-center font-semibold ">{user.displayName}</h3>
    </div>
    <button className="rounded-lg text-white bg-gradient-to-r from-sky-400 to-green-500 w-[62px] h-14 font-bold m  lg:w-24 lg:h-10 md:w-24 md:h-10 "  onClick={handleSignOut}>Logout</button> 
    </div>
       :
    <div className="navbar-end"> 
     {/* data-aos="fade-down-right"
    data-aos-duration="2000"
    > */}
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