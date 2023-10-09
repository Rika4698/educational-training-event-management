/* eslint-disable no-unused-vars */

import { AuthContext } from "../../Hook/AuthProvider";
import { useContext } from "react";


const Login = () => {
const {googleSignIn} = useContext(AuthContext);
const handleGoogle = () => {
    googleSignIn().then ((result) => {
        console.log(result.user);
    })
    
}



    return (
        <div>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex">
    
    <div className="card flex-shrink-0 w-full max-w-sm lg:w-[500px] min-h-screen shadow-2xl bg-base-100">
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold text-blue-900">Login Now</h1>
     <p>Enter your details to login</p>
    </div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogle} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;