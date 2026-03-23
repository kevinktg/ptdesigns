import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";
import w1 from "../../assets/welcome-1.jpg"
import w2 from "../../assets/welcome-2.jpg"

const Welcome = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 75%",
                end: "bottom 75%",
                scrub: true,
                // markers: true
            },
        });

        lines.forEach((line) => {
            tl.to(line, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            });
        });

    });

    return (
        <section className='welcome-section w-full min-h-[100dvh] flex flex-col justify-center py-32 md:px-24 px-8 bg-zinc-950'>
            <div className='flex flex-col gap-6'>
                <p className="text-gold uppercase tracking-[0.2em] text-[0.7rem] font-bold opacity-60 mb-4">
                    Philosophy & Vision
                </p>
                <div className="w-full font-bold tracking-tighter">
                    <div className="w-full welcome-text flex flex-col justify-center items-start">
                        {welcomeLines.map((text, index) => (
                            <h1 key={index} className="relative block text-zinc-900 !leading-[0.8] text-[clamp(2.5rem,12vw,14rem)]">
                                {text}
                                <span className="clip-text-welcome text-white glow-gold">{text}</span>
                            </h1>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="flex md:flex-row flex-col justify-between items-center md:mt-48 mt-20 gap-16">
                <div className="flex flex-row justify-center items-center gap-6">
                    <div className="relative p-2 bg-white/5 border border-white/5 rounded-[8rem] overflow-hidden shadow-2xl">
                        <img src={w1} alt="architecture detail" className="rounded-[calc(8rem-0.5rem)] md:w-72 w-56 object-cover grayscale-[20%] brightness-90 transition-transform duration-700 hover:scale-110" />
                    </div>
                    <div className="relative p-2 bg-white/5 border border-white/5 rounded-[8rem] overflow-hidden mt-24 shadow-2xl">
                        <img src={w2} alt="material study" className="rounded-[calc(8rem-0.5rem)] md:w-72 w-56 object-cover grayscale-[20%] brightness-90 transition-transform duration-700 hover:scale-110" />
                    </div>
                </div>
                
                <div className="md:w-[45%] w-full flex flex-col gap-8">
                    <h3 className="text-gold leading-[1.1] font-medium tracking-tight">
                        <span className="opacity-60 block mb-4 italic text-2xl font-serif">Architecture that speaks—</span>
                        <span className="text-white glow-gold leading-none">spaces designed to elevate, inspire, and endure.</span>
                    </h3>
                    <p className="text-zinc-500 text-base md:text-lg leading-relaxed text-justify">
                        Every project at <span className="text-zinc-300">PTDesigns</span> is a meticulous balance of form and function, where light becomes a building material and every shadow is intentional. We create environments that don't just house life, but enhance it.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Welcome;