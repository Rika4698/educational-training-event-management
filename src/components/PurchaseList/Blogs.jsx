/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
function TiltCard({ title, description, statTitle, statValue, buttonText }) {
    const [style, setStyle] = useState({});
    const [glowStyle, setGlowStyle] = useState({});
  
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const percentX = (x - centerX) / centerX;
      const percentY = -((y - centerY) / centerY);
  
      setStyle({
        transform: `perspective(1000px) rotateY(${percentX * 10}deg) rotateX(${percentY * 10}deg)`,
      });
  
      setGlowStyle({
        opacity: 1,
        backgroundImage: `radial-gradient(circle at ${x}px ${y}px)`,
      });
    };
  
    const handleMouseLeave = () => {
      setStyle({ transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)" });
      setGlowStyle({ opacity: 0 });
    };
  
    return (
      <div
        className="tilt-card w-80 h-96 bg-gradient-to-br from-purple-700 to-pink-500 rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 ease-out hover:scale-105     dark:from-blue-900        dark:to-sky-400"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        <div className="glow absolute inset-0 transition-opacity duration-300" style={glowStyle}></div>
        <div className="tilt-card-content p-6 flex flex-col h-full justify-between relative z-10">
          <div>
            <h2 className="text-xl font-extrabold font-serif text-white pt-2 mb-2">{title}</h2>
            <p className="text-stone-300 pt-6 font-semibold ">{description}</p>
          </div>
         
        </div>
      </div>
    );
  }
  TiltCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    statTitle: PropTypes.string.isRequired,
    statValue: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  };
