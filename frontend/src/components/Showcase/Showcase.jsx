import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import acImg1 from "../../assets/showcase-1.jpg";
import acImg2 from "../../assets/showcase-2.jpg";
import acImg3 from "../../assets/showcase-3.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Showcase = () => {
    const containerRef = useRef(null);
    const imgConRef = useRef(null);

    useGSAP(() => {
        if (!imgConRef.current || !containerRef.current) return;

        // ✅ TARGET ONLY INNER IMAGES (NOT OUTER DIV)
        const images = gsap.utils.toArray(".image-item");

        const totalWidth =
            imgConRef.current.scrollWidth - containerRef.current.offsetWidth;

        let lastScroll = window.scrollY;
        let velocity = 0;

        // ✅ Horizontal scroll animation (unchanged)
        gsap.to(imgConRef.current, {
            x: () => -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "-10% 10%",
                end: () => `+=${totalWidth}`,
                scrub: true,
                pin: true,
                // invalidateOnRefresh: true,
                // markers: true,

                // onUpdate: () => {
                //     const currentScroll = window.scrollY;
                //     velocity = currentScroll - lastScroll;
                //     lastScroll = currentScroll;

                //     // ✅ Smooth limited movement (no gap, no break)
                //     const move = gsap.utils.clamp(
                //         -60,
                //         60,
                //         velocity * 2.2
                //     );

                //     images.forEach((img, index) => {
                //         gsap.to(img, {
                //             x: move * (index % 2 === 0 ? 1 : -1),
                //             duration: 0.4,
                //             ease: "power3.out",
                //             overwrite: "auto"
                //         });
                //     });
                // }
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className='relative w-full h-dvh overflow-hidden bg-zinc-950'
        >
            <div
                ref={imgConRef}
                className="absolute top-0 left-0 h-full flex items-center justify-start gap-12 px-12 overflow-hidden"
            >
                {/* Image 1 */}
                <div className="relative flex-shrink-0 w-[90vw] max-w-[1400px] h-[80dvh] max-h-[800px] overflow-hidden group">
                    <div className="w-full absolute top-8 left-0 px-8 md:px-12 flex justify-between items-start text-white z-20">
                        <div className="flex flex-col">
                            <p className="text-gold uppercase tracking-[0.3em] text-[0.6rem] font-bold mb-2 opacity-80">RESIDENTIAL</p>
                            <h2 className="glow-gold font-bold leading-none tracking-tighter text-2xl md:text-4xl">
                                Luxury Residential<br /> 
                                <span className="text-gold">Architecture</span>
                            </h2>
                        </div>
                        <div className="px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
                            PTDESIGNS®
                        </div>
                    </div>
                    
                    <img
                        src={acImg1}
                        alt="Activity 1"
                        className="image-item w-full h-full object-cover rounded-[2.5rem] brightness-75 transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 rounded-[2.5rem] pointer-events-none"></div>
                    
                    <div className="w-full absolute bottom-8 left-0 px-8 md:px-12 flex justify-between items-end z-20">
                        <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed max-w-sm">
                            Bespoke homes designed around light, space, and the way you live — crafted for Perth’s unique landscape.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-gold text-[0.65rem] font-bold tracking-tighter border border-gold/30 px-3 py-1 rounded-full">01</span>
                            <span className="text-zinc-600 text-[0.65rem] font-bold tracking-tighter border border-white/5 px-3 py-1 rounded-full">03</span>
                        </div>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="relative flex-shrink-0 w-[90vw] max-w-[1400px] h-[80dvh] max-h-[800px] overflow-hidden group">
                    <div className="w-full absolute top-8 left-0 px-8 md:px-12 flex justify-between items-start text-white z-20">
                        <div className="flex flex-col">
                            <p className="text-gold uppercase tracking-[0.3em] text-[0.6rem] font-bold mb-2 opacity-80">COMMERCIAL</p>
                            <h2 className="glow-gold font-bold leading-none tracking-tighter text-2xl md:text-4xl">
                                Commercial<br />
                                <span className="text-gold">Fit-Outs</span>
                            </h2>
                        </div>
                        <div className="px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
                            PTDESIGNS®
                        </div>
                    </div>
                    
                    <img
                        src={acImg2}
                        alt="Activity 2"
                        className="image-item w-full h-full object-cover rounded-[2.5rem] brightness-75 transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 rounded-[2.5rem] pointer-events-none"></div>
                    
                    <div className="w-full absolute bottom-8 left-0 px-8 md:px-12 flex justify-between items-end z-20">
                        <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed max-w-sm">
                            Refined workspaces that elevate your brand — from boutique offices to large-scale commercial interiors.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-gold text-[0.65rem] font-bold tracking-tighter border border-gold/30 px-3 py-1 rounded-full">02</span>
                            <span className="text-zinc-600 text-[0.65rem] font-bold tracking-tighter border border-white/5 px-3 py-1 rounded-full">03</span>
                        </div>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="relative flex-shrink-0 w-[90vw] max-w-[1400px] h-[80dvh] max-h-[800px] overflow-hidden group">
                    <div className="w-full absolute top-8 left-0 px-8 md:px-12 flex justify-between items-start text-white z-20">
                        <div className="flex flex-col">
                            <p className="text-gold uppercase tracking-[0.3em] text-[0.6rem] font-bold mb-2 opacity-80">INTERIOR</p>
                            <h2 className="glow-gold font-bold leading-none tracking-tighter text-2xl md:text-4xl">
                                Interior<br />
                                <span className="text-gold">Architecture</span>
                            </h2>
                        </div>
                        <div className="px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
                            PTDESIGNS®
                        </div>
                    </div>
                    
                    <img
                        src={acImg3}
                        alt="Activity 3"
                        className="image-item w-full h-full object-cover rounded-[2.5rem] brightness-75 transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 rounded-[2.5rem] pointer-events-none"></div>
                    
                    <div className="w-full absolute bottom-8 left-0 px-8 md:px-12 flex justify-between items-end z-20">
                        <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed max-w-sm">
                            Thoughtful interior architectural detailing that brings cohesive luxury to every touchpoint of your space.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-gold text-[0.65rem] font-bold tracking-tighter border border-gold/30 px-3 py-1 rounded-full">03</span>
                            <span className="text-zinc-600 text-[0.65rem] font-bold tracking-tighter border border-white/5 px-3 py-1 rounded-full">03</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;