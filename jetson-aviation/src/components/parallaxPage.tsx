import React from "react";

export const ParallaxPage = () => {

    const parallaxImgStyles = 'z-10 absolute bottom-0 w-[100vw]';
    const parallaxStarStyles = 'absolute top-0 w-[100vw]';
    const parallaxSunStyles = 'z-10 absolute top-[40%] left-[35%] right-[35%] w-[30%]';
    const parallaxFlightStyles = 'z-0 rotate-45 absolute bottom-0 left-[20%] w-[50vw]';

    return (
        <div className="parallax-outer bg-gradient-to-b from-[rgb(24,80,184)] to-[#F4A939] h-[120vh] overflow-hidden ">
        <div className="parallax" >
            <div className ="absolute z-30 drop-shadow-xl top-[50%] w-[100vw] leading-tight font-sans text-[5rem] font-extrabold inline-block text-center align-middle">
                <div>Do you want to fly a</div>
                <div className="text-yellow-500">Globemaster ?<span className="text-blue-900">|</span></div>
            </div>
            <img src="./img/Sun.png" className={parallaxSunStyles}/>
            <img src="./img/Wave L1.png" className = {parallaxImgStyles}/>
            <img src="./img/Wave L2.png" className = {parallaxImgStyles }/>
            <img src="./img/Wave L3.png" className = {parallaxImgStyles }/>
            <img src="./img/Wave L4.png" className = {parallaxImgStyles }/>
            <img src="./img/Starry Sky.png" className = {parallaxStarStyles}/>
            <img src="./img/Designer.png" className = {parallaxFlightStyles}/>
            
        </div>
        </div>
    );
};