const Blogs= () => {
    // const card = document.querySelector('.tilt-card');
    // const glow = document.querySelector('.glow');
    // const content = document.querySelector('.tilt-card-content');

    // card.addEventListener('mousemove', (e) => {
    //     const rect = card.getBoundingClientRect();
    //     const x = e.clientX - rect.left;
    //     const y = e.clientY - rect.top;

    //     const centerX = rect.width / 2;
    //     const centerY = rect.height / 2;

    //     const percentX = (x - centerX) / centerX;
    //     const percentY = -((y - centerY) / centerY);

    //     card.style.transform = `perspective(1000px) rotateY(${percentX * 10}deg) rotateX(${percentY * 10}deg)`;
    //     content.style.transform = `translateZ(50px)`;
    //     glow.style.opacity = '1';
    //     glow.style.backgroundImage = `
    //         radial-gradient(
    //             circle at 
    //             ${x}px ${y}px, 
    //             #ffffff44,
    //             #0000000f
    //         )
    //     `;
    // });

    // card.addEventListener('mouseleave', () => {
    //     card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    //     content.style.transform = 'translateZ(0px)';
    //     glow.style.opacity = '0';
    // });




    return (
        <div className="text-center p-8 md:p-12 dark:bg-black">
            <h1 className="font-bold  text-5xl text-red-900 mb-4 underline dark:text-pink-300">About Us</h1>
            <h1 className="font-bold  text-3xl text-lime-700 p-4 dark:text-lime-300 md:px-14">Navigating Educational and Training Events: A Guide to Workshops, Webinars, Career Fairs, and Training Programs</h1> <br />
            <p className="font-medium text-lg md:px-14 dark:text-white">In today is rapidly evolving world, staying ahead of the curve is essential for personal and professional growth. Educational and training events have become invaluable resources for individuals looking to acquire new skills, expand their knowledge, and explore exciting opportunities. <br />In this blog, we will take you on a journey through the diverse landscape of educational and training events, including workshops, webinars, career fairs, and training programs.</p>


            <div className="bg-white  py-10 gap-6 flex flex-col  items-center justify-center md:flex-row   lg:gap-36  dark:bg-black">
            <div className="  ">
      <TiltCard
        title="Workshops & Webinars"
        description=" Start with a subheading: Workshops and Webinars.
Describe what workshops and webinars are and how they differ.
Highlight the benefits of attending workshops and webinars, such as skill enhancement and networking opportunities.
Provide examples of popular workshop and webinar topics."
        statTitle="Processing Power"
        statValue="100 Qubits"
        buttonText="Explore Now"
      />
      </div>

      <div className="">
      <TiltCard
        title="Career Fairs"
        description="Start with a subheading: Career Fairs.
Explain what career fairs are and their role in connecting job seekers with employers.
Discuss the advantages of participating in career fairs, including job opportunities and networking.
Share tips for making the most of a career fair experience."
        statTitle="Efficiency"
        statValue="99.9%"
        buttonText="Learn More"
      />
      </div>
    </div>
    <div className="flex justify-center items-center my-10 dark:bg-black ">
    <div className="relative cursor-pointer dark:text-white">
        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
        <div
            className="relative p-6 bg-white dark:bg-blue-900 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
                
                <h3 className="my-2 ml-3 text-2xl font-bold text-gray-800 dark:text-white">We are giving more opportunities to learning.</h3>
            </div>
           
        </div>
    </div>

</div>

            {/* <div className="bg-white  py-10 flex items-center justify-center overflow-hidden md:justify-start  dark:bg-black">
    <div
        className="tilt-card w-80 h-96 bg-gradient-to-br from-purple-700 to-pink-500 rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 ease-out hover:scale-105">
        <div className="glow opacity-0 transition-opacity duration-300"></div>
        <div className="tilt-card-content p-6 flex flex-col h-full justify-between relative z-10">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Quantum Leap</h2>
                <p className="text-gray-200">Experience the future of technology with our revolutionary quantum computing
                    solution.</p>
            </div>
            <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="text-xs text-gray-300 uppercase">Processing Power</div>
                    <div className="text-2xl font-bold text-white">100 Qubits</div>
                </div>
                <button className="w-full py-2 bg-white text-purple-700 rounded-lg font-semibold transform transition hover:scale-105 active:scale-95">
                    Explore Now
                </button>
            </div>
        </div>
    </div> 

    
</div> 

<div>
<div className="bg-white  py-10 flex items-center justify-center overflow-hidden md:justify-end   dark:bg-black">
    <div
        className="tilt-card w-80 h-96 bg-gradient-to-br from-purple-700 to-pink-500 rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 ease-out hover:scale-105">
        <div className="glow opacity-0 transition-opacity duration-300"></div>
        <div className="tilt-card-content p-6 flex flex-col h-full justify-between relative z-10">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Quantum Leap</h2>
                <p className="text-gray-200">Experience the future of technology with our revolutionary quantum computing
                    solution.</p>
            </div>
            <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="text-xs text-gray-300 uppercase">Processing Power</div>
                    <div className="text-2xl font-bold text-white">100 Qubits</div>
                </div>
                <button className="w-full py-2 bg-white text-purple-700 rounded-lg font-semibold transform transition hover:scale-105 active:scale-95">
                    Explore Now
                </button>
            </div>
        </div>
    </div>

    
</div>
</div> */}

            {/* <h1 className="font-bold  text-2xl">Workshops and Webinars</h1>
            <p className="font-medium text-lg">
            Start with a subheading: Workshops and Webinars.
Describe what workshops and webinars are and how they differ.
Highlight the benefits of attending workshops and webinars, such as skill enhancement and networking opportunities.
Provide examples of popular workshop and webinar topics.
            </p>
            <h1  className="font-bold  text-2xl">Career Fairs </h1>
            <p className="font-medium text-lg">Start with a subheading: Career Fairs.
Explain what career fairs are and their role in connecting job seekers with employers.
Discuss the advantages of participating in career fairs, including job opportunities and networking.
Share tips for making the most of a career fair experience.</p> */}

{/* <h1  className="font-bold  text-4xl">We are giving more opportunities to learning.</h1> */}
        </div>
    );
};

export default Blogs;



