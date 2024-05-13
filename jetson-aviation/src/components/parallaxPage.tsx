import { useRef, useEffect, useState } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { TypeAnimation } from "react-type-animation";


export const ParallaxPage = () => {
    const [background, setBackground] = useState(30);

    const parallaxRef = useRef(null);
    const cloudlayer1 = useRef(null);
    const cloudlayer2 = useRef(null);
    const cloudlayer3 = useRef(null);
    const cloudlayer4 = useRef(null);   
    const flight = useRef(null); 
    const sun = useRef(null);
    const starrySky = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var timeline = gsap.timeline({
                defaults: { duration: 1},
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 30))
                        console.log(Math.ceil(self.progress * 100))
                    },
                },
            });
            timeline.to(
                flight.current,
                {
                    y: "-=1500",
                    x: "+=1500"
                },
                0
            );
            timeline.to(
                sun.current,
                {
                    y: "-=400"
                },
                0
            );
            timeline.to(
                starrySky.current,
                {
                    y: "-=150"
                },
                0
            );
            timeline.to(
                cloudlayer1.current,
                {
                    y: "+=4vw",
                },
                0
            );
            timeline.to(
                cloudlayer2.current,
                {
                    y: "-=0",
                },
                0
            );
            timeline.to(
                cloudlayer3.current,
                {
                    y: "+=4vw",
                },
                0
            );
            timeline.to(
                cloudlayer4.current,
                {
                    y: "+=2vw",
                },
                0
            );
        });
        
        return () => ctx.revert();
    },[])


    const parallaxCloudBackgroundStyles = 'z-10 absolute bottom-[0vw] w-[100vw]';
    const parallaxCloudForegroundStyles = 'z-30 absolute bottom-[0vw] w-[100vw]';    
    const parallaxCloudTopLayerStyles = 'z-30 absolute bottom-[-5vw] w-[100vw]';
    const parallaxStarStyles = 'absolute top-0 w-[100vw]';
    const parallaxSunStyles = 'z-0 absolute top-[30%] left-[35%] right-[35%] w-[30%]';
    const parallaxFlightStyles = 'z-20 rotate-45 absolute bottom-[-15%] left-[5%] w-[30vw]';

    return (
        <div ref={parallaxRef} className="parallax-outer bg-gradient-to-b from-[rgb(24,80,184)] to-[#F4A939] h-[100vh] overflow-hidden overflow-x-none">
            <div className="parallax">
                <div className ="absolute z-50 drop-shadow-xl top-[30%] w-[100%] leading-tight font-sans text-[6vw] font-extrabold inline-block text-center align-middle">
                    <div>Do you have your head</div>
                    <TypeAnimation className="text-zinc-900"
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'in the clouds?',
                        3000, // wait 1s before replacing "Mice" with "Hamsters"
                        'over the rainbow ?',
                        2500,
                        'around the sun ?',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </div>
                <img ref= {sun} src="./img/Sun.png" className={parallaxSunStyles}/>
                <img ref= {cloudlayer1} src="./img/Wave L1.png" className = { parallaxCloudBackgroundStyles}/>            
                <img ref= {flight}src="./img/Designer.png" className = {parallaxFlightStyles}/>
                <img ref= {cloudlayer2}src="./img/Wave L2.png" className = { parallaxCloudForegroundStyles }/>
                <img ref= {cloudlayer3} src="./img/Wave L3.png" className = { parallaxCloudForegroundStyles }/>
                <img ref= {cloudlayer4} src="./img/Wave L4.png" className = { parallaxCloudTopLayerStyles }/>
                <img ref= {starrySky} src="./img/Starry Sky.png" className = {parallaxStarStyles}/>
                
            </div>
        </div>
    );
};