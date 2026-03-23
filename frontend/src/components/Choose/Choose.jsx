import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { chooseLinesLG, chooseLinesSM } from "../../constants/welcome";

const Choose = () => {

    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const chooseLines = isMobD ? chooseLinesSM : chooseLinesLG;

    useGSAP(() => {

        const lines = gsap.utils.toArray(".choose-title-clip");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".choose-section",
                start: "top 75%",
                end: "bottom 100%",
                scrub: true,
                // markers: true,
            },
        });

        tl.from(".choose-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        // Animate the div height
        if (!isMobD) {
            tl.fromTo(
                ".title-part",
                { height: "10vh" },
                { height: `${isMobD ? "22vh" : "50vh"}`, ease: "none" }
            );
        }

        // Animate text reveal — run *at the same time*
        tl.to(
            lines,
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            },
            "<" // 👈 runs at the same time as the previous animation
        );

        if (!isMobD) {
            tl.from(".choose-sec", {
                yPercent: 100,
                duration: 1,
            }, "<");
        }
    });

    return (
        <section className="choose-section w-full min-h-[100dvh] flex flex-col justify-between p-8 md:p-16 bg-zinc-950">
            <div className="flex flex-col gap-2">
                <p className='text-[0.65rem] uppercase tracking-[0.2em] text-gold font-bold choose-subtitle'>
                    Discover Parm Tjhung Designs <span className="opacity-50">/ BESPOKE ARCHITECTURE</span>
                </p>
                <div className="lg:mt-12 mt-8 title-part origin-bottom">
                    {
                        chooseLines.map((line, index) => (
                            <h1 key={index} className="choose-heading text-zinc-900 lg:text-[10rem] text-[3.5rem] leading-[0.85] font-bold tracking-tighter choose-title">
                                <span className={`choose-title-break relative block ${index == 1 ? "lg:pb-4 pb-2" : ""}`}>
                                    {line}
                                    <span className={`choose-title-clip absolute inset-0 text-white glow-gold ${index == 1 ? "lg:pb-4 pb-2" : ""}`}>
                                        {line}
                                    </span>
                                </span>
                            </h1>
                        ))
                    }
                </div>
            </div>

            <div className="choose-sec w-full flex lg:flex-row flex-col justify-between items-start gap-12 lg:mt-24 mt-12">
                <div className='lg:w-[45%] w-full text-gold lg:text-[2rem] text-[1.25rem] leading-[1.2] font-medium lg:pr-12'>
                    <p>You can choose from three core service areas. Each <span className="text-white">PTDesigns</span> project is delivered to the highest standard, tailored precisely to your brief and vision. Choose the approach that suits you.</p>
                </div>
                
                <div className='lg:w-[45%] w-full'>
                    <div className="lg:w-3/4 w-full">
                        <p className="text-[0.7rem] uppercase tracking-wider text-zinc-500 mb-8">
                            All PTDesigns projects are built on foundational principles:
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-start items-start gap-3 mt-4">
                        {[
                            { text: "Luxury", silver: false },
                            { text: "Precision—Built", silver: true },
                            { text: "Bespoke", silver: false },
                            { text: "Livable", silver: true },
                            { text: "Timeless", silver: false },
                            { text: "Light-First", silver: true }
                        ].map((tag, i) => (
                            <div 
                                key={i} 
                                className={`px-6 py-2 rounded-full text-sm md:text-base font-bold tracking-tight transition-all duration-500 ${
                                    tag.silver 
                                    ? "border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white" 
                                    : "border border-gold/30 text-gold hover:border-gold hover:glow-gold"
                                }`}
                            >
                                {tag.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;