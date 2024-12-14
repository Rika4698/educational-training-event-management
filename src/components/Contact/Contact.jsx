import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
    return (
     <div className="dark:bg-black">
        <div
        className="bg-cover bg-about-us bg-center "
      
      >
        <div className=" md:max-w-screen-2xl mx-auto  justify-center ">
          <h2 className="p-8 text-center text-5xl font-bold text-lime-900 font-serif dark:text-lime-300 ">
            Contact Us
          </h2>
          
        </div>
      </div>
     
     
      {/* page section */}
      <div className="lg:max-w-screen-2xl w-11/12 mx-auto mt-24 lg:px-32">
        {/* use extra div for change any desgin or any problem */}
        <div>
          <div className="pb-4 flex md:flex-row flex-col justify-center items-center gap-16 md:gap-6 ">
            <div
              className=" group md:w-full w-11/12 mx-auto dark:bg-white text-black h-[200px] shadow-2xl flex flex-col justify-center items-center relative
                         py-10    transform duration-500 hover:scale-105 "
            >
              <p className=" group bg-red-500 group-hover:bg-sky-700 h-10 w-10 lg:h-16 lg:w-16 rounded-full flex flex-col justify-center items-center absolute -top-9">
                <CiLocationOn className="md:text-3xl text-2xl lg:text-5xl font-bold text-white"></CiLocationOn>
              </p>
              <h2 className=" lg:text-2xl font-bold">Visit Us Anytime</h2>
              <p className=" text-sky-700 text-center font-bold">
              Address:
                <br />
                Darussalam, Mirpur-1
Dhaka-1216
              </p>
            </div>
            <div className="group md:w-full w-11/12 dark:bg-white  text-black mx-auto h-[200px] shadow-2xl flex flex-col justify-center items-center relative transform duration-500 hover:scale-105">
              <p className=" bg-red-500 group-hover:bg-lime-700 h-10 w-10 lg:h-16 lg:w-16 rounded-full flex flex-col justify-center items-center absolute -top-9">
                <MdOutlineEmail className="md:text-3xl text-2xl lg:text-5xl font-bold text-white"></MdOutlineEmail>
              </p>
              <h2 className=" lg:text-2xl font-bold">Visit Us Anytime</h2>
              <p className=" text-lime-700 text-center font-bold">
              Email:
                <br />
                r4techskill@gmail.com
              </p>
            </div>
            <div className="group md:w-full dark:bg-white text-black w-11/12 mx-auto h-[200px] shadow-2xl flex flex-col justify-center items-center relative transform duration-500 hover:scale-105">
              <p className=" bg-red-500 group-hover:bg-indigo-700 h-10 w-10 lg:h-16 lg:w-16 rounded-full flex flex-col justify-center items-center absolute -top-9">
                <LuPhoneCall className="md:text-3xl text-2xl lg:text-5xl font-bold text-white"></LuPhoneCall>
              </p>
              <h2 className=" lg:text-2xl font-bold">Visit Us Anytime</h2>
              <p className=" text-indigo-700 text-center font-bold">
              Call us:
                <br />
                Mobile: 01791234674
              </p>
            </div>
          </div>
          </div>
          </div>

          <p className="py-16 text-center text-3xl font-bold text-sky-800 dark:text-sky-400 ">(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>


          </div>

          


    
    );
};

export default Contact;