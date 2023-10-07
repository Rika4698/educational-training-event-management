import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to="/" 
        className={({ isActive, isPending }) =>
     isPending ? "pending" : isActive ? "text-blue-700 font-bold underline" : ""
                 }>Home</NavLink></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   <img className=" lg:w-10 "  src="https://i.ibb.co/q7KyqzJ/browser.png" alt="" />
   <img className="w-36 lg:w-48 " src="https://i.ibb.co/s1fFGFB/194977.png
" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-8 text-xl font-normal">
      <li><NavLink to="/"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-700 font-bold underline decoration-double" : ""
                }>Home</NavLink></li>
      <li><NavLink to="/courses"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-700 font-bold underline decoration-double" : ""
                }>Courses</NavLink></li>
      <li><NavLink to="/contact"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-700 font-bold underline decoration-double" : ""
                }>Contact</NavLink></li>
      <li><NavLink to="/about"
className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-blue-700 font-bold underline decoration-double" : ""
                }>About Us</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-white bg-gradient-to-r from-violet-400 to-blue-500">Login/Register</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;