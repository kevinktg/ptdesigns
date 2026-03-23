import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
// If the constants file still has the old names:
import { chooseLinesSM as activitiesLinesSM } from "../../constants/welcome"; import './activities.css';
import { activitiesLinesLG } from "../../constants/activites"; import './activities.css';

const Activities = () => {
    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const activitiesLines = isMobD ? activitiesLinesSM : activitiesLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".activities-title-clip");
        const progressLines = gsap.utils.toArray(".progress-line");

        const activitiesTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".activities-section",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                // markers: true,
            },
        });

        activitiesTl.from(".activities-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        // Animate the div height
        if (!isMobD) {
            activitiesTl.fromTo(
                ".activities-part",
                { height: "10vh" },
                { height: `${isMobD ? "22vh" : "50vh"}`, ease: "none" }
            );
        }

        // Animate text reveal — run *at the same time*
        activitiesTl.to(
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
            activitiesTl.from(".activities-sec", {
                yPercent: 100,
                duration: 1,
            }, "<");
        }

        // activitiesTl.to(".progress-line", { delay: 2.5 });

        // Animate Easy progress line from 0% to 40%
        activitiesTl.fromTo(progressLines[0],
            { width: "0%" },
            { width: "40%", duration: 0.5, ease: "power2.in" }
        );

        // Animate Medium progress line from 0% to 60%
        activitiesTl.fromTo(progressLines[1],
            { width: "0%" },
            { width: "80%", duration: 0.5, ease: "power2.in" },
            "<" // Start at same time as previous
        );

        // Animate Hard progress line from 0% to 80%
        activitiesTl.fromTo(progressLines[2],
            { width: "0%" },
            { width: "60%", duration: 0.5, ease: "power2.in" },
            "<" // Start at same time as previous
        );
    });

    return (
        <section className="activities-section w-full h-[120vh] p-8 mt-16">
            <p className='text-[.7rem] font-bold text-[#f4f4f4] activities-subtitle'>What we offer</p>
            <div className="lg:mt-10 mt-7 activities-part origin-bottom">
                {activitiesLines.map((line, index) => (
                    <h1 key={index} className={`activities-heading text-[#f4f4f4] lg:text-[9.5rem] text-[3rem] leading-[0.9]`} font-medium tracking-tighter>
                        <span className={`activities-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>
                            {line}
                            <span className={`activities-title-clip ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>
                                {line}
                            </span>
                        </span>
                    </h1>
                ))}
            </div>
            <div className="activities-sec w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-0">
                <div className='lg:w-1/2 w-full'>
                    <div className="lg:w-[30%] w-[60%]">
                        <p className="text-[.7rem] text-[#f4f4f4] text-nowrap">Parm Tjhung Designs services span three core disciplines:</p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-5 mt-8 mr-14">
                        <div className="w-full mr-14">
                            <div className="flex justify-between w-full mb-4">
                                <h1 className="text-[#BFA77A] text-xl">Residential</h1>
                                <p className="text-[#BFA77A] text-[0.69rem]">Custom homes</p>
                            </div>
                            <div className="relative z-9 w-full h-[0.1rem] bg-[#787D76]">
                                <div className="progress-line absolute z-10 bg-[#f4f4f4] w-[40%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                        <div className="w-full mr-14">
                            <div className="flex justify-between w-full mb-4">
                                <h1 className="text-[#BFA77A] text-xl">Commercial</h1>
                                <p className="text-[#BFA77A] text-[0.69rem]">Fit-outs & offices</p>
                            </div>
                            <div className="relative z-9 w-full h-[0.1rem] bg-[#787D76]">
                                <div className="progress-line absolute z-10 bg-[#f4f4f4] w-[80%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                        <div className="w-full mr-14">
                            <div className="flex justify-between w-full mb-4">
                                <h1 className="text-[#BFA77A] text-xl">Interior</h1>
                                <p className="text-[#BFA77A] text-[0.69rem]">Material & light</p>
                            </div>
                            <div className="relative z-9 w-full h-[0.1rem] bg-[#787D76]">
                                <div className="progress-line absolute z-10 bg-[#f4f4f4] w-[60%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full text-[#BFA77A] lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-8 lg:pr-0'>
                    <p>From bespoke residential homes to high-end commercial fit-outs and interior architecture — Parm Tjhung Designs brings precision and vision to every brief. Each project is a collaboration from concept through to completion.</p>
                </div>
            </div>
        </section>
    );
};

export default Activities;