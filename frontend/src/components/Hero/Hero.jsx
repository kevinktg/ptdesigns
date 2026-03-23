import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import mobileHeroBg from "../../assets/hero-mobile.jpg"
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {

    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });


    useGSAP(() => {
        if (!isMobHero) {
            gsap.to(".hero-section .hero-img", {
                yPercent: -10,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });
        };
    }, [isMobHero]);

    return (
        <section className="hero-section w-dvw min-h-[100dvh] md:p-6 p-4 mb-32">
            <div className="relative w-full h-[90dvh] rounded-[3rem] overflow-hidden bg-zinc-950 border border-white/5 shadow-2xl">
                <div className="h-full w-full">
                    {/* Background image (down layer) */}
                    <div className="hero-img absolute inset-0 bg-[url('./assets/hero-main.jpg')] bg-no-repeat bg-cover bg-center z-0 grayscale-[10%] brightness-50" />

                    {/* Smoke video (upper layer) */}
                    <video
                        src={smoke}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none opacity-30 mix-blend-screen"
                    ></video>
                </div>
                
                <div className="absolute inset-0 p-12 md:p-24 flex flex-col justify-between z-20">
                    <div className="flex flex-col">
                        <p className="text-gold uppercase tracking-[0.3em] text-[0.6rem] font-bold mb-4 opacity-80">
                            Established 2011 <span className="mx-2 text-white/20">|</span> Residential & Commercial
                        </p>
                        <h1 className="text-white font-bold leading-[0.85] flex flex-col">
                            <span className="brand-name glow-gold">Parm Tjhung</span>
                            <span className="text-[0.35em] tracking-[0.45em] font-light opacity-60 ml-1">ARCHITECT</span>
                        </h1>
                    </div>

                    <div className="w-full flex md:flex-row flex-col justify-between items-end gap-12">
                        <div className="flex flex-col gap-4 max-w-xl">
                            <h2 className="text-white font-bold leading-[0.95] glow-gold">
                                Design That Speaks—<br/>
                                <span className="text-gold">Before You Do</span>
                            </h2>
                        </div>

                        <div className="md:w-[30%] w-full flex flex-col gap-6 items-start md:items-end">
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed md:text-right text-justify">
                                Luxury architecture crafted for Perth — from concept to completion with <span className="text-gold font-semibold">PTDesigns</span>.
                            </p>
                            <div className="w-12 h-px bg-gold/40 hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
